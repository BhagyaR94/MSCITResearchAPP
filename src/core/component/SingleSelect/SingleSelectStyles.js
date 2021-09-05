import { StyleSheet } from 'react-native';
import * as staticStyles from '../../util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
            },

            SelectLabel: {
                fontSize: staticStyles.appLargeFontSize
            },

            SingleSelectContainer: {
                borderRadius: 5,
                height: 64,
                borderBottomWidth: 0.5,
                borderBottomColor: 'black',
                borderStyle: 'solid',
                justifyContent: 'center'
            },

            picker: {
                color: staticStyles.appTextPrimaryColor,
                borderStyle: 'solid',
                borderWidth: 2,
                textAlign: 'right',
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
            },

            itemStyle: {
                fontSize: staticStyles.appLargeFontSize
            },

            pickerItemContainer: {
                // alignContent: 'center',
                justifyContent: 'center'
            }

        });
    }

}