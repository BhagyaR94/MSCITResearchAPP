import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import DestinationTitleComponentStyles from './DestinationTitleComponentStyles';
import * as ColorUtil from '../../../core/util/ColorUtil'
import * as ALL from '../../../core/util/IconUtils';

let styles = DestinationTitleComponentStyles.getStyles();

class DestinationTitleComponent extends Component {

    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState = () => {
        this.state = {
            destinationName: this.props.destination.destinationName,
            destinationCategory1: this.props.destination.destinationCategory1,
            destinationCategory2: this.props.destination.destinationCategory2,
            destinationCategory3: this.props.destination.destinationCategory3,
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <View style={styles.TimeContainer}>
                    <View style={styles.ArrivalTimeContainer}>
                        {/* <Text style={styles.ArrivalTime}>10:23am</Text> */}
                    </View>
                    <View style={styles.DurationContainer}>
                        {/* <Text style={styles.Duration}>1H</Text> */}
                    </View>
                </View>

                <View style={styles.TitleContainer}>

                    <View style={styles.DestinationNameContainer}>
                        <Text style={styles.DestinationName}>{this.state.destinationName}</Text>
                    </View>
                    <View style={styles.DestinationInfoIconContainer}>
                        <View style={styles.DestinationCostContainer}>
                            <Text style={styles.Cost}>1500$ x 1</Text>
                        </View>
                        <View style={styles.DestinationCategoryContainer}>
                            {/* <Image source={{uri: 'https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/Dunhinda-Falls-2.jpg'}} style={styles.Category}/> */}
                            <Image source={ALL[`${this.state.destinationCategory1.toLowerCase()}`]} style={styles.Category} />
                            <Image source={ALL[`${this.state.destinationCategory2.toLowerCase()}`]} style={styles.Category} />
                            <Image source={ALL[`${this.state.destinationCategory3.toLowerCase()}`]} style={styles.Category} />
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