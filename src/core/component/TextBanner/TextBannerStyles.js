import { StyleSheet } from 'react-native';
import * as staticStyles from  '../../util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {

        return StyleSheet.create({

            textStyles: {
                fontSize : 18,
                fontWeight: 'bold',
                color: props.bannerType === 'error' ? 'red' : 'orange'
            }

        });
    }

}