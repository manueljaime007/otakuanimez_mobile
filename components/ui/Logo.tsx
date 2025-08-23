import { Image, StyleSheet } from 'react-native'
import React from 'react'
const logo = require('@/assets/images/app-logo.png')


export default function Logo() {
    return (
        <Image
            source={logo}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
})