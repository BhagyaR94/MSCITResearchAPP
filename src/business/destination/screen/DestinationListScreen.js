import React from 'react';
import { View, Text } from 'react-native';
import DestinationListScreenStyles from './DestinationListScreenStyles'
import DestinationComponent from '../component/DestinationComponent'
import { HttpUtils } from '../../../core/util/HttpUtils';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

let styles = DestinationListScreenStyles.getStyles();

let DestinationListScreen = ({ navigation }) => {

    let list = [
        {
            "destinationName": "Yala Safari",
            "destinationCategory1": "SAFARI",
            "destinationCategory2": "ANIMALS",
            "destinationCategory3": "JUNGLE",
            "destinationDurationToCover": 5,
            "destinationCost": 500,
            "destinationType": "DESTINATION",
            "destinationLatitude": 6.3686385,
            "destinationLongitude": 81.51745
        },
        {
            "destinationName": "Ella Eco Hike",
            "destinationCategory1": "HIKING",
            "destinationCategory2": "NATURE",
            "destinationCategory3": "MOUNTAIN",
            "destinationDurationToCover": 8,
            "destinationCost": 50,
            "destinationType": "DESTINATION",
            "destinationLatitude": 6.8666296,
            "destinationLongitude": 81.04645
        },
        {
            "destinationName": "Dunhinda",
            "destinationCategory1": "SCENIC",
            "destinationCategory2": "WATERFALL",
            "destinationCategory3": "NATURE",
            "destinationDurationToCover": 1,
            "destinationCost": 200,
            "destinationType": "DESTINATION",
            "destinationLatitude": 7.0177226,
            "destinationLongitude": 81.06389
        },
        {
            "destinationName": "Kandy Temple Of Tooth",
            "destinationCategory1": "HERITAGE",
            "destinationCategory2": "BUDDHISM",
            "destinationCategory3": "ARTS",
            "destinationDurationToCover": 1,
            "destinationCost": 200,
            "destinationType": "DESTINATION",
            "destinationLatitude": 7.2938113,
            "destinationLongitude": 80.64173
        },
        {
            "destinationName": "Train from Kandy to Ella",
            "destinationCategory1": "SCENIC",
            "destinationCategory2": "TRAIN",
            "destinationCategory3": "NATURE",
            "destinationDurationToCover": 6,
            "destinationCost": 300,
            "destinationType": "DESTINATION",
            "destinationLatitude": 7.2894683,
            "destinationLongitude": 80.631905
        },
        {
            "destinationName": "Dambulla Rock Temple",
            "destinationCategory1": "HERITAGE",
            "destinationCategory2": "BUDDHISM",
            "destinationCategory3": "SCENIC",
            "destinationDurationToCover": 2,
            "destinationCost": 100,
            "destinationType": "DESTINATION",
            "destinationLatitude": 7.8567996,
            "destinationLongitude": 80.64901
        },
        {
            "destinationName": "Sigiriya",
            "destinationCategory1": "HERITAGE",
            "destinationCategory2": "HIKING",
            "destinationCategory3": "ARTS",
            "destinationDurationToCover": 3,
            "destinationCost": 800,
            "destinationType": "DESTINATION",
            "destinationLatitude": 7.958758,
            "destinationLongitude": 80.76046
        },
        {
            "destinationName": "Mirissa Whale Watching",
            "destinationCategory1": "CRUISE",
            "destinationCategory2": "ANIMALS",
            "destinationCategory3": "SEA",
            "destinationDurationToCover": 6,
            "destinationCost": 1000,
            "destinationType": "DESTINATION",
            "destinationLatitude": 5.9491186,
            "destinationLongitude": 80.4488
        }
    ];

    return (
        <View style={styles.MainContainer}>
            <View style={styles.DayContainer}>
                <Text style={styles.Title}>Destination List</Text>
            </View>
            <View style={styles.DestinationCardContainer}>
                <DestinationComponent destinations={list}></DestinationComponent>
            </View>
        </View>
    );

}

const mapStateToProps = state => {
    console.log('state here', state);
    return { destination: state.destination }
};

export default connect(mapStateToProps, actions)(DestinationListScreen)