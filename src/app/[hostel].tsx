import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Amenitiy from '@/components/Amenitiy'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import RoomCard from '@/components/RoomCard';
import AntDesign from '@expo/vector-icons/AntDesign';

import image from '../assets/images/c1.jpg';
import { router } from 'expo-router';



const Hostel: React.FC = () => {
  return (
    <View className='flex-1'>
      <TouchableOpacity onPress={() => router.back()} className='absolute left-7 top-20 bg-primary p-2 rounded-full z-50'>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView className='relative'>
        <View className='w-full'>
          <Image
            source={image}
            resizeMode='cover'
            className='h-80 w-full mb-2'
          />
          <View className='flex-row gap-x-2'>
            <Image
              source={image}
              resizeMode='cover'
              className='h-60 w-1/2 mb-2'
            />
            <Image
              source={image}
              resizeMode='cover'
              className='h-60 w-1/2 mb-2'
            />
          </View>
          <TouchableOpacity onPress={() => router.back()} className='absolute right-7 bottom-10 bg-white p-2  z-50 flex-row items-center gap-x-4 px-4 rounded-lg'>
            <FontAwesome name="photo" size={24} color="black" />
            <Text className=' font-fbold'>View all</Text>
          </TouchableOpacity>
        </View>
        <View className='p-4'>
          <Text className='text-3xl font-fbold'>The hosteller Ooty</Text>
          <Text className='text-xl font-fmedium mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </Text>
          <View className='mt-3'>
            <Amenitiy
              title="Free Wi-Fi"
              icon={<FontAwesome name="wifi" size={20} color="black" />}
            />
            <Amenitiy
              title="Breakfast (Extra)"
              icon={<FontAwesome5 name="utensils" size={20} color="black" />}
            />
          </View>
          <Text className='my-6 text-2xl font-fbold'>Rooms</Text>
          <RoomCard />
        </View>
      </ScrollView>
    </View>

  )
}

export default Hostel