import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Kundali from './src/screens/kundali';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Tab = createMaterialTopTabNavigator();

// Define your screens
const KundaliScreen = () => {
  return (
    <Kundali />
  );
};

const AnotherScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Another Screen</Text>
  </View>
);

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#424b42', // Change this to your desired color
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FFFFFF', // Change this to your desired indicator color
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontFamily: 'Poppins-Light'},
      }}
      initialRouteName='KundaliScreen'>
      <Tab.Screen name="Kundali" component={KundaliScreen} />
      <Tab.Screen name="Chart" component={AnotherScreen} />
      <Tab.Screen name="KP" component={AnotherScreen} />
      <Tab.Screen name="Ashtakvarga" component={AnotherScreen} />
      <Tab.Screen name="Dasha" component={AnotherScreen} />
      <Tab.Screen name="Report" component={AnotherScreen} />
    </Tab.Navigator>
  );
};


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
  },
});

export default App;
