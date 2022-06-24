import { StyleSheet } from 'react-native';
import * as staticStyles from '../../../core/util/ColorUtil.js';

export default class SelectCategoryStyles {

    static getStyles(props) {

        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },
            TitleContainer: {
                flex: 0.1,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 24
            },
            Title: {
                fontSize: staticStyles.appHeadingLarge,
                justifyContent: 'center',
                // fontWeight: 'bold',
                marginLeft: 8,
            },
            SelectionContainer: {
                flex: 0.8,
            },
            ButtonContainer: {
                flex: 0.1,
            }
        });
    }
}