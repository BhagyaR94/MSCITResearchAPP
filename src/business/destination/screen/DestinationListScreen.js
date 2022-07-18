import React from 'react';
import { View, Text } from 'react-native';
import DestinationListScreenStyles from './DestinationListScreenStyles'
import DestinationComponent from '../component/DestinationComponent'
import DestinationTitleComponent from './../component/DestinationTitleComponent';
import DestinationDetailComponent from './../component/DestinationDetailComponent';
import { HttpUtils } from '../../../core/util/HttpUtils';
import { useSelector, useDispatch, useStore } from 'react-redux';

let styles = DestinationListScreenStyles.getStyles();
let tourPreferences, tourCategories;

let DestinationListScreen = ({ navigation }) => {

    const [destinations, setDestinations] = React.useState({});
    tourPreferences = useSelector(state => state.tourPreferenceReducer);
    tourCategories =  useSelector((state) => state.categoryReducer);

    React.useEffect(() => {
        loadDestinations(setDestinations);
    }, []);

    return (
        <View style={styles.MainContainer}>
            <View style={styles.DayContainer}>
                <Text style={styles.Title}>Destination List</Text>
            </View>
            <View style={styles.DestinationCardContainer}>
                <DestinationComponent destinations={destinations}></DestinationComponent>
            </View>
        </View>
    );

}

function loadDestinations(setDestinations) {
    new HttpUtils().postRequest('destination', {
        categories : tourCategories.selectedTravelCategories,
        durationOfStay: (tourPreferences.tourDuration) * 24,
        budget: tourPreferences.tourBudget,
    }).then(result => {
        if (result.data.length > 0) {
            setDestinations(getFormattedDestinationData(result.data));
        }
    }).catch(error => {
        console.log('error occured', error);
    }).finally();
}

function getFormattedDestinationData(destinations) {

    let formattedDestinations = [];

    destinations.forEach(destination => {

        let formattedDestination = {
            customItem: (
                <DestinationTitleComponent title={destination.destinationName}></DestinationTitleComponent>
            ),
            subCategory: [
                {
                    customInnerItem: (
                        <DestinationDetailComponent destination={destination}></DestinationDetailComponent>
                    )
                }
            ],
        }

        formattedDestinations.push(formattedDestination);

    });

    return formattedDestinations;

}

export default DestinationListScreen