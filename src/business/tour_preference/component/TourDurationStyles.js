import { StyleSheet } from 'react-native';
import * as ColorUtils from '../../../core/util/ColorUtil';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 100,
            },

            DatePickerContainer: {
                display: 'flex',
                flex: 95,
            },

            LabelContainer: {
                display: 'flex',
                flex: 5,
            },

            DurationLabel: {
                color: ColorUtils.appTextPrimaryColor,
                fontSize: ColorUtils.appLargeFontSize,
                marginLeft: 10,
                marginBottom: 8,
                fontSize: 22,
                textAlign: 'center'
            }

        });
    }

}