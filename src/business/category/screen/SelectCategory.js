import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import MultipleSelector from '../../../core/component/MultipleSelect/MultipleSelector';
import SelectCategoryStyles from './SelectCategoryStyle';

let styles = SelectCategoryStyles.getStyles();

let SelectCategory = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>What do you prefer to see?</Text>
            </View>
            <View style={styles.SelectionContainer}>
                <MultipleSelector></MultipleSelector>
            </View>
            <View style={styles.ButtonContainer}>
                <CustomButton label={'Continue'}></CustomButton>
            </View>
        </SafeAreaView>
    );
}

export default SelectCategory;