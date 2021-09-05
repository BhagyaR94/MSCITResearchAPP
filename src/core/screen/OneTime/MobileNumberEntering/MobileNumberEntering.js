import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, Keyboard } from 'react-native';
import SingleSelect from './../../../component/SingleSelect/SingleSelect';
import MobileNumberEnteringStyle from './MobileNumberEnteringStyles'
import CustomTextInput from '../../../component/CustomTextInput/CustomTextInput';
import CustomButton from '../../../component/CustomButton/CustomButton';
import TextBanner from '../../../component/TextBanner/TextBanner';

let styles = MobileNumberEnteringStyle.getStyleSheet();

const MobileNumberEntering = ({ navigation }) => {
    const [errorText, setErrorText] = useState('');
    const [isValid, setIsValid] = useState(false);

    function onChangeText(value) {
        console.log(value);
    }

    function validateNumber(text, startIndex1, startIndex2, numberLength) {
        const reg = /^[0|7]?[789]\d{8}$/;
        if (!reg.test(text)) {
            setErrorText('invalid mobile number');
            setIsValid(prevState => {
               if(!prevState){
                   return prevState;
               }
            });
            return false;
        }
        setErrorText('');
        setIsValid(true);
        Keyboard.dismiss()
        return true;
    }

    function onPress(navigator) {
        navigator.navigate('OTPEntering')
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../../../res/img/sms.png')}></Image>
                <View style={styles.headingContainer}>
                    <Text style={styles.title}>Verify Your Number</Text>
                    <Text style={styles.subtitle}>Please enter your mobile number to receive One Time Password.</Text>
                </View>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.countryCodeContainer}>
                    <SingleSelect label=''></SingleSelect>
                </View>
                <View style={styles.mobileNumberContainer}>
                    <CustomTextInput placeholder='Your mobile number' keyType='phone-pad' onChangeText={onChangeText} validateText={validateNumber}></CustomTextInput>
                </View>
            </View>
            <View style={styles.bannerContainer}>
                <TextBanner bannerText={errorText}></TextBanner>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label='SEND OTP' onPress={() => {onPress(navigation)}} isDisabled={!isValid}></CustomButton>
            </View>
        </SafeAreaView>
    );
}

export default MobileNumberEntering;