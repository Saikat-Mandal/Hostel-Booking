import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SettingsTab from '@/components/SettingsTab';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Settings: React.FC = () => {

    const optionsArray = [
        { id: '1', name: 'Notifications', icon: <FontAwesome5 name="bell" size={24} color="black" /> },
        { id: '2', name: 'Currency', icon: <FontAwesome5 name="dollar-sign" size={24} color="black" /> },
        { id: '3', name: 'Logout', icon: <FontAwesome5 name="sign-out-alt" size={24} color="black" /> },
    ];

    return (
        <View style={styles.modal} className='px-10'>
            <View className='w-16 h-[4px] bg-gray-400 rounded-full self-center mb-10' />
            {optionsArray.map(item => {
                return (
                    <SettingsTab
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        icon={item.icon}
                        pagelink={item.pagelink}
                    />
                )
            })}

        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: '40%', // Adjust height as needed (e.g., 30%, 40%, etc.)
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 }, // Adjust for top shadow
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Settings;
