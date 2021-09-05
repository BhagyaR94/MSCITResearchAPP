import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CounterStyles from './CounterStyles';

const styles = CounterStyles.getStyles({});

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: props.counter || 60,
            minutes: 0,
            seconds: 0,
            counterPrefix: props.prefix || ''
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => {
                this.setState((prevState) => ({ timer: prevState.timer - 1 }));
                this.setState({ minutes: Math.floor(this.state.timer % 3600 / 60) });
                this.setState({ seconds: Math.floor(this.state.timer % 3600 % 60) });
            }, 1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <View>
                <Text style={styles.textStyles}> {this.state.counterPrefix} {this.state.minutes}:{this.state.seconds} </Text>
            </View>
        )
    }

    addLeadingZero(number) {
        console.log(number);
        return number < 10 ? '0' + number : number;
    }


}
export default Counter