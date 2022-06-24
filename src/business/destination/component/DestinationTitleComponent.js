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

                <View style={styles.TimeContainer}>
                    <View style={styles.ArrivalTimeContainer}>
                        <Text style={styles.ArrivalTime}>10:23am</Text>
                    </View>
                    <View style={styles.DurationContainer}>
                        <Text style={styles.Duration}>1H</Text>
                    </View>
                </View>

                <View style={styles.TitleContainer}>

                    <View style={styles.DestinationNameContainer}>
                        <Text style={styles.DestinationName}>{this.state.destinationName}</Text>
                    </View>
                    <View style={styles.DestinationInfoIconContainer}>
                        <View style={styles.DestinationCategoryContainer}>
                            <Text style={styles.Category}>C</Text>
                            <Text style={styles.Category}>C</Text>
                            <Text style={styles.Category}>C</Text>
                        </View>
                        <View style={styles.DestinationCostContainer}>
                            <Text style={styles.Cost}>1500$ x 1</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.StatusContainer}>

                </View>
            </View>
        )
    }

}

export default DestinationTitleComponent;