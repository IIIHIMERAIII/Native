import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';
import { Input } from "../../components/input/input";
import { Button } from '../../components/button/button';

export const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
    

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
    } else {
      alert('Please enter all fields');
    }
  };


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
                <SafeAreaView
                    style={styles.container}
                >
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
                            <Text style={styles.subTitle}>Already have an account?</Text>
                        </View>
                        }
                    </KeyboardAvoidingView>
                </SafeAreaView>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 'auto',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        color: '#212121',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 92,
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
        marginBottom: 45
    }
});
