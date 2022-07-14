import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './MultipleSelectorStyles';
import ListStyleSheetFactory from './ListItemStyles';

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

        if (this.state.selectedItems.indexOf(newElement) === -1) {
            this.setState(prevState => ({
                selectedItems: [...prevState.selectedItems, newElement]
            }), () => {
                this.state.dispatcher(this.state.onSelect(this.state.selectedItems));
            });
        } else {
            this.setState({
                selectedItems: this.state.selectedItems.filter((item) => {
                    return item !== newElement;
                })
            }, () => {
                this.state.dispatcher(this.state.onSelect(this.state.selectedItems));
            });
        }

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

            let props = {
                selected: this.state.selectedItems.indexOf(item) !== -1
            };

            let listItemStyles = ListStyleSheetFactory.getStyles(props);

            return (
                <View key={i}>
                    <TouchableOpacity onPress={(item) => {
                        this.onSelectedItemsChange(i)
                    }} >
                        <Text style={listItemStyles.Item}>{item}</Text>
                    </TouchableOpacity>
                </View>
            );

        });

    }

    static getDerivedStateFromProps(props, state) {
        return { items: props.items };
    }

}

export default MultipleSelector;