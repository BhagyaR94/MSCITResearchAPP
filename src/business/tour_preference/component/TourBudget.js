import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
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
                <TextInput
                    style={styles.TextInputStyles}
                    onChangeText={this.onChangeText.bind(this)}
                    activeUnderlineColor="green"
                    underlineColor="purple"
                    keyboardType='decimal-pad'
                    placeholder='0.00$'
                    placeholderTextColor='#000'
                ></TextInput>
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