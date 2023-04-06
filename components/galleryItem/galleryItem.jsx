import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import defaultIMG from '../../images/defaultImg.png'


export const GalleryItem = () => {
    const navigation = useNavigation();
    
    function handlePress() {
        navigation.navigate('Comments');
    }

    return (
        <View style={styles.imgContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Image source={defaultIMG} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.imgTitle}>SomePhoto</Text>
            <Text style={styles.imgTitle}>SomeLocation</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    imgContainer: {
        marginBottom: 20
    },
    imgTitle: {
        color: '#212121',
        marginTop: 8
    }
});
