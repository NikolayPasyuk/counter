import {AppRootStateType} from '../store';

export const selectCount = (store: AppRootStateType): number => store.counter.value;
