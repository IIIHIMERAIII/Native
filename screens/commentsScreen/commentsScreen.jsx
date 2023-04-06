import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import defaultIMG from '../../images/defaultImg.png'


export const CommentsScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={defaultIMG} styles={styles.image} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        marginTop: 200
    }
});
