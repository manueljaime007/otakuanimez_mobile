import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native"
import React from "react"

type CustomButtonProps = TouchableOpacityProps & {
  title: string
}

export default function CustomButton({ title, style, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c02929",   // vermelho base
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,              // arredondamento mais moderno
    paddingVertical: 14,          // altura consistente
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "600"   // tua fonte global
  },
})
