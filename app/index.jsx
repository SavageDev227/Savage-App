import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="bg-primary">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="w-full justify-center items-center h-full px-4">
                <Text className="text-white text-3xl">Hey Skibs</Text>
                <Link href="/home" className="text-black">Go to Home</Link>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}


