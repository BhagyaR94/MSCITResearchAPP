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

            InnerItemStyles: {
                backgroundColor: 'transparent',
                paddingStart: 0,
                paddingEnd: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginLeft: 8,
                marginRight: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: '#333'
            }

        });
    }

}