import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import DestinationTitleComponentStyles from './DestinationTitleComponentStyles';
import * as ColorUtil from '../../../core/util/ColorUtil';
import * as ALL from '../../../core/util/IconUtils';

let styles = DestinationTitleComponentStyles.getStyles();

class DestinationTitleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: this.props.destination,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {destination: props.destination};
  }

  onPressGmap = () => {
    if (this.state.destination) {
      const url = Platform.select({
        ios:
          'maps:' +
          this.state.destination.destinationLatitude +
          ',' +
          this.state.destination.destinationLongitude +
          '?q=',
        android:
          'geo:' +
          this.state.destination.destinationLatitude +
          ',' +
          this.state.destination.destinationLongitude +
          '?q=',
      });

      Linking.openURL(url);
    }
  };

  onPressFB() {
    console.log('gmap here');
  }

  onPressInsta() {
    console.log('gmap here');
  }

  onPressTwitter() {
    console.log('gmap here');
  }

  render() {
    return this.state.destination ? (
      <View style={styles.MainContainer}>
        <View style={styles.ThumbnailContainer}>
          <Image
            source={{
              uri: 'https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/Dunhinda-Falls-2.jpg',
            }}
            style={styles.Thumbnail}
          />
        </View>
        <View style={styles.DetailContainer}>
          <View style={styles.TitleContainer}>
            <Text style={styles.DestinationName}>
              {this.state.destination.destinationName}
            </Text>
          </View>

          <View style={styles.CostAndDurationContainer}>
            <View style={styles.CostContainer}>
              <Text style={styles.Cost}>
                {this.state.destination.destinationCost}$ x 1
              </Text>
            </View>
            <View style={styles.DurationContainer}>
              <Text style={styles.DurationLabel}>Duration:</Text>
              <Text style={styles.DurationValue}>
                {this.state.destination.destinationDurationToCover} Hours
              </Text>
            </View>
          </View>

          <View style={styles.CategoryAndPeriodContainer}>
            <View style={styles.CategoryContainer}>
              <Image
                source={
                  ALL[
                    `${
                      this.state.destination
                        ? this.state.destination.destinationCategory1.toLowerCase()
                        : ''
                    }`
                  ]
                }
                style={styles.Category}
              />
            </View>
            <View style={styles.PeriodContainer}>
              <View style={styles.ArrivalContainer}>
                <Text style={styles.ArrivalLabel}>ARRIVAL: </Text>
                <Text style={styles.ArrivalValue}>12:00</Text>
              </View>
              <View style={styles.DepartureContainer}>
                <Text style={styles.DepartureLabel}>DEPARTURE: </Text>
                <Text style={styles.DepartureValue}>15:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.SocialMediaContainer}>
            <TouchableOpacity onPress={this.onPressGmap}>
              <Image
                source={require('../../../../res/img/logos/gmap.png')}
                style={styles.SocialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressGmap}>
              <Image
                source={require('../../../../res/img/logos/fb.png')}
                style={styles.SocialIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressGmap}>
              <Image
                source={require('../../../../res/img/logos/twitter.png')}
                style={styles.SocialIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressGmap}>
              <Image
                source={require('../../../../res/img/logos/insta.png')}
                style={styles.SocialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : null;
  }
}

export default DestinationTitleComponent;
