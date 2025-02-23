import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import sax from "../../assets/images/saxophone.jpg"
import Button from '@/components/Button'
import { router } from 'expo-router'
const ScreenOne = () => {
    return (
        <View className='items-center flex-1 px-6 mt-20'>
            <Image
                source={sax}
                resizeMode='contain'
                style={{ height: 400, width: 400 }}
            />
            <Text className=' font-fextrabold text-5xl my-10 self-start'>Discover the Best Stays</Text>
            <Text className=' font-fmedium text-xl self-start'>Find the perfect hostel anywhere, anytime. Affordable, comfortable, and hassle-free!</Text>
            <View className='self-start '>
                <Button
                    text="Next"
                    textStyles="text-white text-xl"
                    onPress={() => router.replace("/screen-two")}
                    containerStyles='bg-black w-20 rounded-2xl mt-6'
                />
                {/* //todo status */}
            </View>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default ScreenOne