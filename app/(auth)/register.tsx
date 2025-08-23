import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import Input from "@/components/ui/Input";

import { Link } from "expo-router";
import { useState } from "react";
import {
  Image, Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";

interface Errors {
  email?: string;
  password?: string;
}


export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<Errors>({})


  const validateForm = () => {
    const newErrors: Errors = {}

    if (!email) newErrors.email = "Email is required"
    if (!email) newErrors.password = "Password is required"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0;
  }

  const handleLogin = () => {
    if (validateForm()) {
      console.log(email, password)
      setEmail("")
      setPassword("")
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={
          Platform.OS === "android" ? 100 : 10
        }
      >
        <TouchableWithoutFeedback
          touchSoundDisabled={false}
          onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.form}>
            <Image
              source={require('@/assets/images/app-logo.png')}
              style={styles.image}
            />
            <View>
              <CustomText style={styles.title}>Criar Conta</CustomText>
            </View>
            <View style={styles.formRows}>
              <Input
                value={email}
                placeholder="Email"
                style={styles.input}
                onChangeText={setEmail}
              />
              {errors.email && <CustomText style={{
                color: "red"
              }}>{errors.email}</CustomText>}
            </View>

            <View style={styles.formRows}>
              <Input
                value={password}
                placeholder="Password"
                style={styles.input}
                onChangeText={setPassword}
              />
              {errors.password && <CustomText style={{
                color: "red"
              }}>{errors.password}</CustomText>}
            </View>
            <View style={styles.formRows}>
              <CustomButton title="Eu" />
            </View>
            <View>
              <Link href="/login" style={styles.link}> Iniciar Sessão</Link>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    paddingBlock: 30,
    width: `${100}%`,
    gap: 20,
    padding: 20,
    borderRadius: 10,
  },
  formRows: {
    gap: 10
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  button: {
    backgroundColor: "#c02929ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 20
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
    borderColor: "white",
    color: "white"
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
  link: {
    textAlign: "center",
    color: "white",
  }
})