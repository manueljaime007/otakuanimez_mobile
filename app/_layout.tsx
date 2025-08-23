import "@/assets/css/global.css"

import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import { Text } from "react-native"


export default function RootLayout() {

  const [loaded] = useFonts({
    "Poppins": require("@/assets/fonts/Outfit.ttf"),
  })

  if (!loaded) {
    return <Text>Carregando fontes...</Text>
  }

  return (
    <Stack 
      screenOptions={{ headerShown: false }}
    />
  )
}