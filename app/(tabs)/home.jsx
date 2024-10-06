import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full px-4">
        <Text className="text-white text-3xl">SavageDev's Skibidi Application</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home