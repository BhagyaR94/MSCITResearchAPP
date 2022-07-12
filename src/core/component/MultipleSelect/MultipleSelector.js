import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './MultipleSelectorStyles';
import { connect } from "react-redux";

const styles = StyleSheetFactory.getStyles({});

class MultipleSelector extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedItems: [],
            items: props.items || [],
            onSelect: props.onSelect,
            dispatcher: props.dispatcher
        };
    }

    onSelectedItemsChange = selectedItems => {
        let newElement = this.state.items[selectedItems];

        this.setState(prevState => ({
            selectedItems: [...prevState.selectedItems, newElement]
        }), () => {
            this.state.dispatcher(this.state.onSelect(this.state.selectedItems));
        });

    };

    render() {
        return (
            <SafeAreaView>
                <Text>
                    {this.state.items.length > 0 ? this.renderListOfSelections() : null}
                </Text>
            </SafeAreaView>
        );
    }

    renderListOfSelections = () => {
        return this.state.items.map((item, i) => {
            return (
                <View key={i}>
                    <TouchableOpacity onPress={(item) => {
                        this.onSelectedItemsChange(i)
                    }} >
                        <Text style={styles.Item}>{item}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    static getDerivedStateFromProps(props, state) {
        return { items: props.items };
    }

}

export default MultipleSelector;