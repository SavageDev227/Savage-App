import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'expo-status-bar'


const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full items-center h-full px-4 top-10">
        <Text className="text-white font-bold text-3xl">Add a new log</Text>
        <CustomButton 
        title="skib"
        handlePress={() => {}}
        containerStyles="w-full mt-7"
        ></CustomButton>
      </View>
      <StatusBar backgroundColor='bg-primary' style='dark'/>
    </SafeAreaView>
  )
}

export default Create