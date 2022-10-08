import { Dispatch } from 'redux';
import { Platform } from 'react-native';
import { PermissionStatus, check, request, openSettings, PERMISSIONS } from 'react-native-permissions';
import { setPermissions } from './permissionSlice';


export const startCheckingPermission = () => {
    return async (dispatch: Dispatch) => {
        let permissionStatus: PermissionStatus;
        permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
        dispatch(setPermissions(permissionStatus));
    };
};

export const startAskingPermission = () => {
    return async (dispatch: Dispatch) => {
        let permissionStatus: PermissionStatus;
        permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

        if (permissionStatus === "blocked") {
            openSettings();
        }
        dispatch(setPermissions(permissionStatus));
    };
};
