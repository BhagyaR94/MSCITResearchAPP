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

            HeadingContainer: {
                display: 'flex',
                flex: 0.1,
            },

            BudgetContainer: {
                display: 'flex',
                flex: 0.2,
                justifyContent: 'center',
            },

            DurationContainer: {
                display: 'flex',
                flex: 0.6,
            },

            ButtonsContainer: {
                display: 'flex',
                flex: 0.1,
                justifyContent: 'center',
            },

            Title: {
                color: ColorUtil.appTextPrimaryColor,
                fontSize: ColorUtil.appHeadingLarge,
                textAlign: 'center',
                marginLeft: 10,
            }

        });
    }

}