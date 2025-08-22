// app/onboarding.tsx
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

const { width } = Dimensions.get("window");

const slides = [
    { id: "1", title: "Bem-vindo!", desc: "Um app feito com Expo + TS" },
    { id: "2", title: "Fácil de usar", desc: "Interface simples e moderna" },
    { id: "3", title: "Comece agora", desc: "Vamos para a Home 🚀" },
];

export default function Onboarding() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            router.replace("/home");
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                // showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.desc}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>
                    {currentIndex === slides.length - 1 ? "Começar" : "Próximo"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    slide: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
    desc: { fontSize: 16, textAlign: "center", color: "#555" },
    button: {
        backgroundColor: "#000",
        padding: 15,
        margin: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
