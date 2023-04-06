import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Keyboard,
    KeyboardAvoidingView,
    ImageBackground,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { Input } from "../../components/input/input";
import { Button } from '../../components/button/button';
import { Avatar } from '../../components/avatar/avatar';
import primaryBG from '../../images/primaryBG.webp';

export const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
    const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('SignIn');
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
    if (name && email && password) {
        alert('Registration successful')
        console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
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
                <Avatar/>
                <KeyboardAvoidingView style={styles.formwWapper} behavior="padding">
                    <View style={styles.inputWrapper}> 
                        <Text style={styles.title}>Registration</Text>
                        <Input
                            placeholder="Name"
                            onChangeText={setName}
                            value={name}
                        />
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
                                title='Register'
                            />
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.subTitle}>Already have an account? Sign in</Text>
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
        alignItems: 'center',

    },
    title: {
        color: '#212121',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginBottom: 25,
        marginTop: 75
    },
    formwWapper: {
        marginBottom: 10,
        width: '100%'
    },
    inputWrapper: {
        gap: 16,
        paddingLeft: 16,
        paddingRight:16
    },
    buttonWrapper: {
        marginTop: 40,
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
