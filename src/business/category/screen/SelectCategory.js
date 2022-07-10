import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import MultipleSelector from '../../../core/component/MultipleSelect/MultipleSelector';
import SelectCategoryStyles from './SelectCategoryStyle';
// import { useSelector, useDispatch, useStore } from 'react-redux';
import { HttpUtils } from '../../../core/util/HttpUtils';

let styles = SelectCategoryStyles.getStyles();
let loadedCategories

let SelectCategory = ({ navigation }) => {

    loadDestinationCategories()

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>What do you prefer to see?</Text>
            </View>
            <View style={styles.SelectionContainer}>
                <MultipleSelector items={loadedCategories}></MultipleSelector>
            </View>
            <View style={styles.ButtonContainer}>
                <CustomButton label={'Continue'}></CustomButton>
            </View>
        </SafeAreaView>
    );
}

function loadDestinationCategories() {
    new HttpUtils().postRequest('loadDestinationCategories', {}).then((result) => {
        loadedCategories = result.data;
    }).catch((error) => {
        console.log('error', error);
    }).finally(() => {

    });
}

export default SelectCategory;