import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { RootStackParamList } from '../../navigation/ProductsStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CameraType, Camera } from 'react-native-camera-kit';
import { useAppDispatch } from '../../hooks/hooks';
import { startCheckingExistence } from '../../store/products';


interface Props extends NativeStackScreenProps<RootStackParamList, 'CaptureScreen'> { }
export const CaptureScreen: FC<Props> = ({ navigation }) => {

  const [flag, setFlag] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleOnScan = (event: any) => {
    if (flag) return;
    dispatch(startCheckingExistence({
      navigation,
      code: event.nativeEvent.codeStringValue
    }));
    setFlag(true);
  }


  return (

    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        cameraType={CameraType.Back}
        flashMode={'auto'}
        focusMode={'on'}
        zoomMode={'on'}
        scanBarcode={true}
        onReadCode={(event: any) => handleOnScan(event)}
        showFrame={true}
        laserColor='red'
        frameColor='white'
      />
    </View>
  )

}

