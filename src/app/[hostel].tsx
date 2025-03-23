import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Amenitiy from '@/components/Amenitiy'
import { useLocalSearchParams } from 'expo-router'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import RoomCard from '@/components/RoomCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import image from '../assets/images/c1.jpg';
import { router } from 'expo-router';



const Hostel: React.FC = () => {

  const { hostelId } = useLocalSearchParams();

  const [hostel, setHostel] = useState(null)

  useEffect(() => {
    const getHostelpData = async () => {
      try {
        const res = await fetch(`http://192.168.29.221:8080/api/v1/hostel/${hostelId}`)
        const json = await res.json()
        setHostel(json)


      } catch (error) {
        console.log("Error in fetching hostels ", error);

      }
    }

    if (!hostel) {
      getHostelpData()
    }
  }, [])




  return (
    <View className='flex-1'>
      <TouchableOpacity onPress={() => router.back()} className='absolute left-7 top-20 bg-primary p-2 rounded-full z-50'>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text className='absolute bottom-0 border-slate-300 bg-white border-t-2  p-2 z-50 h-32 w-full '>
        <View className='flex-row justify-between w-full px-3 items-center'>
          <View>
            <Pressable className='flex-row items-center gap-x-2 mt-2'>
              <FontAwesome name="calendar-o" size={13} color="black" />
              <Text className=' font-fbold border-b border-primary'>Thu.6th Mar - Fri, 7th Mar </Text>
              <Feather name="edit-2" size={13} color="#FFE700" />
            </Pressable>
            <Text className=' font-fbold mt-2'>Starting from ₹699</Text>
          </View>
          <Pressable ><Text className='font-fbold py-3 px-4 bg-primary rounded-full' >Select room</Text></Pressable>
        </View>
      </Text>

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
          <Text className='text-3xl font-fbold'>{hostel?.name}</Text>
          <Text className='text-xl font-fmedium mt-2'>
            {hostel?.description}
          </Text>
          <Text className='text-xl font-fmedium mt-2'>
            {hostel?.address} {hostel?.city} {hostel?.state}
          </Text>
          <View className='mt-3'>

            {hostel?.amenities?.map((item, index) => (
              <Amenitiy key={index} name={item} />
            ))}
          </View>
          <Text className='my-6 text-2xl font-fbold'>Rooms</Text>
          <View className='mb-52'>
            {hostel?.rooms?.length > 0 ? (
              hostel.rooms.map((item) => (
                <RoomCard
                  key={item.id}
                  roomType={item.roomType}
                  price={item.price}
                  availability={item.availability}
                />
              ))
            ) : (
              <Text className='text-center text-gray-500'>No rooms available</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Hostel