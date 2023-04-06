import {
    View,
    StyleSheet,
} from 'react-native';


export const Avatar = () => {
    return (
        <View style={styles.container}>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        position: 'absolute',
        top: -60
    },
});