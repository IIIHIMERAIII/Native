import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import camera from '../../images/camera.png'

export const AddIMGButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={camera} style={styles.img}></Image>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
     button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        padding: 18,
        position: 'absolute',
        left: (340 - 60) / 2,
        top: (240 - 60) / 2,
    },
    img: {
        width: 24,
        height: 24,
    }
});
