import { Image, Linking, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import logo from "../assets/images/logo.jpg"

export default function Index() {
  return (
    <View className='bg-[#FFE700] flex-1'>

      <View className='items-center justify-center h-full'>
        <Image
          source={logo}
          resizeMode="contain"
        // style={{ height: 80, width: 80, marginLeft: 24 }}
        />
        <Button
          text="Continue"
          textStyles="text-white"
          onPress={() => router.replace("/screen-one")}
          containerStyles='bg-black w-20 mt-40'
        />
        {/* bottom text  */}
        <Text className='px-4 text-center mt-10'>
          By using GLU, you agree to our{' '}
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://your-terms-url.com')}
          >
            terms and conditions
          </Text>{' '}
          and{' '}
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://your-privacy-url.com')}
          >
            privacy policy
          </Text>.
        </Text>
      </View>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({

})
