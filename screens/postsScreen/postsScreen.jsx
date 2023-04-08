import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GalleryItem } from '../../components/galleryItem/galleryItem';


export const PostsScreen = () => {
  const navigation = useNavigation();
  
  function handlePress() {
    navigation.navigate('Profile');
  }
  
  return (
      <View style={styles.container}>
          <View style={styles.postsWrapper}>
              <View style={styles.userWrapper}>
                  <TouchableOpacity onPress={handlePress}>
                    <View style={styles.user} />
                  </TouchableOpacity>
                  <Text style={styles.userInfo}>Some User{'\n'}SomeEmail@gmail.com</Text>
              </View>
              <ScrollView
                    style={styles.galleryWrapper}
                    >
                < GalleryItem />
                < GalleryItem />
                < GalleryItem />
              </ScrollView>
          </View>
      </View>
    )
};

const styles = StyleSheet.create({
  galleryWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%'
  },
  headerWrapper: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    padding: 15
  },
  postsWrapper: {
    padding: 16
  },
  userWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    display: 'flex',
    alignItems: 'center'
  },
  user: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 10
  }
});

