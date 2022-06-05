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

            BudgetContainer: {
                display: 'flex',
                flex: 0.3,
            },

            DurationContainer: {
                display: 'flex',
                flex: 0.8,
            },

            ButtonsContainer: {
                display: 'flex',
                flex: 0.1,
            },

            Title: {
                color: ColorUtil.appTextPrimaryColor,
                fontSize: ColorUtil.appHeadingLarge,
                textAlign: 'left',
                marginLeft: 10
            }

        });
    }

}