import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers';

export const appState = createFeatureSelector<State>('appState');

export const selectSelectedLanguage = createSelector(appState, (state: State) => state.selectedLanguage);
