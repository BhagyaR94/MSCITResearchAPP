import { StyleSheet } from 'react-native';
import * as staticStyles from '../../util/ColorUtil'

export default class ListItemStyles {

    static getStyles(props) {

        return StyleSheet.create({

            ItemContainer: {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                width: 90,
                height: 90,
                borderStyle: 'solid',
                borderWidth: 0.25,
                borderRadius: 8,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 2,
                marginRight: 2,
                backgroundColor: props.selected ? staticStyles.appPrimayColor : 'transparent',
                borderColor: props.selected ? staticStyles.appPrimayColor : 'transparent',
            },

            Item: {
                fontSize: 10,
                flex: 1,
                marginTop: 4,
                marginBottom: 4,
                marginLeft: 4,
                marginRight: 4,
                paddingLeft: 8,
                paddingRight: 8,
                textAlign: 'center',
                color: props.selected ? 'white' : 'black',
                fontWeight: props.selected ? 'bold': 'normal'
            },

            Icon: {
                width: 60,
                height: 60,
                alignSelf: 'center'
            },

            Rank: {
                marginLeft: 55,
                backgroundColor: 'orange',
                borderStyle: 'solid',
                borderWidth: 0.3,
                borderRadius: 30,
                width:25,
                height: 25,
                position: 'absolute',
                justifyContent: 'center',
                textAlign: 'center'
            }

        });
    }

}