import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CameraType, Camera } from 'react-native-camera-kit';
import { useAppDispatch } from '../../hooks/hooks';
import { startCheckingExistenceOrder } from '../../store/orders';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';


interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'CaptureScreenOrders'> { }
export const CaptureScreenOrders: FC<Props> = ({ navigation }) => {

  const [flag, setFlag] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleOnScan = (event: any) => {
    if (flag) return;
    dispatch(startCheckingExistenceOrder({
      navigation,
      SKU: event.nativeEvent.codeStringValue
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

