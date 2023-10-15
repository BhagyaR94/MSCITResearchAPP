import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import ListSelector from '../../../core/component/ListSelector/ListSelector';
import SelectCategoryStyles from './SelectCategoryStyle';
import { useSelector, useDispatch } from 'react-redux';
import { setselectedTravelCategories } from '../slice/categorySlice'
import { HttpUtils } from '../../../core/util/HttpUtils';
import * as staticStyles from '../../../core/util/ColorUtil';
import { BarIndicator } from 'react-native-indicators';

let styles = SelectCategoryStyles.getStyles();
let selector, navigate;

let SelectCategory = ({ navigation }) => {

    navigate = navigation;
    selector = useSelector((state) => state.categoryReducer);

    const [isLoading, setIsLoading] = React.useState(true);
    const [result, setResult] = React.useState({});
    const [isLessThanThreeSelected, setIsLessThanThreeSelected] = React.useState(true);
    React.useEffect(() => {
        loadDestinationCategories();
    }, []);

    React.useEffect(() => {
        if (result.length !== 0) {
            setIsLoading(false)
        }
    }, [result]);

    React.useEffect(() => {
        if (selector.selectedTravelCategories.length >= 3) {
            setIsLessThanThreeSelected(false);
        } else {
            setIsLessThanThreeSelected(true);
        }
    });

    function loadDestinationCategories() {
        setIsLoading(true);
        new HttpUtils().postRequest('loadDestinationCategories', {}).then((result) => setResult(getFormattedResult(result.data))).catch((error) => {
            console.log('error', error);
        });
    }

    function onPress() {
        navigate.navigate('TourPreference')
    }

    function getFormattedResult(resultsArray) {
        return resultsArray.map(result => {
            return {
                title: result.title,
                icon: result.icon.toLowerCase(),
                isDisabled: result.isDisabled,
                isHidden: result.isHidden,
                rank: 0
            }
        })
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            {isLoading ? <BarIndicator color={staticStyles.appPrimayColor} /> :
                <View style={styles.UIContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.Title}>Tell Us What You Prefer</Text>
                    </View>
                    <View style={styles.SelectionContainer}>
                        <ListSelector items={result} onSelect={setselectedTravelCategories} dispatcher={useDispatch()} rankingEnabled={true} isMultipleSelect={true}></ListSelector>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <CustomButton label={'Next'} isDisabled={isLessThanThreeSelected} onPress={onPress.bind(this)}></CustomButton>
                    </View>
                </View>
            }
        </SafeAreaView>

    );

}

export default SelectCategory;