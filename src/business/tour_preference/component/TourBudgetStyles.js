import { StyleSheet } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                paddingTop: 16,
            },

            InputContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.7,
            },

            TextInputStyles: {
                borderBottomColor: ColorUtil.appPrimayColor,
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                fontSize: ColorUtil.appLargeFontSize,
                color: ColorUtil.appTextPrimaryColor,
                justifyContent: 'center'
            },

            TitleContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.3,
            },

            TitleStyles: {
                fontSize: 22,
                color: ColorUtil.appTextPrimaryColor,
                marginLeft: 10,
                marginRight: 10,
                textAlign: 'center'
            }

        });
    }

}