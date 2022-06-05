import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import TourBudgetStyles from './TourBudgetStyles';
import * as ColorUtil from '../../../core/util/ColorUtil'

let styles = TourBudgetStyles.getStyles();

class TourBudget extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput
                    style={styles.TextInputStyles}
                    onChangeText={this.props.onChangeText}
                    activeUnderlineColor="green"
                    underlineColor="purple"
                    keyboardType='decimal-pad'
                    placeholder='0.00$'
                    placeholderTextColor = '#000'
                ></TextInput>
            </View>
        )
    }

}

export default TourBudget;