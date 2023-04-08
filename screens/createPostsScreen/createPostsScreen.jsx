import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { PostCreater } from '../../components/postCreater/postCreater';

export const CreatePostsScreen = () => {
    return (
        <View style={styles.container}>
            <PostCreater/>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
});
