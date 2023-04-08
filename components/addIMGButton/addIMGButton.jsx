import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import camera from '../../images/camera.png'
import { FontAwesome } from "@expo/vector-icons";

export const AddIMGButton = () => {    
    const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    
    
    return (
    <>
      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <View style={styles.cameraContainer}>
        </View>
      </Camera>
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Image source={camera} style={styles.img} />
      </TouchableOpacity>
    </>
    )
};


const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        padding: 18,
        position: 'absolute',
        left: (340 - 60) / 2,
        top: (240 - 60) / 2,
    },
    img: {
        width: 24,
        height: 24,
    },
    camera: {
        width: 340,
        height: 240
    },
});
