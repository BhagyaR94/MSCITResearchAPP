import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/Splash/SplashScreen'
import MobileNumberEntering from '../screen/OneTime/MobileNumberEntering/MobileNumberEntering';
import OTPEntering from '../screen/OneTime/OTPEntering/OTPEntering';

const Stack = createNativeStackNavigator();

export default function navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen} showNavBar={false} />
                <Stack.Screen name="MobileNumberEntering" component={MobileNumberEntering} showNavBar={false} />
                <Stack.Screen name="OTPEntering" component={OTPEntering} showNavBar={false} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}