/*

label ---> name for the component | string
mode ---> display mode | 'dropdown' OR 'dialog'

*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import SingleSelectStyles from './SingleSelectStyles';

const styles = SingleSelectStyles.getStyles({});

class SingleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label || '',
            mode: props.mode || 'dropdown',
            selectedValue: props.selectedValue,
            optionItems: props.optionItems || ['+1', '+2', '+3', '+94'],
        };
    }

    render() {
        let items = this.state.optionItems.map((value, index) => {
            return <Picker.Item style={styles.itemStyle} key={index} label={value} value={index} />;
        });

        return (
            <View style={styles.MainContainer}>
                <Text style={styles.SelectLabel}>{this.state.label}</Text>

                <View style={styles.SingleSelectContainer}>
                    <Picker
                        style={styles.picker}
                        dropdownIconColor='black'
                        dropdownIconRippleColor='green'
                        mode={this.state.mode}
                        selectedValue={this.state.selectedValue}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setSelectedValue(itemValue);
                        }}
                    >
                        {items}
                    </Picker>
                </View>
            </View>
        );
    }

    componentDidMount() {

    }

    setSelectedValue(itemValue) {
        this.setState({ selectedValue: itemValue });
    }
}

export default SingleSelect;
