import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import grid from '../../images/grid.png';
import cross from '../../images/union.png';
import user from '../../images/user.png';
import { CreatePostsScreen } from '../../screens/createPostsScreen/createPostsScreen';
import { PostsScreen } from '../../screens/postsScreen/postsScreen';
import { ProfileScreen } from '../../screens/profileScreen/profileScreen';

const Tab = createBottomTabNavigator();

function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PostsScreen/>
    </View>
  );
};

function Create() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CreatePostsScreen/>
    </View>
  );
};

function Profile() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProfileScreen/>
    </View>
  );
};


export const TabBar = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Posts" component={Posts} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              source={grid}
              style={{ width: 40, height: 40, marginTop: 20 }}
            />
          ),
          ...options.Posts
        }} />
        <Tab.Screen name="Create" component={Create} options={{
          tabBarLabel: '',
          barStyle: { backgroundColor: "#FF6C00" },
          tabBarIcon: ({ focused }) => (
            <View style={styles.addBtn}>
              <Image
                source={cross}
                style={{ width: 13, height: 13 }}
              />
            </View>
          ),
          ...options.CreatePostsScreen
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={user}
              style={{ width: 40, height: 40, marginTop: 20 }}
            />
          ),
          ...options.Profile
        }} />
    </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    addBtn: {
      width: 70,
      height: 40,
      backgroundColor: "#FF6C00",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      marginTop: 20
    }
  });

  const options = ({
    Posts: {
      headerTitleAlign: 'center',
      title: 'Posts',
      headerStyle: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1
      }
    },
    CreatePostsScreen: {
      headerTitleAlign: 'center',
      title: 'Create Post',
      headerStyle: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1
      }
    },
    Profile: {
      headerTitleAlign: 'center',
      title: 'Profile',
      headerStyle: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1
      }
    },
});
