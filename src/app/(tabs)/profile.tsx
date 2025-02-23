import { View, Text, Platform, Image, ImageBackground, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import girl from "../../assets/images/girl.jpg"
import leather from "../../assets/images/leather.jpg"

import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router'
import * as Haptics from 'expo-haptics';

const Profile = () => {


    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <View className='flex-1 '>
            <View className='mt-20 px-8'>
                <View className='flex-row items-center justify-between'>
                    <Pressable onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
                        router.push("/settings")
                    }}>
                        <Ionicons name="settings" size={32} color="black" />
                    </Pressable>
                    <Pressable onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid); // Trigger haptic feedback
                        router.push('/option');    // Navigate to option screen
                    }}>
                        <Entypo name="menu" size={32} color="black" />
                    </Pressable>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='items-center mt-10 rounded-3xl '>


                        <View

                            className='h-80 w-4/6 rounded-e-[1.8em] bg-primary rounded-s-md items-center  relative overflow-hidden '>
                            <ImageBackground
                                source={leather}
                                resizeMode='cover'
                                className='absolute inset-0 w-full h-full opacity-50'
                            />
                            <Text className='mt-8 font-fbold text-[#fff185] text-xl'>GLU VISA</Text>
                            <View className='border-[#51344D] h-32 w-32 border-4 rounded-full p-1 z-10 mt-8'>
                                <Image
                                    source={girl}
                                    className='rounded-full w-full h-full'
                                    onLoadStart={() => setImageLoaded(false)}
                                    onLoad={() => setImageLoaded(true)}
                                />
                                {!imageLoaded && (
                                    <ActivityIndicator
                                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                        color="#51344D"
                                    />
                                )}
                            </View>

                            <View className='h-80 w-1 absolute left-3 flex justify-between z-10'>
                                {Array.from({ length: 25 }).map((_, index) => (
                                    <View key={index} className='h-2 w-full bg-[white] rounded-full' />
                                ))}
                            </View>
                            <Text className='mt-8 font-fbold text-[#fff185] text-xl'>Saikat Mandal</Text>
                            <Text className=' font-fbold text-[#fff185] text-sm'>Glu traveller</Text>
                        </View>


                    </View>
                    <Text className='font-fbold text-2xl mt-10 text-left'>
                        Traveller info
                    </Text>
                    {/* info  */}
                    <View >
                        <Text className='text-xl font-fregular mb-5 mt-8'>Full name: <Text className='text-xl font-fsemibold'>Saikat Mandal</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Also: <Text className='text-xl font-fsemibold'>msaikat022</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Birthday: <Text className='text-xl font-fsemibold'>11/04/2002</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Gender: <Text className='text-xl font-fsemibold'>Male</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Phone number: <Text className='text-xl font-fsemibold'>808701XX56</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Email: <Text className='text-xl font-fsemibold'>test@gmail.com</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Traveller from <Text className='text-xl font-fsemibold'>India</Text></Text>
                        <Text className='text-xl font-fregular mb-5'>Lives in city <Text className='text-xl font-fsemibold'>Pune</Text></Text>
                    </View>
                    <Text className='font-dregualar text-6xl text-center mb-0 mt-10 text-stone-500'>Glu</Text>
                    <Text className=' font-fthin text-sm text-neutral-400 mb-48'>v1.2.0 build 15</Text>
                </ScrollView>
            </View>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default Profile