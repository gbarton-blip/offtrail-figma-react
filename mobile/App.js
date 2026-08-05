import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Workbench_400Regular } from '@expo-google-fonts/workbench/400Regular';
import { GeistMono_400Regular } from '@expo-google-fonts/geist-mono/400Regular';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventDetailScreen from './screens/EventDetailScreen';

// Replaces the web app's react-router-dom router (src/main.jsx). The tab-like
// screens (Home/Map/Profile) are siblings in a native stack and switch via the
// shared <Nav> bar; EventDetail is pushed on top with the native slide
// transition (replacing the web's CSS slide animation).
const Stack = createNativeStackNavigator();

export default function App() {
  // Load the OTDS font families (Workbench / Inter / Geist Mono). Hold rendering
  // until they're ready so text doesn't flash in the system font first.
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Workbench_400Regular,
    GeistMono_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EventDetail" component={EventDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
