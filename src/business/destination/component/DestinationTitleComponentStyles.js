import { StyleSheet, Dimensions } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {


    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                height: 60,
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

            DurationContainer: {
                display: 'flex',
                flex: 0.5,
            },

            Duration: {
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 'bold'
            },

            TitleContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 0.7,
            },

            DestinationNameContainer: {
                display: 'flex',
                flex: 0.5,
            },

            DestinationName: {
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
            },

            DestinationInfoIconContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.5,
            },

            DestinationCategoryContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.3,
                justifyContent: 'center',
            },

            Category: {
                backgroundColor: ColorUtil.appPrimayColor,
                borderRadius: 2,
                borderStyle: 'solid',
                borderWidth: 0.1,
                width: 20,
                marginLeft: 2,
                marginRight: 2,
                marginBottom: 2,
                marginTop: 2,
                textAlign: 'center',
                color: 'white',
                fontSize: 16
            },

            DestinationCostContainer: {
                display: 'flex',
                flex: 0.7,
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
                fontSize: 18
            },

            StatusContainer: {
                display: 'flex',
                flex: 0.1,
            }

        });
    }

}