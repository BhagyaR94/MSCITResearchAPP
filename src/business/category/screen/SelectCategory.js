import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import MultipleSelector from '../../../core/component/MultipleSelect/MultipleSelector';
import SelectCategoryStyles from './SelectCategoryStyle';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setselectedTravelCategories } from '../slice/categorySlice'
import { HttpUtils } from '../../../core/util/HttpUtils';
import * as staticStyles from '../../../core/util/ColorUtil';
import { BarIndicator } from 'react-native-indicators';

let styles = SelectCategoryStyles.getStyles();
let selector, navigate;

let SelectCategory = ({ navigation }) => {

    navigate = navigation;
    selector = useSelector((state) => state.categoryReducer);

    const [result, setResult] = React.useState({});
    const [isLessThanThreeSelected, setIsLessThanThreeSelected] = React.useState({});
    const [isLoading, setIsLoading] = React.useState({});

    React.useEffect(() => {
        loadDestinationCategories(setResult, setIsLoading);
    }, []);

    React.useEffect(() => {
        checkSelectedCategoryLength(setIsLessThanThreeSelected)
    })

    return (
        <SafeAreaView style={styles.MainContainer}>

            {isLoading ? <BarIndicator color={staticStyles.appPrimayColor} /> :
                <View >
                    <View style={styles.TitleContainer}>
                        <Text style={styles.Title}>Tell Us What You Prefer</Text>
                    </View>
                    <View style={styles.SelectionContainer}>
                        <MultipleSelector items={result} onSelect={setselectedTravelCategories} dispatcher={useDispatch()}></MultipleSelector>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <CustomButton label={'Next'} isDisabled={isLessThanThreeSelected} onPress={onPress.bind(this)}></CustomButton>
                    </View>
                </View>
            }
        </SafeAreaView>

    );

}


function loadDestinationCategories(setResult, setIsLoading) {
    setIsLoading(true);
    new HttpUtils().postRequest('loadDestinationCategories', {}).then((result) => setResult(result.data)).catch((error) => {
        console.log('error', error);
    }).finally(() => {
        setIsLoading(false);
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