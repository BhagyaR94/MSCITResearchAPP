import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import StyleSheetFactory from './MultipleSelectorStyles';
import ListStyleSheetFactory from './ListItemStyles';
import * as ALL from '../../util/IconUtils';
import {ScrollView} from 'react-native-gesture-handler';

class MultipleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      items: props.items || [],
      onSelect: props.onSelect,
      dispatcher: props.dispatcher,
      rankList: [],
    };
  }

  onSelectedItemsChange = selectedItems => {
    let newElement = this.state.items[selectedItems];

    if (this.state.selectedItems.indexOf(newElement) === -1) {
      this.addToSelectedItems(newElement);
    } else {
      this.removeFromSelectedItems(newElement);
    }
  };

  addToSelectedItems(newElement) {
    this.setState(
      prevState => ({
        selectedItems: [...prevState.selectedItems, newElement],
      }),
      this.updateRank,
    );
  }

  removeFromSelectedItems(newElement) {
    this.setState(
      {
        selectedItems: this.state.selectedItems.filter(item => {
          return item !== newElement;
        }),
      },
      this.updateRank,
    );
  }

  updateRank() {
    this.setState(
      {
        selectedItems: this.state.selectedItems.map((selectedItem, index) => {
          selectedItem.rank = index + 1;
          return selectedItem;
        }),
      },
      this.dispatchSelectedItems,
    );
  }

  dispatchSelectedItems() {
    this.state.dispatcher(this.state.onSelect(this.state.selectedItems));
  }

  isSelectedItem(item) {
    return this.state.selectedItems.indexOf(item) > -1;
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>
            {this.state.items.length > 0 ? this.renderListOfSelections() : null}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderListOfSelections = () => {
    return this.state.items.map((item, i) => {
      let props = {
        selected: this.state.selectedItems.indexOf(item) !== -1,
      };

      let listItemStyles = ListStyleSheetFactory.getStyles(props);

      return (
        <TouchableOpacity
          onPress={item => {
            this.onSelectedItemsChange(i);
          }}
          key={i}>
          <View style={listItemStyles.ItemContainer}>
            <Image
              style={listItemStyles.Icon}
              source={ALL[`${item.title.toLowerCase()}`]}></Image>
            <Text style={listItemStyles.Item}>{item.title}</Text>
            {this.isSelectedItem(item) ? (
              <Text style={listItemStyles.Rank}>{item.rank}</Text>
            ) : null}
          </View>
        </TouchableOpacity>
      );
    });
  };

  static getDerivedStateFromProps(props, state) {
    return {items: props.items};
  }
}

export default MultipleSelector;
