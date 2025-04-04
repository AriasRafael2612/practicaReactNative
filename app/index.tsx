import { Text, View } from "react-native";
import "./global.css"; // Asegúrate de que Tailwind esté bien configurado en tu proyecto
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
    <Text className="text-red-600">
          ¡Bienvenido esto es una prueba de tailwind!
        </Text>
        <Link href={'/onboarding'}>Onboarding</Link>
        <Link href={'/movie/avengers'}>Avengers Movie</Link>
        
    </View>
    
  );
  
}


