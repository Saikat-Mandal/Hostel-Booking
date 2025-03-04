import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import image from '../assets/images/c1.jpg';

import Ionicons from '@expo/vector-icons/Ionicons';

const RoomCard = () => {
    return (
        <View className=' rounded-xl bg-slate-200' >
            <Image
                source={image}
                resizeMode='cover'
                className='h-44 w-full rounded-t-xl'
            />
            <View className='px-4 pb-6'>
                <View className='flex-row items-center justify-between mt-4'>
                    <Text className=' font-fbold text-lg w-1/2'>Superior 4 bed Mixed Dorm (with balcony) </Text>
                    <Text className=' font-fbold'>₹999 / <Text className='text-sm font-fbold'>night</Text></Text>
                </View>

                <View className='mt-2 flex-row items-center'>
                    <Ionicons name="person-circle-outline" size={20} color="black" />
                    <Text>x 1</Text></View>

                <Text className='mt-4 font-fregular text-base'>A bed in a luxe mixed dorm with private lockers , AC , a shared en suite , and a balcony with a garden view</Text>
                <View className='flex-row items-center justify-between mt-6'>
                    <Text className='font-fbold '>Show availability</Text>
                    <Pressable className='py-3 px-4  bg-yellow-300 rounded-full '><Text className='font-fbold'>Select Bed</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

export default RoomCard