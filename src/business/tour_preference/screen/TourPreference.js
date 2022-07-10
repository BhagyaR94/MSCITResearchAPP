import React from 'react'
import { Text, View } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import TourBudget from '../component/TourBudget';
import TourDuration from '../component/TourDuration';
import TourPreferenceScreenStyles from './TourPreferenceStyles';
import { useSelector, useDispatch, useStore } from 'react-redux'


let TourPreference = ({ navigation }) => {

    let styles = TourPreferenceScreenStyles.getStyles();

    let state = useStore().getState();
    console.log(state);

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