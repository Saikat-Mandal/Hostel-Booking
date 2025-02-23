import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import guitar from "../../assets/images/guitar.jpg"
import Button from '@/components/Button'
import { router } from 'expo-router'

const ScreenTwo = () => {
    return (
        <View className='items-center flex-1 px-6 mt-32'>
            <Image
                source={guitar}
                resizeMode='contain'
                style={{ height: 400, width: 400 }}
            />
            <Text className=' font-fextrabold text-5xl my-10 self-start'>Book in Seconds </Text>
            <Text className=' font-fmedium text-xl self-start'>Seamless booking experience with instant confirmation. Say goodbye to long searches!</Text>
            <View className='self-start '>
                <Button
                    text="Next"
                    textStyles="text-white text-xl"
                    onPress={() => router.replace("/screen-three")}
                    containerStyles='bg-black w-20 rounded-2xl mt-6'
                />
                {/* //todo status */}
            </View>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default ScreenTwo