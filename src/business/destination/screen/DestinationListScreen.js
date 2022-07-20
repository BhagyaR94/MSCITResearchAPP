import React from 'react';
import { View, Text } from 'react-native';
import DestinationListScreenStyles from './DestinationListScreenStyles'
import DestinationComponent from '../component/DestinationComponent'
import DestinationTitleComponent from './../component/DestinationTitleComponent';
import DestinationDetailComponent from './../component/DestinationDetailComponent';
import { HttpUtils } from '../../../core/util/HttpUtils';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { BarIndicator } from 'react-native-indicators';
import * as staticStyles from '../../../core/util/ColorUtil';

let styles = DestinationListScreenStyles.getStyles();
let tourPreferences, tourCategories;

let DestinationListScreen = ({ navigation }) => {

    const [destinations, setDestinations] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    tourPreferences = useSelector(state => state.tourPreferenceReducer);
    tourCategories = useSelector((state) => state.categoryReducer);

    React.useEffect(() => {
        loadDestinations(setDestinations);
    }, []);

    React.useEffect(() => {
        if (destinations.length !== 0) {
            setIsLoading(false)
        }
    }, [destinations]);

    return (
        <View style={styles.MainContainer}>
            {isLoading ? <BarIndicator color={staticStyles.appPrimayColor} /> :
                <View style={styles.Content}>
                    <View style={styles.DayContainer}>
                        <Text style={styles.Title}>Important Information Will Be Displayd Here Future</Text>
                    </View>
                    <View style={styles.DestinationCardContainer}>
                        <DestinationComponent destinations={destinations}></DestinationComponent>
                    </View>
                </View>
            }

        </View>
    );

}

function loadDestinations(setDestinations) {
    new HttpUtils().postRequest('destination', {
        categories: tourCategories.selectedTravelCategories,
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
                <DestinationTitleComponent destination={destination}></DestinationTitleComponent>
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