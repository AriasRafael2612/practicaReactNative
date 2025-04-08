import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';  
import { View, Text } from 'react-native'; // Necesario para usar View y Text

export default function Layout() {

    interface TabBarIconInterface{
        title: string;
        iconName: any;
        focused: boolean;
    }

    const TabBarIcon = ({title, iconName, focused}: TabBarIconInterface) => {

        if(!focused) {
            return(
                <View className="flex flex-row min-w-[112px] justify-center items-center  min-h-16 overflow-hidden rounded-full text-white">
                    {title}</View>
            )
        }
        return (
            <View className="flex flex-row min-w-[112px] justify-center items-center bg-blue-500 min-h-16 overflow-hidden rounded-full text-white">
                <Ionicons name={iconName} size={20} color='#a8b5db' />
                <Text>{title}</Text>
            </View>

        )
    }

  return (
    <Tabs 
    screenOptions={{ 
        tabBarShowLabel: false,
        tabBarIconStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'

        },
        tabBarStyle: {
            backgroundColor: '#0f0d23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderwidth: 1,
            borderColor: '#0f0d23'

        }
        }}>
        <Tabs.Screen 
            name="index" 
            options={{ 
            headerShown: false,
            title: 'hola',
            tabBarIcon: ({ focused } : TabBarIconInterface) => <TabBarIcon title={'Home'} iconName={'home-outline'} focused={focused}/>
            
            }} 
        />
        <Tabs.Screen 
            name="searchScreen" 
            options={{ 
            title: "Buscar",
            headerShown: false,
            tabBarIcon: ({ focused }: TabBarIconInterface) => <TabBarIcon title={'Buscar'} iconName={'search-outline'} focused={focused}/>
            
            }} 
        />
        <Tabs.Screen 
            name="savedScreen" 
            options={{ 
            title: "Guardados",
            headerShown: false,
            tabBarIcon: ({ focused }: TabBarIconInterface) => <TabBarIcon title={'Guardar'} iconName={'bookmark-outline'} focused={focused}/>
            }} 
        />
        <Tabs.Screen 
            name="profileScreen" 
            options={{ 
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ focused }: TabBarIconInterface) => <TabBarIcon title={'Perfil'} iconName={'person-outline'} focused={focused}/>
            }} 
        />
        </Tabs>
  );
}
