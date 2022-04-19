import {AppRootStateType} from '../store';

export const selectStartValue = (store: AppRootStateType): number => store.startNumber.value;
