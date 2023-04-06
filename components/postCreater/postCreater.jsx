import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import defaultIMG from '../../images/defaultImg.png'
import { AddIMGButton } from '../addIMGButton/addIMGButton';
import { AddPostForm } from '../addPostForm/addPostForm';
import { Button } from '../button/button';


export const PostCreater = () => {
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
                <Image source={defaultIMG} />
                <AddIMGButton />
                <Text style={styles.unploadTitle}>Upload photo</Text>
        </View>
            <AddPostForm />
            <Button
                title='Publish'
            />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    imageContainer: {
        position: 'relative',
        width: 340,
        height: 240
    },
    unploadTitle: {
        marginTop: 10,
        fontSize: 16,
        color: '#BDBDBD',
    },
});
