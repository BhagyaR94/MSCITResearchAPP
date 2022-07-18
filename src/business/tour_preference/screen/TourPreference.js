import React from 'react'
import { Text, View } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import TourBudget from '../component/TourBudget';
import TourDuration from '../component/TourDuration';
import TourPreferenceScreenStyles from './TourPreferenceStyles';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setTourBudget, setTourDuration } from '../slice/tourPreferenceSlice';

let navigate, selector;

let TourPreference = ({ navigation }) => {

    const [isBudgetAndDurationSet, setIsBudgetAndDurationSet] = React.useState({});
    let styles = TourPreferenceScreenStyles.getStyles();
    navigate = navigation;
    selector = useSelector(state => state.tourPreferenceReducer);

    React.useEffect(() => {
        checkIsBudgetAndDurationSet(setIsBudgetAndDurationSet)
    })

    return (
        <View style={styles.MainContainer}>
            <View style={styles.HeadingContainer}>
                <Text style={styles.Title}>Set your Boundaries</Text>
            </View>
            <View style={styles.BudgetContainer}>
                <TourBudget dispatcher={useDispatch()} onValueSet={setTourBudget}></TourBudget>
            </View>
            <View style={styles.DurationContainer}>
                <TourDuration dispatcher={useDispatch()} onDurationSet={setTourDuration}></TourDuration>
            </View>
            <View style={styles.ButtonsContainer}>
                <CustomButton isDisabled={!isBudgetAndDurationSet} onPress={onPress.bind(this)} label='Continue'></CustomButton>
            </View>
        </View>
    );

}

function onPress() {
    navigate.navigate('DestinationList')
}

function checkIsBudgetAndDurationSet(setIsBudgetAndDurationSet) {
    if (selector.tourBudget > 0 && selector.tourDuration > 0) {
        setIsBudgetAndDurationSet(true);
    } else {
        setIsBudgetAndDurationSet(false)
    }
}

export default TourPreference;