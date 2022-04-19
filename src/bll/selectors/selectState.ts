import {AppRootStateType} from '../store';

export const selectState = (store: AppRootStateType): boolean => store.state.value;
