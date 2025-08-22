import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View>
            <Text>Bem-Vindo, User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1f1f",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff"
    }
})