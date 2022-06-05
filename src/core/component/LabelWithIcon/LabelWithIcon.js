import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import StyleSheetFactory from './LabelWithIconStyles';

class LabelWithIcon extends Component {
    constructor(props) {
        super(props)
        this.initializeState(props);
    }

    initializeState = (props) => {
        this.state = {
            isClickable: !!props.isClickable,
            onPress: props.onPress || function () { },
            icon: props.icon || null,
            label: props.label || 'label'
        }
    }

    render() {
        const styles = StyleSheetFactory.getStyles({

        });
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity disabled={!this.state.isClickable} style={styles.TouchablesContainer} onPress={this.state.onPress}>
                    <View style={styles.LabelContainer}>
                        <Text style={styles.Label}>{this.state.label}</Text>
                    </View>
                    <View style={styles.IconContainer}>
                        <Image style={styles.Icon} source={require('../../../../res/img/calendar_icon.png')}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LabelWithIcon