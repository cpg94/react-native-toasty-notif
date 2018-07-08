import React, { Component } from 'react';
import { number } from 'prop-types';
import { Animated } from 'react-native';

class Fade extends Component {
    constructor(props){
        super(props);
        this.state = {
            fade: new Animated.Value(0)
        }
    }

    componentDidMount(){
        const duration = this.props.timeout / 2;
        const animations = [
            Animated.timing(this.state.fade, 
            {
                toValue: 1,
                duration,
            }),
            Animated.timing(this.state.fade, 
            {
                toValue: 0,
                duration,
            }),
        ]
        Animated.sequence(animations).start();
    }

    render(){
        return (
            <Animated.View
                style={{
                    opacity: this.state.fade,
                }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

Fade.propTypes = {
    timeout: number.isRequired,
}

export default Fade;