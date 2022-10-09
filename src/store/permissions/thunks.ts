import { Dispatch } from 'redux';
import { checkMultiple, requestMultiple, openSettings, PERMISSIONS } from 'react-native-permissions';
import { setPermissions } from './permissionSlice';


export const startCheckingPermission = () => {
    return async (dispatch: Dispatch) => {
        const permissionStatus = await checkMultiple([
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        ]);
        dispatch(setPermissions(permissionStatus));
    };
};

export const startAskingPermission = () => {
    return async (dispatch: Dispatch) => {

        let permissionStatus = await requestMultiple([
            PERMISSIONS.ANDROID.CAMERA, 
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        ]);

        if (permissionStatus[
            PERMISSIONS.ANDROID.CAMERA] === 'blocked' || 
            permissionStatus[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'blocked') {
            openSettings();
        }


        dispatch(setPermissions(permissionStatus));
    };
};
