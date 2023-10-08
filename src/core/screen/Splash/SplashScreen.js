import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { useDispatch } from 'react-redux'
import { setAccessToken, setRefreshToken, setUserName, setUserLevel } from '../../slice/authSlice';
import StyleSheet from './SplashStyle';
import { HttpUtils } from '../../util/HttpUtils';

let navigator;

let SplashScreen = ({ navigation }) => {

    let dispatch = useDispatch();

    let styleSheet = StyleSheet.getStyles({
        logoStyle: {
            spin: spin
        }
    });

    authenticate(dispatch);

    navigator = navigation;

    return (
        <View style={styleSheet.mainContainer}>
            <View style={styleSheet.logoContainer}>
                <Animated.Image style={styleSheet.logoStyle} source={require('../../../../res/img/logo.png')} />
                <Text style={styleSheet.title}>FLACKA</Text>
                <Text style={styleSheet.subtitle}>Travel beyond boundaries</Text>
            </View>
        </View>
    );
}

spinValue = new Animated.Value(0);

spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
});

styleSheet = StyleSheet.getStyles({
    logoStyle: {
        spin: spin
    }
});

function animateLogo() {
    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();
}

function navigateAfterTimeout() {
    setTimeout(
        function () {
            navigator.navigate('Home');
        }
            .bind(this),
        5000
    );
}

function authenticate(dispatch) {

    new HttpUtils().postRequest('authenticate', {
        userName: 'BRathnayake',
        password: 'Welcome123'
    }).then((result) => {
        dispatch(setAccessToken(result.data.jwt));
        dispatch(setRefreshToken(result.data.refreshToken));
        dispatch(setUserName(result.data.userName));
        dispatch(setUserLevel(result.data.userLevel));

        navigateAfterTimeout();
    }).catch((error) => {
        console.log('error here', error)
    });
}

animateLogo();

export default SplashScreen;