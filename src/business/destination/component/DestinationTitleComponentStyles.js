import {StyleSheet, Dimensions} from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil';

export default class StyleSheetFactory {
  static getStyles(props) {
    return StyleSheet.create({
      MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: 200,
        backgroundColor: ColorUtil.appTextSecondaryColor,
        marginTop: 2,
        marginBottom: 2,
      },

      ThumbnailContainer: {
        flex: 0.4,
      },

      DetailContainer: {
        flex: 0.6,
      },

      Thumbnail: {
        borderRadius: 2,
        borderWidth: 0.1,
        width: 130,
        height: 180,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        marginTop: 8,
      },
      TitleContainer: {
        display: 'flex',
        flex: 0.3,
      },
      DestinationName: {
        fontSize: ColorUtil.appHeadingMedium,
        textAlign: 'left',
        color: ColorUtil.appPrimayColor,
      },
      CostAndDurationContainer: {
        display: 'flex',
        flex: 0.2,
        flexDirection: 'row',
      },
      CostContainer: {
        display: 'flex',
        flex: 0.4,
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',
      },
      Cost: {
        backgroundColor: ColorUtil.appPrimayColor,
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 0.1,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        color: 'white',
        fontSize: 18,
      },
      DurationContainer: {
        display: 'flex',
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
      },
      DurationLabel: {
        display: 'flex',
        flex: 0.5,
      },
      DurationValue: {
        display: 'flex',
        flex: 0.5,
      },
      CategoryAndPeriodContainer: {
        display: 'flex',
        flex: 0.3,
        flexDirection: 'row',
      },
      CategoryContainer: {
        display: 'flex',
        flex: 0.4,
        flexDirection: 'row',
      },
      Category: {
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 0.1,
        width: 50,
        height: 50,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
      },
      PeriodContainer: {
        display: 'flex',
        flex: 0.6,
        flexDirection: 'column',
      },
      ArrivalContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
      },
      ArrivalLabel: {
        display: 'flex',
        flex: 0.7,
      },
      ArrivalValue: {
        display: 'flex',
        flex: 0.3,
      },
      DepartureLabel: {
        display: 'flex',
        flex: 0.7,
      },
      DepartureValue: {
        display: 'flex',
        flex: 0.3,
      },
      DepartureContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
      },
      SocialMediaContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      SocialIcon: {
        borderRadius: 2,
        width: 35,
        height: 35,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 2,
        marginTop: 2,
        color: 'white',
        fontSize: 16,
      },
    });
  }
}
