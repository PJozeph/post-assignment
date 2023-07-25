import { createReducer, on } from '@ngrx/store';
import { setSelectedLanguage } from './actions';

export interface State {
    selectedLanguage: string;
}

export const initialState: State = {
    selectedLanguage: 'en',
};

export const appReducer = createReducer(
    initialState,
    on(setSelectedLanguage, (state, { language }) => ({ ...state, selectedLanguage: language }))
);
