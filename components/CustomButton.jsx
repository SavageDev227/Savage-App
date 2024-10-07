import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'


const CustomButton = ({ containerStyles, title, handlePress, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary min-h-[62px] rounded-xl justify-center items-center ${containerStyles}  ${isLoading ? 'opacity-50' : ''}`}
    >
      
      <Text className={`text-white font-inter font-semibold text-lg ${textStyles}`}>{title}</Text>
      
    </TouchableOpacity>
  );
};

export default CustomButton;