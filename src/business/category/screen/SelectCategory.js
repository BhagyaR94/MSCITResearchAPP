import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import MultipleSelector from '../../../core/component/MultipleSelect/MultipleSelector';
import SelectCategoryStyles from './SelectCategoryStyle';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setselectedTravelCategories } from '../slice/categorySlice'
import { HttpUtils } from '../../../core/util/HttpUtils';

let styles = SelectCategoryStyles.getStyles();
let selector, navigate;

let SelectCategory = ({ navigation }) => {

    navigate = navigation;
    selector = useSelector((state) => state.categoryReducer);

    const [result, setResult] = React.useState({});
    const [isLessThanThreeSelected, setIsLessThanThreeSelected] = React.useState({});

    React.useEffect(() => {
        loadDestinationCategories(setResult);
    }, []);

    React.useEffect(() => {
        checkSelectedCategoryLength(setIsLessThanThreeSelected)
    })

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>What do you prefer to see?</Text>
            </View>
            <View style={styles.SelectionContainer}>
                <MultipleSelector items={result} onSelect={setselectedTravelCategories} dispatcher={useDispatch()}></MultipleSelector>
            </View>
            <View style={styles.ButtonContainer}>
                <CustomButton label={'Next'} isDisabled={isLessThanThreeSelected} onPress={onPress.bind(this)}></CustomButton>
            </View>
        </SafeAreaView>
    );
}

function loadDestinationCategories(setResult) {
    new HttpUtils().postRequest('loadDestinationCategories', {}).then((result) => setResult(result.data)).catch((error) => {
        console.log('error', error);
    }).finally(() => {

    });
}

function checkSelectedCategoryLength(setIsLessThanThreeSelected) {
    if (selector.selectedTravelCategories.length >= 3) {
        setIsLessThanThreeSelected(false);
    } else {
        setIsLessThanThreeSelected(true);
    }
}

function onPress(value) {
    navigate.navigate('TourPreference')
}

export default SelectCategory;