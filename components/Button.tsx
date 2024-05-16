import { ButtonProps } from "@/types/types";
import { styled } from "nativewind";
import { Pressable, Text } from "react-native";

const Button = ({ textStyle, children, ...props }: ButtonProps) => {
  return (
    <Pressable {...props} className="bg-blue-500 py-2 w-full px-4 rounded-md">
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

export default styled(Button, {
  props: {
    textStyle: true,
  },
});
