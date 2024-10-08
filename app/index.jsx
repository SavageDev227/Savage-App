import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Onboarding = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logolight}
            className="w-[216] h-[97] my-0"
            resizeMode="contain"
          />
          <Image source={images.banner} className="w-[393px] h-[141px]" />
          <Text className="font-inter font-extrabold text-center my-[20px]">
            <Text className="text-3xl text-white ">All </Text>
            <Text className="text-3xl text-secondary">
              Your Developer Statistics{" "}
            </Text>
            <Text className="text-3xl text-white">in one place.</Text>
          </Text>
          <Text className="font-inter font-light text-lg text-white text-center">
            See universal statistics from GitHub, Youtube, LeetCode, and More!
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};
export default Onboarding;
