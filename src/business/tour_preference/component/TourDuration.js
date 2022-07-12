import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import TourDurationStyles from './TourDurationStyles';
import { connect } from "react-redux";

class TourDuration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dispatcher: props.dispatcher,
            onDurationSet: props.onDurationSet,
            selectedStartDate: null,
            selectedEndDate: null,
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
                        onDateChange={this.onDateChange.bind(this)}
                    />
                </View>
            </View>
        )
    }

    onDateChange = (selectedDate, date_type) => {
        if (date_type === 'START_DATE') {
            this.setState({ selectedStartDate: selectedDate._d });
        } else if (date_type === 'END_DATE') {
            this.setState({ selectedEndDate: selectedDate._d });
        }
    }

    componentDidUpdate(PrevProps, prevState) {
        if (this.state.selectedStartDate && this.state.selectedEndDate) {
            this.state.dispatcher(this.state.onDurationSet(calculateDateDifference(this.state.selectedStartDate, this.state.selectedEndDate)))
        }
    }

}

function calculateDateDifference(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000));
}

export default TourDuration