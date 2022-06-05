import { StyleSheet } from 'react-native';
import * as staticStyles from '../../util/ColorUtil'

export default class MultipleSelectorStyles {

    static getStyles(props) {

        return StyleSheet.create({

            ItemContainer: {
                
            },
            Item: {
                borderStyle: 'solid',
                borderRadius: 8,
                borderWidth: 1,
                fontSize:20,
                flex: 1,
                marginTop: 4,
                marginBottom: 4,
                marginLeft: 4,
                marginRight: 4,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: staticStyles.appPrimayColor,
                borderColor: staticStyles.appPrimayColor,
                color: 'white',
            }

        });
    }

}