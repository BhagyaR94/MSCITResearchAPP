import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import StyleSheetFactory from './CustomButtonStyles';

const styles = StyleSheetFactory.getStyles({});

class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: props.label || 'Click'
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.buttonStyles} >
                    <Text style={styles.buttonLabel}>{this.state.label}</Text>
                </TouchableOpacity> 
            </View>
        );
    }

    componentDidMount() {

    }
}

export default CustomButton;