import React from "react"
import { Button, View } from 'react-native';
import {launchCamera} from 'react-native-image-picker'

function cameraAction () {
    launchCamera({mediaType:'photo'},console.log);
}


export default function CameraLauncher(){

    return (
        <View>
            <Button title="Press me!" onPress={cameraAction}/>
        </View>
    );

}