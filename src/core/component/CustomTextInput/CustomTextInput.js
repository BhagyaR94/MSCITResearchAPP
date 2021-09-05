import React, { Component } from 'react'
import { View, TextInput, Text, SafeAreaView } from 'react-native'
import StyleSheetFactory from './CustomTextInputStyles';

class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: props.placeholder || '',
            label: props.label || '',
            keyType: props.keyType || 'default',
            maxLength: props.maxLength || 25,
            autoFocus: props.autoFocus || false,
            isValid: true,
            onChangeText: props.onChangeText,
            validateText: props.validateText || null,
            text: ''
        };
    }

    render() {
        const styles = StyleSheetFactory.getStyles({
            isValid: this.state.isValid,
        });

        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.labelContainer}>
                    <Text>{this.state.label}</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                        placeholder={this.state.placeholder}
                        keyboardType={this.state.keyType}
                        maxLength={this.state.maxLength}
                        onChangeText={this.onChangeText.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                        autoFocus={this.state.autoFocus}
                        placeholderTextColor='grey'
                    >
                    </TextInput>
                </View>
            </SafeAreaView>
        );
    }

    componentDidMount() {

    }

    onChangeText(value) {
        this.state.onChangeText(value);
        this.setState({ text: value }, () => {
            if (!this.state.validateText) {
                this.setState({ isValid: true });
            } else {
                this.setState({ isValid: this.state.validateText(this.state.text) });
            }
        });
    }

    onBlur() {

    }
}

export default CustomTextInput;