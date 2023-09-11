import { View, Text, TouchableOpacity } from "react-native";
import Brand from "../Brand/Brand";

export default function Drawer({ setIsDrawerOpen }) {
  return (
    <View className="flex-1 p-4 bg-white w-[90%] h-screen absolute right-0 top-0 bottom-0 z-10">
      <View className="flex-row items-center justify-between">
        <Brand />
        <TouchableOpacity
          className="px-4 py-2 bg-primary-200 rounded text-primary-500"
          onPress={() => setIsDrawerOpen(false)}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
