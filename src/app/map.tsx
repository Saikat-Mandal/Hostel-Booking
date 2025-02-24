import { View, Text, Platform, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import logo from "../assets/images/logo.jpg"
import MapTab from '@/components/MapTab';
// import Animated from 'react-native-reanimated';

const locations = [
    { id: 1, title: 'Agra', latitude: 27.1767, longitude: 78.0081, initialPrice: 499 },
    { id: 2, title: 'Amritsar', latitude: 31.6340, longitude: 74.8723, initialPrice: 399 },
    { id: 3, title: 'Bangalore', latitude: 12.9716, longitude: 77.5946, initialPrice: 699 },
    { id: 4, title: 'Bhandardara', latitude: 19.5271, longitude: 73.7169, initialPrice: 499 },
    { id: 5, title: 'Bir', latitude: 32.0450, longitude: 76.7236, initialPrice: 399 },
    { id: 6, title: 'Chakrata', latitude: 30.7019, longitude: 77.8742, initialPrice: 699 },
    { id: 7, title: 'Chikmagalur', latitude: 13.3153, longitude: 75.7754, initialPrice: 399 },
    { id: 8, title: 'Coorg', latitude: 12.3375, longitude: 75.8069, initialPrice: 499 },
    { id: 9, title: 'Dehradun', latitude: 30.3165, longitude: 78.0322, initialPrice: 699 },
    { id: 10, title: 'Delhi', latitude: 28.7041, longitude: 77.1025, initialPrice: 399 },
    { id: 11, title: 'Fort Kochi', latitude: 9.9646, longitude: 76.2411, initialPrice: 499 },
    { id: 12, title: 'Goa', latitude: 15.2993, longitude: 74.1240, initialPrice: 699 },
    { id: 13, title: 'Gokarna', latitude: 14.5464, longitude: 74.3181, initialPrice: 399 },
    { id: 14, title: 'Himachal', latitude: 31.1048, longitude: 77.1734, initialPrice: 499 },
    { id: 15, title: 'Jaipur', latitude: 26.9124, longitude: 75.7873, initialPrice: 699 },
    { id: 16, title: 'Jaisalmer', latitude: 26.9157, longitude: 70.9083, initialPrice: 399 },
    { id: 17, title: 'Jodhpur', latitude: 26.2389, longitude: 73.0243, initialPrice: 499 },
    { id: 18, title: 'Karnataka', latitude: 15.3173, longitude: 75.7139, initialPrice: 699 },
    { id: 19, title: 'Kasar Devi', latitude: 29.6542, longitude: 79.6417, initialPrice: 399 },
    { id: 20, title: 'Kasol', latitude: 32.0098, longitude: 77.3141, initialPrice: 499 },
    { id: 21, title: 'Kerala', latitude: 10.8505, longitude: 76.2711, initialPrice: 699 },
    { id: 22, title: 'Khajjiar', latitude: 32.5468, longitude: 76.0554, initialPrice: 399 },
    { id: 23, title: 'Kufri', latitude: 31.0986, longitude: 77.2674, initialPrice: 499 },
    { id: 24, title: 'Lonavala', latitude: 18.7545, longitude: 73.4062, initialPrice: 699 },
    { id: 25, title: 'Maharashtra', latitude: 19.7515, longitude: 75.7139, initialPrice: 399 },
    { id: 26, title: 'Manali', latitude: 32.2396, longitude: 77.1887, initialPrice: 499 },
    { id: 27, title: 'Mcleodganj', latitude: 32.2426, longitude: 76.3214, initialPrice: 699 },
    { id: 28, title: 'Mumbai', latitude: 19.0760, longitude: 72.8777, initialPrice: 399 },
    { id: 29, title: 'Munnar', latitude: 10.0889, longitude: 77.0595, initialPrice: 499 },
    { id: 30, title: 'Mussoorie', latitude: 30.4550, longitude: 78.0644, initialPrice: 699 },
    { id: 31, title: 'Narkanda', latitude: 31.2574, longitude: 77.4514, initialPrice: 399 },
    { id: 32, title: 'Ooty', latitude: 11.4102, longitude: 76.6950, initialPrice: 499 },
    { id: 33, title: 'Rajasthan', latitude: 27.0238, longitude: 74.2179, initialPrice: 699 },
    { id: 34, title: 'Ramgarh', latitude: 29.4860, longitude: 79.4630, initialPrice: 399 },
    { id: 35, title: 'Rishikesh', latitude: 30.0869, longitude: 78.2676, initialPrice: 499 },
    { id: 36, title: 'Shimla', latitude: 31.1048, longitude: 77.1734, initialPrice: 699 },
    { id: 37, title: 'Udaipur', latitude: 24.5854, longitude: 73.7125, initialPrice: 399 },
    { id: 38, title: 'Uttarakhand', latitude: 30.0668, longitude: 79.0193, initialPrice: 499 },
    { id: 39, title: 'Wayanad', latitude: 11.6854, longitude: 76.1320, initialPrice: 699 },
];


const MapScreen: React.FC = () => {


    const [selectedLocation, setSelectedLocation] = useState(null);
    const slideAnim = useState(new Animated.Value(300))[0];

    const handleMarkerPress = (location: any) => {
        setSelectedLocation(location);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeMapTab = () => {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setSelectedLocation(null));
    };


    return (
        <View style={styles.container} className='bg-white relative'>
            <View className='mt-16'>
                <View className='flex-row items-center gap-x-4 px-4 z-40'>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather name="arrow-left-circle" size={30} color="black" />
                    </TouchableOpacity>
                    <Text className='text-3xl font-fbold text-black'>Our Places</Text>
                </View>
            </View>

            <View style={styles.mapContainer}>
                <MapView
                    mapType='standard'
                    style={styles.map}
                    initialRegion={{
                        latitude: 20.5937,
                        longitude: 78.9629,
                        latitudeDelta: 20,
                        longitudeDelta: 20,
                    }}

                >
                    {locations.map((location) => (
                        <Marker
                            key={location.id}
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title={location.title}
                            onPress={() => handleMarkerPress(location)}
                        >
                            <Image
                                source={logo}
                                className="h-10 w-10 rounded-full"
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />

                        </Marker>

                    ))}
                </MapView>


            </View>

            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'white']}
                style={{
                    position: 'absolute',
                    top: 50,
                    width: '100%',
                    height: 80,
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0.495 }}
            />
            <LinearGradient
                colors={['white', 'rgba(255, 255, 255, 0)']}
                style={{
                    position: 'absolute',
                    bottom: 2,
                    width: '100%',
                    height: 80,
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            />

            {selectedLocation && (

                <Animated.View style={{ transform: [{ translateY: slideAnim }] }} className="p-4 absolute bottom-40 w-full h-72 ">
                    <MapTab location={selectedLocation} onClose={closeMapTab} />
                </Animated.View>

            )}

            <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
        position: 'relative',
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },


});

export default MapScreen;
