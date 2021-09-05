import * as React from 'react';
import { View, Image, Text } from 'react-native';
import OTPEnteringStyles from './OTPEnteringStyles'
import CustomTextInput from '../../../component/CustomTextInput/CustomTextInput';
import CustomButton from '../../../component/CustomButton/CustomButton';
import Counter from '../../../component/Counter/Counter';

let styles = OTPEnteringStyles.getStyleSheet();

let OTPEntering = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../../../res/img/OTP.png')}></Image>
                <View style={styles.headingContainer}>
                    <Text style={styles.title}>Verification Code</Text>
                    <Text style={styles.subtitle}>OTP has been sent to your mobile number. Please verify.</Text>
                </View>
            </View>
            <View style={styles.formContainer}> 
                <View style={styles.digitContainer}>
                    <CustomTextInput placeholder='' keyType='number-pad'></CustomTextInput>
                </View>
                <View style={styles.digitContainer}>
                    <CustomTextInput placeholder='' keyType='number-pad'></CustomTextInput>
                </View>
                <View style={styles.digitContainer}>
                    <CustomTextInput placeholder='' keyType='number-pad'></CustomTextInput>
                </View>
                <View style={styles.digitContainer}>
                    <CustomTextInput placeholder='' keyType='number-pad'></CustomTextInput>
                </View>
            </View>
            <View style={styles.countDownContainer}>
                <Counter prefix='Resend in '></Counter>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label='VERIFY' onPress={() => { }}></CustomButton>
            </View>
        </View>
    );
};

let calculateCountDown = (navigator) => {
    
}

export default OTPEntering;