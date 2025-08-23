import { Text, TextProps } from 'react-native'
import React from 'react'

export default function CustomText(props: TextProps) {
    return <Text {...props} style={[{ fontFamily: "Poppins" }, props.style]} />
}
