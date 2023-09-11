import { View, Text, Image } from "react-native";

export default function Brand() {
  return (
    <View className="flex-row items-center gap-x-2">
      <Image
        source={require("../../../assets/logos/logo.png")}
        className="w-12 h-12"
      />
      <View>
        <Text className="text-xl font-semibold text-primary-500">
          CardiCheck
        </Text>
        <Text className="text-xs text-grey-500">
          Health Care at your Fingertips
        </Text>
      </View>
    </View>
  );
}
