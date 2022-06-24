import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import DestinationTitleComponent from './DestinationTitleComponent';
import DestinationDetailComponent from './DestinationDetailComponent';
import DestinationTitleComponentStyles from './DestinationComponentStyles';
import { ExpandableListView } from 'react-native-expandable-listview';

let styles = DestinationTitleComponentStyles.getStyles();

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
                    // renderInnerItemSeparator={false} // true or false, render separator between inner items
                    // itemLabelStyle={{}} // add your styles to all item text of your list
                    // customChevron={{}} // your custom image to the indicator
                    // itemLabelStyle={{}} // add your styles to all inner item text of your list
                    // itemImageIndicatorStyle={{}} // add your styles to the image indicator of your list
                    // defaultLoaderStyles?: ViewStyle; // Set your styles to default loader (only for animated={true})
                    // customLoader?: JSX.Element; Pass your custom loader, while your content is measured and rendered (only for animated={true})
                    // chevronColor="white" // color of the default indicator
                    ExpandableListViewStyles={{ borderTopWidth: 1 }} // styles to expandable listview
                    itemContainerStyle={{ borderBottomWidth: 1, backgroundColor: 'transparent', paddingStart: 0, paddingEnd: 0, paddingTop: 0, paddingBottom: 0}} // add your styles to all item container of your list
                    renderItemSeparator={true} // true or false, render separator between Items
                    innerItemContainerStyle={{ }} // add your styles to all inner item containers of your list
                    animated={false} // sets all animations on/off, default on
                    data={this.state.formattedDestinations}
                    onInnerItemClick={this.handleInnerItemClick}
                    onItemClick={this.handleItemClick}
                />
            </View>
        )
    }

    handleItemClick({ index }) {

    };

    handleInnerItemClick({ innerIndex, item, itemIndex }) {

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

    }

}

export default DestinationComponent;