import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import StyleSheetFactory from './CustomButtonStyles';

class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: '',
            onPress: null,
            isDisabled: true
        };
        this.initiateLocalState(props);
    }

    initiateLocalState = (props) => {
        this.state.label = props.label || 'Click';
        this.state.onPress = props.onPress;
        this.state.isDisabled = props.isDisabled;
    }

    render() {
        const styles = StyleSheetFactory.getStyles({
            isDisabled: this.state.isDisabled
        });
        return (
            <SafeAreaView style={styles.container} >
                <TouchableOpacity style={styles.buttonStyles} onPress={this.state.onPress} disabled={this.state.isDisabled}>
                    <Text style={styles.buttonLabel}>{this.state.label}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        this.initiateLocalState(nextProps, nextState)
        return !!nextProps;
    }


}

export default CustomButton;