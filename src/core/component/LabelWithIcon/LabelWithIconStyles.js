import { StyleSheet } from 'react-native';
import * as staticStyles from '../../util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {

        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },

            TouchablesContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
            },

            LabelContainer: {
                display: 'flex',
                flex: 0.7,
                marginLeft: 8,
            },

            Label: {
                color: staticStyles.appPrimayColor,
                fontSize: staticStyles.appLargeFontSize
            },

            IconContainer: {
                display: 'flex',
                flex: 0.3,
                marginRight: 8,
            },

            Icon: {
                alignSelf: 'center',
            }

        });
    }

}