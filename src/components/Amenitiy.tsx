import { View, Text } from 'react-native'
import React from 'react'

interface AmenitiyProp {
    title: string,
    icon?: React.ReactNode
}

const Amenitiy: React.FC<AmenitiyProp> = ({ title, icon }) => {
    return (
        <View className='flex-row items-center justify-between my-3 font-fregular'>
            <Text className=' font-fmedium'>{title}</Text>
            {icon}
        </View>
    )
}

export default Amenitiy