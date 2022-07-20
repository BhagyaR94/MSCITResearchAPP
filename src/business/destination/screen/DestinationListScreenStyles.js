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

            Content: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },

            DayContainer: {
                display:'flex',
                flex: 0.3,
            },

            DestinationCardContainer: {
                display:'flex',
                flex: 0.7,
            },

            Title: {
                fontSize: 20,
                justifyContent: 'center',
                color: 'red'
            }

        });
    }

}