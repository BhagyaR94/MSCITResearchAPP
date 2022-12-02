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
        borderStyle: 'solid',
        borderWidth: 1,
      },

      DetailContainer: {
        flex: 0.6,
        borderStyle: 'solid',
        borderWidth: 1,
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
        flex: 0.2,
        borderStyle: 'solid',
        borderWidth: 1,
      },
      CostAndDurationContainer: {
        display: 'flex',
        flex: 0.2,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      CostContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      DurationContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      CategoryAndPeriodContainer: {
        display: 'flex',
        flex: 0.3,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      CategoryContainer: {
        display: 'flex',
        flex: 0.3,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
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
        flex: 0.7,
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      ArrivalContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      DepartureContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
      },

      TimeContainer: {
        display: 'flex',
        flex: 0.2,
        flexDirection: 'column',
      },

      ArrivalTimeContainer: {
        display: 'flex',
        flex: 0.5,
      },

      ArrivalTime: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
      },

      DestinationNameContainer: {
        display: 'flex',
        flex: 0.3,
        justifyContent: 'center',
      },

      DestinationName: {
        fontSize: ColorUtil.appHeadingMedium,
        textAlign: 'center',
        color: ColorUtil.appPrimayColor,
      },

      DestinationInfoIconContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 0.7,
      },

      DestinationCategoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 0.7,
        justifyContent: 'center',
      },

      DestinationCostContainer: {
        display: 'flex',
        flex: 0.3,
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
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
      },

      StatusContainer: {
        display: 'flex',
        flex: 0.1,
      },
    });
  }
}
