import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RegistrationScreen} from './screens/registrationScreen/registrationScreen'
import { LoginScreen } from './screens/loginScreen/loginScreen';
import { HomeScreen } from './screens/homeScreen/homeScreen';
import { CommentsScreen } from './screens/commentsScreen/commentsScreen';
import { MapScreen } from './screens/mapScreen/mapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false }}>
          <Stack.Screen name='SignIn' component={LoginScreen} options={{headerShown: false }}/>
          <Stack.Screen name='SignUp' component={RegistrationScreen} options={{headerShown: false }}/>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false }}/>
          <Stack.Screen name='Comments' component={CommentsScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
          <Stack.Screen name='Map' component={MapScreen} options={{headerShown: true, headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
};
