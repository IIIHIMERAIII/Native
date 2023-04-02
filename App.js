import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback, 
  Keyboard
} from 'react-native';
import primaryBG from './images/primaryBG.webp';
import {RegistrationScreen} from './screens/registrationScreen/registrationScreen'
import { LoginScreen } from './screens/loginScreen/loginScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
        <ImageBackground source={primaryBG} style={styles.image}>
          <LoginScreen />
          {/* <RegistrationScreen /> */}
          <StatusBar style="auto" />
        </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});
