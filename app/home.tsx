import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#1f1f1f",
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: "bold",
//         // color: "#ffffff",
//         // textDecorationStyle: "solid",
//         // textDecorationColor: "#f00",
//         textDecorationLine: "underline"
//     }
// })