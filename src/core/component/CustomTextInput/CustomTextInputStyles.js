import { StyleSheet } from 'react-native';
import * as staticStyles from  '../../util/ColorUtil'

export default class StyleSheetFactory {

    static getStyles(props) {

        return StyleSheet.create({

            container: {
            },

            labelContainer: {
                color: 'red'
            },

            textInputContainer: {
                height: 64,
                elevation: 0.1,
                borderBottomWidth: 2,
                borderStyle: 'solid',
                color: 'black',
                borderBottomColor: props.isValid ? '#eceff4' : 'red',
                // backgroundColor: '#eceff4',
            },

            textInput: {
                fontSize: staticStyles.appLargeFontSize,
                // backgroundColor: '#eceff4',
                textAlign: 'center',
                color: staticStyles.appPrimayColor
            }

        });
    }

}