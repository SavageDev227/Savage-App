import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs, Redirect } from 'expo-router'



const TabsLayout = () => {
  return (
    <>
    
    <Tabs 
    screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#1C1C21',
            borderTopWidth: 0,
            
            
           
        }
    }}
    >
        <Tabs.Screen
        name="home"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "home" : "home-outline"} size={28} color={focused ? "red" : "white"} />
            )
        }}
        />
        <Tabs.Screen 
        name="create"
        options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={28} color={focused ? "red" : "white"} />
            )
        }}
        
        />
        <Tabs.Screen 
        name="profile"
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "person" : "person-outline"} size={28} color={focused ? "red" : "white"} />
            )
        }}
        
        />
        <Tabs.Screen 
        name="bookmark"
        options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "bookmark" : "bookmark-outline"} size={28} color={focused ? "red" : "white"} />
            )
        }}
        
        />
    </Tabs>
    
    </>
  )
}

export default TabsLayout