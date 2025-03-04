import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import image from "../assets/images/mclodganj.jpeg";
import logo from "../assets/images/logo.jpg"
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const MapTab: React.FC<{ location: any; onClose: () => void }> = ({ location, onClose }) => {
    return (
        <Pressable onPress={() => router.push({ pathname: "/[hostel]", params: { hostel: location.id } })}>
            <TouchableOpacity onPress={onClose} className=' self-end mb-8 '>
                <MaterialIcons className='bg-white rounded-full p-2' name="close" size={20} color="black" />
            </TouchableOpacity>
            <ImageBackground source={image} className=' h-full w-full rounded-3xl px-6 pt-4 pb-6'>
                <View className=' flex-row items-center justify-between   '>
                    <View className='flex-row items-center gap-x-2'>
                        <Image
                            source={logo}
                            className="h-10 w-10 rounded-full z-10"
                        />
                        <Text className='text-md font-bold text-black font-fbold bg-white p-2 rounded-full'>{location.title}</Text>
                    </View>


                </View>
                <View className='flex-row items-center gap-x-1 mt-auto'>
                    <Text className='text-xl font-bold text-white font-fbold '>Starting from ₹{location.initialPrice}</Text>
                    <Feather name="arrow-right" size={24} color="white" />
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default MapTab;
