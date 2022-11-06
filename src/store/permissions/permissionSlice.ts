import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PermissionStatus } from 'react-native-permissions';


interface PermissionState {
    permissionStatus: Record<"android.permission.CAMERA" | "android.permission.WRITE_EXTERNAL_STORAGE", PermissionStatus>;

}
const initialState: PermissionState = {
    permissionStatus: {
        "android.permission.CAMERA": "unavailable",
        "android.permission.WRITE_EXTERNAL_STORAGE": "unavailable",
    },
};

export const permissionSlice = createSlice({
    name: 'permission',
    initialState: initialState,
    reducers: {
        setPermissions: (state: PermissionState, { payload }: PayloadAction<Record<"android.permission.CAMERA" | "android.permission.WRITE_EXTERNAL_STORAGE", PermissionStatus>>) => {
            state.permissionStatus = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setPermissions } = permissionSlice.actions;