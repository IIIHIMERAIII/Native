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
    
    function handlePress(name, location) {
        navigation.navigate(name, {location});
    }

    return (
        <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => { handlePress('Comments') }}>
                <Image source={defaultIMG} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.imgTitle}>SomePhoto</Text>
            <TouchableOpacity onPress={() => { handlePress('Map', {  "accuracy": 20,
                "altitude": 322,
                "altitudeAccuracy": 1.7209882736206055,
                "heading": 0,
                "latitude": 49.6368326,
                "longitude": 24.2907084,
                "speed": 0,
            })
            }}>
                <Text style={styles.imgTitle}>SomeLocation</Text>
            </TouchableOpacity>
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
