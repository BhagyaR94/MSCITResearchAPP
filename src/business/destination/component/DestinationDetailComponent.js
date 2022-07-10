import React, { Component } from 'react'
import { View, Image, Text, Linking, TouchableOpacity } from 'react-native'
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
                        <View style={styles.InfoRow}>
                            <View style={styles.InfoLabel}>
                                <Text>Planned Arrival Time</Text>
                            </View>
                            <View style={styles.InfoValue}>
                                <Text>{this.state.destinationCategory1}</Text>
                                <Text>{this.state.destinationCategory2}</Text>
                                <Text>{this.state.destinationCategory3}</Text>
                            </View>
                        </View>

                        <View style={styles.InfoRow}>
                            <View style={styles.InfoLabel}>
                                <Text>Estimated time to cover destination</Text>
                            </View>
                            <View style={styles.InfoValue}>
                                <Text>{this.state.destinationDurationToCover}H</Text>
                            </View>
                        </View>

                        <View style={styles.InfoRow}>
                            <View style={styles.InfoLabel}>
                                <Text>Cost per head</Text>
                            </View>
                            <View style={styles.InfoValue}>
                                <Text>{this.state.destinationCost}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ActionItemsContainer}>
                    <TouchableOpacity onPress={this.openMaps.bind()}>
                        <Image style={styles.DirectionIcon} source={require('../../../../res/img/pin.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    openMaps = () => {
        const url = Platform.select({
            ios: "maps:" + this.state.destinationLatitude + "," + this.state.destinationLongitude + "?q=",
            android: "geo:" + this.state.destinationLatitude + "," + this.state.destinationLongitude + "?q="
        });

        console.log(url);
        Linking.openURL(url);
    }

}

export default DestinationDetailComponent;