import React from 'react'
import { Stack } from 'expo-router'


const OnboardLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="screen-one"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="screen-two"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="screen-three"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="screen-four"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default OnboardLayout