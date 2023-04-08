import {
    StyleSheet,
    Image,
    View,
    KeyboardAvoidingView,
    Keyboard 
} from 'react-native';
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import grid from '../../images/grid.png';
import cross from '../../images/union.png';
import user from '../../images/user.png';
import { CreatePostsScreen } from '../createPostsScreen/createPostsScreen';
import { PostsScreen } from '../postsScreen/postsScreen';
import { ProfileScreen } from '../profileScreen/profileScreen';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
      <Tab.Navigator >
        <Tab.Screen name="Posts" component={PostsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={grid}
              style={{ width: 40, height: 40, marginTop: 20 }}
              />
          ),
          ...options.Posts
        }} />
        <Tab.Screen name="Create" component={CreatePostsScreen} options={{
          tabBarLabel: '',
          barStyle: { backgroundColor: "#FF6C00" }, 
          tabBarIcon: () => (
            <View style={styles.addBtn}>
              <Image
                source={cross}
                style={{ width: 13, height: 13 }}
              />
            </View >
          ),
        ...options.CreatePostsScreen
          }}
          />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
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
