import { StyleSheet } from 'react-native';
import * as ColorUtils from '../../../core/util/ColorUtil';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },

            DatePickerContainer: {
                display: 'flex',
                flex: 0.6,
            },

            DurationLabel: {
                color: ColorUtils.appTextPrimaryColor,
                fontSize: ColorUtils.appLargeFontSize,
                marginLeft: 10,
            }

        });
    }

}