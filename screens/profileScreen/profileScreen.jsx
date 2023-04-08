import {
    SafeAreaView,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Avatar } from '../../components/avatar/avatar';
import { GalleryItem } from '../../components/galleryItem/galleryItem';
import primaryBG from '../../images/primaryBG.webp';


export const ProfileScreen = () => {

    return (
             <ImageBackground source={primaryBG} style={styles.image}>
                <SafeAreaView
                    style={styles.container}
                    >
                <Avatar/>
                <KeyboardAvoidingView style={styles.profileWapper} behavior="padding">
                        <Text style={styles.title}>SomeUser</Text>
                    <ScrollView style={styles.galleryWrapper}> 
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem/>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        alignItems: 'center',
        marginTop: 200
    },
    title: {
        color: '#212121',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginBottom: 25,
        marginTop: 75
    },
    profileWapper: {
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },
    galleryWrapper: {
        paddingLeft: 16,
        paddingRight: 16,
        height: 400,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'flex-end'
    },
});
