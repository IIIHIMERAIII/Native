import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Input } from "../../components/input/input";
import { Button } from '../../components/button/button';
import primaryBG from '../../images/primaryBG.webp';

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
    const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('SignUp');
  }



useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsVisible(true);
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsVisible(false);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

    const handleSubmit = () => {
    if (email && password) {
        alert('Response successful')
        console.log(`Email: ${email}\nPassword: ${password}`);
        navigation.navigate('Home')
    } else {
      alert('Please enter all fields');
    }
  };

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <ImageBackground source={primaryBG} style={styles.image}>
                <SafeAreaView
                    style={styles.container}
                >
                    <KeyboardAvoidingView style={styles.formwWapper}>
                    <View style={styles.inputWrapper}> 
                        <Text style={styles.title}>Sign in</Text>
                        <Input
                            placeholder="E-mail"
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input
                            placeholder="Password"
                            onChangeText={setPassword}
                            value={password}
                        />
                        </View>
                        {!keyboardIsVisible && <View style={styles.buttonWrapper}>
                            <Button
                                onPress={handleSubmit}
                                title='Sign in'
                            >
                                <Text>Sign In</Text>
                            </Button>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.subTitle}>Don't have an account? Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
};




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        color: '#212121',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 32,
    },
    formwWapper: {
        marginBottom: 32
    },
    inputWrapper: {
        gap: 16,
        paddingLeft: 16,
        paddingRight:16
    },
    buttonWrapper: {
        marginTop: 43,
        paddingLeft: 16,
        paddingRight:16
    },
    subTitle: {
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center',
        marginTop: 16,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'flex-end'
  },
});
