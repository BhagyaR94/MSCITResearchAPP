import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import TourDurationStyles from './TourDurationStyles'

class TourDuration extends Component {

    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState = () => {
        this.state = {
            selectedStartDate: new Date(),
            selectedEndDate: new Date(),
        }
    }

    render() {
        let styles = TourDurationStyles.getStyles();

        return (
            <View style={styles.MainContainer}>
                <View style={styles.DatePickerContainer}>
                    <Text style={styles.DurationLabel}>Duration</Text>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                        scaleFactor={400}
                    />
                </View>
            </View>
        )
    }

}

export default TourDuration;