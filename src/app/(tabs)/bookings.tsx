import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Bookings = () => {
    return (
        <View className='flex-1 '>

            <View className='mt-20 px-8 items-center '>
                <Text className='font-fbold text-3xl text-center '>Book a hosteller now!</Text>
            </View>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default Bookings