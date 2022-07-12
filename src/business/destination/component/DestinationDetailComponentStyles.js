import { StyleSheet } from 'react-native';
import * as ColorUtil from '../../../core/util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                height: 200,
                backgroundColor: '#66CDAA'
            },

            DetailContainer: {
                display: 'flex',
                flex: 0.8,
                flexDirection: 'row',
            },

            ActionItemsContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.2,
                justifyContent: 'center'
            },

            ImageContainer: {
                display: 'flex',
                flex: 0.4,
            },

            Image: {
                display: 'flex',
                width: 150,
                height: 150,
            },

            InfoContainer: {
                display: 'flex',
                flex: 0.6,
            },

            InfoRow: {
                display: 'flex',
                flexDirection: 'row',
                flex: 1
            },

            InfoLabel: {
                display: 'flex',
                flex: 0.5,
            },

            InfoValue: {
                display: 'flex',
                flex: 0.5,
                flexDirection: 'row'
            },

            DirectionIcon:{
                display: 'flex',
                width: 30,
                height: 30,
            }

        });
    }

}