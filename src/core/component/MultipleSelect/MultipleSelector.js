import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './MultipleSelectorStyles';

const styles = StyleSheetFactory.getStyles({});

class MultipleSelector extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: props.items || [],
        };
    }

    state = {
        selectedItems: []
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        return (
            <SafeAreaView>
                <Text>
                    {this.state.length > 0 ? this.renderListOfSelections() : null}
                </Text>
            </SafeAreaView>
        );
    }

    renderListOfSelections = () => {
        return this.state.items.map((item, i) => {
            return (
                <View key={i}>
                    <TouchableOpacity onPress={() => {
                        this.onSelectedItemsChange()
                    }} >
                        <Text style={styles.Item}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('updated', props);
        return { favoritecolor: props.favcol };
    }

}


export default MultipleSelector;