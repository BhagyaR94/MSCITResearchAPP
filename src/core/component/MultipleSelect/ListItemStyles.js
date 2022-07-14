import { StyleSheet } from 'react-native';
import * as staticStyles from '../../util/ColorUtil'

export default class ListItemStyles {

    static getStyles(props) {

        return StyleSheet.create({
            Item: {
                borderStyle: 'solid',
                borderRadius: 8,
                borderWidth: 1,
                fontSize: 20,
                flex: 1,
                marginTop: 4,
                marginBottom: 4,
                marginLeft: 4,
                marginRight: 4,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: props.selected ? 'gold' : staticStyles.appPrimayColor,
                borderColor: props.selected ? 'gold' : staticStyles.appPrimayColor,
                color: props.selected ? 'black' : 'white',
            }

        });
    }

}