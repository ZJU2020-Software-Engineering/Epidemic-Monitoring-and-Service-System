import React from 'react';
import ReactNative, { StyleSheet, Dimensions, Text ,ReactElement} from 'react-native';

export function HeadingBig({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h0, style]} {...props} />
}

export function Heading1({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h2, style]} {...props} />
}

export function Paragraph({style, ...props}: Object): ReactElement {
    return <Text style={[styles.p, style]} {...props} />
}

export function Tip({style, ...props}: Object): ReactElement {
    return <Text style={[styles.tip, style]} {...props} />
}

const styles = StyleSheet.create({
    h0: {
        fontSize: 40,
        color: '#06C1AE',
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h2: {
        fontSize: 15,
        color: '#222222',
    },
    p: {
        fontSize: 15,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }
});
