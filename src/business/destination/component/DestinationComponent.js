import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import DestinationTitleComponentStyles from './DestinationComponentStyles';
import DestinationTitleComponent from '../component/DestinationTitleComponent';

let styles = DestinationTitleComponentStyles.getStyles();

class DestinationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: this.props.destinations || [],
    };
  }

  componentDidMount() {
    this.setState({
      destinations: this.props.destinations,
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {this.state.destinations.length > 0 ? (
          this.renderListView()
        ) : (
          <Text>No Destinations</Text>
        )}
      </View>
    );
  }

  renderListView() {
    return (
      <FlatList
        data={this.state.destinations}
        renderItem={({item}) => (
          <DestinationTitleComponent destination={item} />
        )}
      />
    );
  }

  static getDerivedStateFromProps(props, state) {
    return {destinations: props.destinations};
  }
}

export default DestinationComponent;
