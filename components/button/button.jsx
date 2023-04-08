import {StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
export const Button = ({ onPress, title}) => {
    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF6C00',
        paddingTop: 14,
        paddingBottom: 14,
        paddingRight: 32,
        paddingLeft:32,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
