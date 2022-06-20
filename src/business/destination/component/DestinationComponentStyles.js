import { StyleSheet } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                paddingTop: 16
            },

            TextInputStyles: {
                borderBottomColor: ColorUtil.appPrimayColor,
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                fontSize: ColorUtil.appLargeFontSize,
                color: ColorUtil.appTextPrimaryColor,
            },

        });
    }

}