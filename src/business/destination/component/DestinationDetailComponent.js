import React, { Component } from 'react'
import { View, Image } from 'react-native'
import DestinationDetailComponentStyles from './DestinationDetailComponentStyles';
import * as ColorUtil from '../../../core/util/ColorUtil'

let styles = DestinationDetailComponentStyles.getStyles();

class DestinationDetailComponent extends Component {

    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState = () => {
        this.state = {
            destinationCategory1: this.props.destination.destinationCategory1,
            destinationCategory2: this.props.destination.destinationCategory2,
            destinationCategory3: this.props.destination.destinationCategory3,
            destinationDurationToCover: this.props.destination.destinationDurationToCover,
            destinationCost: this.props.destination.destinationCost,
            destinationLatitude: this.props.destination.destinationLatitude,
            destinationLongitude: this.props.destination.destinationLongitude,
            destinationType: this.props.destination.destinationType
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.DetailContainer}>
                    <View style={styles.ImageContainer}>
                        <Image style={styles.Image} source={require('../../../../res/img/thumbnails/yala.jpg')}></Image>
                    </View>
                    <View style={styles.InfoContainer}>

                    </View>
                </View>
                <View style={styles.ActionItemsContainer}>

                </View>
                {/* <Text>{this.state.destinationCategory1}</Text>
                <Text>{this.state.destinationCategory2}</Text>
                <Text>{this.state.destinationCategory3}</Text>
                <Text>{this.state.destinationDurationToCover}</Text>
                <Text>{this.state.destinationCost}</Text>
                <Text>{this.state.destinationLatitude}</Text>
                <Text>{this.state.destinationLongitude}</Text>
                <Text>{this.state.destinationType}</Text> */}
            </View>
        )
    }

}

export default DestinationDetailComponent;