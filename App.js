import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, ImageBackground } from 'react-native';
import primaryBG from './images/primaryBG.webp';
import {RegistrationScreen} from './screens/registrationScreen/registrationScreen'
import { LoginScreen } from './screens/loginScreen/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={primaryBG} style={styles.image}>
        <LoginScreen/>
        {/* <RegistrationScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});
