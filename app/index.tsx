import { Text, View } from "react-native";
import "./global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
    <Text className="text-accent">
          ¡Bienvenido esto es una prueba de tailwind!
        </Text>
        <Link href={'/onboarding'}>Onboarding</Link>
        {/* <Link href={'/movie/avengers'}>Avengers Movie</Link>
         */}
    </View>
    
  );
  
}

// index
// profile
// save
// search / buscar
// {tabs} navegacion por enrutacion
