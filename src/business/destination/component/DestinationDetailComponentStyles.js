import { StyleSheet } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                height: 200
            },

            DetailContainer: {
                display: 'flex',
                flex: 0.9,
                flexDirection: 'row',
                borderStyle: 'solid',
                borderWidth: 1
            },

            ActionItemsContainer: {
                display: 'flex',
                flex: 0.1,
                borderStyle: 'solid',
                borderWidth: 1
            },

            ImageContainer: {
                display: 'flex',
                flex: 0.4,
                borderStyle: 'solid',
                borderWidth: 1,
                // alignContent: 'center'
            },

            Image: {
                display: 'flex',
                width: 150,
                height: 150,
                alignSelf: 'center',
                justifyContent: 'center'
            },

            InfoContainer: {
                display: 'flex',
                flex: 0.6,
                borderStyle: 'solid',
                borderWidth: 1
            },

        });
    }

}