import { StyleSheet } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },

            DayContainer: {
                display:'flex',
                flex: 0.3,
                borderStyle:'solid',
                borderWidth: 1
            },

            DestinationCardContainer: {
                display:'flex',
                flex: 0.7,
                borderStyle:'solid',
                borderWidth: 1
            }

        });
    }

}