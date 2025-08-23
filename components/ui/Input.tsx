import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'

export default function Input(props: TextInputProps) {
    return <TextInput {...props} style={[
        styles.input, props.style
    ]} />


}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 16,
        borderRadius: 4,
        borderColor: "white",
        color: "white",
        fontFamily: "Poppins"
    },
})