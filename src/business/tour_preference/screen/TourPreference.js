import React from 'react';
import { View, Text } from 'react-native';
import TourBudget from '../component/TourBudget';
import TourDuration from '../component/TourDuration';
import TourPreferenceScreenStyles from './TourPreferenceStyles';
import CustomButton from '../../../core/component/CustomButton/CustomButton';

let styles = TourPreferenceScreenStyles.getStyles();

let TourPreference = ({ navigation }) => {

    return (
        <View style={styles.MainContainer}>
            <Text style={styles.Title}>Set your Boundaries</Text>
            <View style={styles.BudgetContainer}>
                <TourBudget></TourBudget>
            </View>
            <View style={styles.DurationContainer}>
                <TourDuration></TourDuration>
            </View>
            <View style={styles.ButtonsContainer}>
                <CustomButton label='Continue'></CustomButton>
            </View>
        </View>
    );

}

export default TourPreference;