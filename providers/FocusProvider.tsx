import { files } from "@/data/data";
import React, { createContext, useCallback, useRef, useState } from "react";
import { FlatList } from "react-native";

export const FocusContext = createContext<any>(null);

type FocusProviderProps = {
  children: React.ReactNode;
};

const FocusProvider = ({ children }: FocusProviderProps) => {
  const [focused, setFocused] = useState<string>("welcome");
  const flatListRef = useRef<FlatList>(null);

  const handleFocus = useCallback(
    (name: string) => {
      setFocused(name);

      const index = files.findIndex((file) => file.name.split(".")[0] === name);
      if (index !== -1) {
        flatListRef.current?.scrollToIndex({ index, animated: true });
      }
    },
    [files, setFocused, flatListRef]
  );

  return (
    <FocusContext.Provider
      value={{ focused, setFocused, handleFocus, flatListRef }}
    >
      {children}
    </FocusContext.Provider>
  );
};

const useFocus = () => {
  const context = React.useContext(FocusContext);
  if (context === undefined || context === null) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
};

export { FocusProvider, useFocus };
