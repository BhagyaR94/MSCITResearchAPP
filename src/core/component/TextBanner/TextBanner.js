import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'
import StyleSheetFactory from './TextBannerStyles';

class TextBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerText: '',
            batterType: null
        };
        this.initiateLocalState(props, this.state)
    }

    initiateLocalState = (props, state) => {
        state.bannerText = props.bannerText
        state.bannerType = props.bannerType || 'error'
    }

    render() {
        const styles = StyleSheetFactory.getStyles({
            bannerType: this.state.batterType
        });
        return (
            <SafeAreaView>
                <Text style={styles.textStyles}> {this.state.bannerText}</Text>
            </SafeAreaView>
        );
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        this.initiateLocalState(nextProps, nextState)
        return !!nextProps;
    }

}

export default TextBanner;