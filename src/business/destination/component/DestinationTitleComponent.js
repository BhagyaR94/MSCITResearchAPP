import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DestinationTitleComponentStyles from './DestinationTitleComponentStyles';
import * as ColorUtil from '../../../core/util/ColorUtil'

let styles = DestinationTitleComponentStyles.getStyles();

class DestinationTitleComponent extends Component {

    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState = () => {
        this.state = {
            destinationName: this.props.title,
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text>{this.state.destinationName}</Text>
            </View>
        )
    }

}

export default DestinationTitleComponent;