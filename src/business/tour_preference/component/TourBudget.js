import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import TourBudgetStyles from './TourBudgetStyles';
import * as ColorUtil from '../../../core/util/ColorUtil'

let styles = TourBudgetStyles.getStyles();

class TourBudget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budget: 0,
            dispatcher: props.dispatcher,
            onValueSet: props.onValueSet
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View styles={styles.TitleContainer}>
                    <Text style={styles.TitleStyles}>Budget Per Head</Text>
                </View>
                <View styles={styles.InputContainer}>
                    <TextInput
                        style={styles.TextInputStyles}
                        onChangeText={this.onChangeText.bind(this)}
                        activeUnderlineColor={ColorUtil.appPrimayColor}
                        underlineColor={ColorUtil.appPrimayColor}
                        keyboardType='decimal-pad'
                        placeholder='0.00$'
                        placeholderTextColor='#000'
                    ></TextInput>
                </View>
            </View>
        )
    }

    onChangeText = (value) => {
        this.setState({ budget: value }, () => {
            this.state.dispatcher(this.state.onValueSet(this.state.budget))
        })
    }

}

export default TourBudget;