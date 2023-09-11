import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Drawer from "../../shared/Drawer/Drawer";
import Brand from "../../shared/Brand/Brand";

export default function LandingPageNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <View className="p-4 flex-row justify-between items-center">
      <Brand />

      <TouchableOpacity
        className="gap-y-1"
        onPress={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <View className="h-1 w-6 bg-primary-500" />
        <View className="h-1 w-6 bg-primary-500" />
        <View className="h-1 w-6 bg-primary-500" />
      </TouchableOpacity>

      {isDrawerOpen ? (
        <Drawer setIsDrawerOpen={setIsDrawerOpen}></Drawer>
      ) : null}
    </View>
  );
}
