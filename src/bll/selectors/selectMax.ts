import {AppRootStateType} from '../store';

export const selectMax = (store: AppRootStateType): number => store.maxNumber.value;
