import { Text, View, StyleSheet, Animated, Easing } from 'react-native'
import { useEffect, useRef } from 'react'
import { useRouter } from 'expo-router'

export default function index() {

  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {

    // Animação
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true
      }),
    ]).start()

    const timeout = setTimeout(() => {
      router.replace("/onboarding")
    }, 5000)
    return () => clearTimeout(timeout)

  }, [router, scaleAnim, fadeAnim])

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            color: "white",
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        Meu App 🚀
      </Animated.Text>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff"
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
  },
})
