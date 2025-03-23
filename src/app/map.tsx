import { View, Text, Platform, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import logo from "../assets/images/logo.jpg"
import MapTab from '@/components/MapTab';
import { fetch } from 'expo/fetch';


const MapScreen: React.FC = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getMapData = async () => {
            try {
                const res = await fetch("http://192.168.29.221:8080/api/v1/hostel")
                const json = await res.json()
                setData(json)

            } catch (error) {
                console.log("Error in fetching hostels ", error);

            }
        }

        getMapData()
    }, [])



    const [selectedLocation, setSelectedLocation] = useState(null);
    const slideAnim = useState(new Animated.Value(300))[0];

    const handleMarkerPress = (item: any) => {
        setSelectedLocation(item);
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
                    {data.length > 0 ? (data.map((item) => (
                        <Marker
                            key={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                            title={item.name}
                            onPress={() => handleMarkerPress(item)}
                        >
                            <Image
                                source={logo}
                                className="h-10 w-10 rounded-full"
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />

                        </Marker>

                    ))) : (<Text>Loading...</Text>)}
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
                    <MapTab
                        location={selectedLocation}
                        onClose={closeMapTab} />
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
