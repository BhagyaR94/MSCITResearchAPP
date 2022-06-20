import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DestinationTitleComponent from './DestinationTitleComponent';
import DestinationDetailComponent from './DestinationDetailComponent';
import DestinationTitleComponentStyles from './DestinationComponentStyles';
import { ExpandableListView } from 'react-native-expandable-listview';

let styles = DestinationTitleComponentStyles.getStyles();

const CONTENT = [
    {
        customItem: (
            <View style={{ flexDirection: 'column' }}>
                <Text>Custom Item</Text>
                <Text>With</Text>
                <Text>what you</Text>
                <Text>want</Text>
            </View>
        ),
        subCategory: [
            {
                customInnerItem: (
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Text>Inner Item</Text>
                        <Text>With whatever you need</Text>
                    </View>
                ),
                id: '1',
                name: '',
            },
            { id: '2', name: 'Sub Item 2' },
        ],
    },
    {
        customItem: (
            <View style={{ flexDirection: 'column' }}>
                <Text>Custom Item</Text>
                <Text>With</Text>
                <Text>what you</Text>
                <Text>want</Text>
            </View>
        ),
        subCategory: [
            {
                customInnerItem: (
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Text>Inner Item</Text>
                        <Text>With whatever you need</Text>
                    </View>
                ),
                id: '1',
                name: '',
            },
            { id: '2', name: 'Sub Item 2' },
        ],
    },
];

class DestinationComponent extends Component {

    constructor(props) {
        super(props);
        this.initializeState();
        this.getFormattedDestinationData();

    }

    initializeState = () => {
        this.state = {
            destinations: this.props.destinations,
            formattedDestinations: []
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <ExpandableListView
                    // ExpandableListViewStyles={{borderTopWidth:1}} // styles to expandable listview
                    // renderInnerItemSeparator={false} // true or false, render separator between inner items
                    // renderItemSeparator={false} // true or false, render separator between Items
                    // itemContainerStyle={{}} // add your styles to all item container of your list
                    // itemLabelStyle={{}} // add your styles to all item text of your list
                    // customChevron={{}} // your custom image to the indicator
                    // chevronColor="white" // color of the default indicator
                    // innerItemContainerStyle={{}} // add your styles to all inner item containers of your list
                    // itemLabelStyle={{}} // add your styles to all inner item text of your list
                    // itemImageIndicatorStyle={{}} // add your styles to the image indicator of your list
                    // defaultLoaderStyles?: ViewStyle; // Set your styles to default loader (only for animated={true})
                    // customLoader?: JSX.Element; Pass your custom loader, while your content is measured and rendered (only for animated={true})
                    animated={true} // sets all animations on/off, default on
                    data={this.state.formattedDestinations}
                    onInnerItemClick={this.handleInnerItemClick}
                    onItemClick={this.handleItemClick}
                />
            </View>
        )
    }

    handleItemClick({ index }) {
        console.log(index);
    };

    handleInnerItemClick({ innerIndex, item, itemIndex }) {
        console.log(innerIndex);
    };

    getFormattedDestinationData() {

        this.state.destinations.forEach(destination => {
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

            this.state.formattedDestinations.push(formattedDestination)

        });

        console.log(this.state.formattedDestinations);

    }

}

export default DestinationComponent;