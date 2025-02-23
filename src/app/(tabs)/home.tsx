import { View, Text, Platform, Animated, Easing, TextInput, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '@/components/Button';
import { router } from 'expo-router';
import Caraousal from '@/components/Caraousal';
import Offers from '@/components/Offers';

const Home: React.FC = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [search, setSearch] = useState('');
    const [curlocation, setCurlocation] = useState('');
    const [tab, setTab] = useState('Love'); // Set "Love" as the default tab
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 4000, // 4 seconds for a full rotation
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);


    async function getCurrentLocation() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const address = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            if (address.length > 0) {
                const { city, region, country } = address[0];
                setCurlocation(`${city || 'Unknown City'}, ${region || 'Unknown Region'}, ${country || 'Unknown Country'}`);
            }
        } catch (error) {
            setErrorMsg('Failed to fetch location');
        }
    }



    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const data = [
        { id: '1', icon: <MaterialCommunityIcons name="calendar-heart" size={24} color="black" />, name: 'Love' },
        { id: '2', icon: <Feather name="plus-circle" size={24} color="black" />, name: 'New' },
        { id: '3', icon: <FontAwesome name="arrow-up" size={24} color="black" />, name: 'North' },
        { id: '4', icon: <FontAwesome name="arrow-down" size={24} color="black" />, name: 'South' },
        { id: '5', icon: <FontAwesome name="arrow-left" size={24} color="black" />, name: 'West' },
        { id: '6', icon: <FontAwesome6 name="mountain" size={24} color="black" />, name: 'Mountain' },
        { id: '7', icon: <MaterialCommunityIcons name="beach" size={24} color="black" />, name: 'Beach' },
        { id: '8', icon: <Entypo name="globe" size={24} color="black" />, name: 'Offbeat' },
        { id: '9', icon: <FontAwesome6 name="person-skiing" size={24} color="black" />, name: 'Adventure' },
        { id: '10', icon: <Entypo name="laptop" size={24} color="black" />, name: 'Workathon' },
        { id: '11', icon: <FontAwesome6 name="city" size={24} color="black" />, name: 'City' },
        { id: '12', icon: <MaterialCommunityIcons name="party-popper" size={24} color="black" />, name: 'Party' },
    ];

    return (
        <ScrollView className="flex-1 px-6">
            <View className="flex-row items-center mt-20 justify-between">
                <Text className="font-fbold text-3xl">Ohai👋 Saikat</Text>
                <View className="flex-row items-center bg-black rounded-full px-3 py-2 gap-x-1">
                    <Text className="text-white">700</Text>
                    <Text>🪙</Text>
                </View>
            </View>

            <Pressable onPress={() => getCurrentLocation()} className="font-fmedium text-base mt-10 self-start border-gray-400 border px-4 py-2 rounded-full">
                <Text>📍 {curlocation || errorMsg || 'Set Location'}</Text>
            </Pressable>

            <View className="flex-row items-center mt-4 justify-between">
                <View className="border-gray-400 border rounded-full flex-row items-center p-3">
                    <AntDesign name="search1" size={24} color="black" className="px-3" />
                    <TextInput
                        onChangeText={(e) => setSearch(e)}
                        placeholder="Search"
                        value={search}
                        className="w-4/6 text-xl text-black font-fmedium"
                        placeholderTextColor="gray"
                    />
                </View>
                <TouchableOpacity>
                    <Animated.Text style={{ transform: [{ rotate: rotateInterpolate }], fontSize: 40 }}>🌎</Animated.Text>
                </TouchableOpacity>
            </View>

            {/* Carousel */}
            <Caraousal />

            <View className="mt-10">
                <FlatList
                    data={data}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className={`px-6 py-2 rounded-full ${tab === item.name ? 'border border-primary' : ''}`}
                            onPress={() => setTab(item.name)}
                        >
                            <Text className="text-xl self-center">{item.icon}</Text>
                            <Text className="text-black text-xs">{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <Text className="text-center text-lg mt-5">You selected {tab}!</Text>
            </View>

            {/* Offers */}
            <View>
                <Text className="font-fbold text-3xl mt-10">Hurray! Here are some exciting offers for you</Text>
                <Offers />
            </View>

            <View className="items-center mb-20">
                <Ionicons name="ellipsis-horizontal-outline" size={24} color="#E8D2BC" />
                <Text className="font-fbold text-3xl text-center mt-10">
                    Turn Stays into Success Partner with Us for a Thriving Hostel Franchise!
                </Text>
                <Button
                    text="Apply Now!"
                    textStyles="text-black text-xl font-fbold"
                    onPress={() => router.replace('/screen-two')}
                    containerStyles="bg-primary w-20 rounded-2xl mb-6 mt-10"
                />
                <Ionicons name="ellipsis-horizontal-outline" size={24} color="#E8D2BC" />
            </View>

            <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
        </ScrollView>
    );
};

export default Home;
