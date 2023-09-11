import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import LandingPageNavbar from "../components/pages/landing-page/LandingPageNavbar";
import Brand from "../components/shared/Brand/Brand";

export default function Page() {
  return (
    <View>
      <LandingPageNavbar />

      <ScrollView className="">
        <View className="p-4 h-80 bg-primary-500 justify-center gap-2">
          <Text className="text-white font-bold text-2xl">
            Stay Connected to your Health,
          </Text>
          <Text className="text-white font-bold text-2xl">
            No Matter Where you are
          </Text>
          <TouchableOpacity className="bg-white w-32 px-4 py-2 rounded text-center">
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
