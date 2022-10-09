import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { CameraScreen, CameraType, Camera } from 'react-native-camera-kit';
export const CaptureScreen = () => (
  <View style={
    {
      flex: 1,
    }
  }>
    <Camera
      style={{
        flex: 1,
        
      }}
      cameraType={CameraType.Back}
      flashMode={'auto'}
      focusMode={'on'}
      zoomMode={'on'}
      scanBarcode={true}
      onReadCode={(event: any) => console.log(
        event.nativeEvent
      )} 
    
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor='red' // (default red) optional, color of laser in scanner frame
      frameColor='white' // (default white) optional, color of border of scanner frame
    />

  </View>
)
