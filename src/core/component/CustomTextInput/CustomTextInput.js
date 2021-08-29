import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import StyleSheetFactory from './CustomTextInputStyles';

const styles = StyleSheetFactory.getStyles({});

class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: props.placeholder || '',
            label: props.label || ''
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.labelContainer}>
                    <Text>{this.state.label}</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput} placeholder={this.state.placeholder}></TextInput>
                </View>
            </View>
        );
    }

    componentDidMount() {

    }
}

export default CustomTextInput;