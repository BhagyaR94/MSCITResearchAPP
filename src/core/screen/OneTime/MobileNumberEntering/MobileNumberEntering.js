import * as React from 'react';
import { View, Image, Text } from 'react-native';
import SingleSelect from './../../../component/SingleSelect/SingleSelect';
import MobileNumberEnteringStyle from './MobileNumberEnteringStyles'
import CustomTextInput from '../../../component/CustomTextInput/CustomTextInput';
import CustomButton from '../../../component/CustomButton/CustomButton';

let styles = MobileNumberEnteringStyle.getStyleSheet();

let customStyles = {
    width: 15,
    label: ''
}

let MobileNumberEntering = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
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
                    <CustomTextInput placeholder='Your mobile number'></CustomTextInput>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label='SEND OTP'></CustomButton>
            </View>
        </View>
    );
};

export default MobileNumberEntering;