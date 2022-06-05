import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './MultipleSelectorStyles';

const styles = StyleSheetFactory.getStyles({});
const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
}, {
    id: '16hbajsabsd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sg',
    name: 'Lagos'
}, {
    id: '667atsas',
    name: 'Maiduguri'
}, {
    id: 'hsyasajs',
    name: 'Anambra'
}, {
    id: 'djsjudksjd',
    name: 'Benue'
}, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjd',
    name: 'Abuja'
},{
    id: '92iijs7ytaa',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsdd',
    name: 'Ogun'
}, {
    id: '16hbajsabsdd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sgg',
    name: 'Lagos'
}, {
    id: '667atsass',
    name: 'Maiduguri'
}, {
    id: 'hsyasajss',
    name: 'Anambra'
}, {
    id: 'djsjudksjdd',
    name: 'Benue'
}, {
    id: 'sdhyaysdjj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjdd',
    name: 'Abuja'
}
];

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
                    {items.length > 0 ? this.renderListOfSelections() : null}
                </Text>
            </SafeAreaView>
        );
    }

    renderListOfSelections = () => {
        return items.map((item, i) => {
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

}


export default MultipleSelector;