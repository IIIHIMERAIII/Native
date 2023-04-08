import {
    StyleSheet,
    TextInput,
    SafeAreaView,
    Image,
    View
} from 'react-native';
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useNavigation } from '@react-navigation/native';
import map from '../../images/map.png'
import { Button } from '../button/button';


export const AddPostForm = () => {
    const [location, setLocation] = useState(null);
    const navigation = useNavigation();

  useEffect(() => {
    (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);;
    })();
  }, []);
    
    

    function handlePress() {
        navigation.navigate('Posts');
        console.log(location)
    }
    
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Name'></TextInput>
            </View>      
            <View  style={styles.inputContainer}>
                <Image source={map} style={styles.icon} />
                <TextInput style={styles.input} placeholder='Location'></TextInput>
            </View>
            <Button
                title='Publish'
                onPress={handlePress}
            />  
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    wrapper: {
        marginBottom: 35,
        marginTop: 60,
        gap: 16,
    },
    input: {
        backgroundColor: 'transparent',
        padding: 16,
        height: 50,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
        width: 340
    },
    icon: {
        position: 'absolute'
    }
});