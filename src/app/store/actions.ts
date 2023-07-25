import { createAction, props } from '@ngrx/store';

export const setSelectedLanguage = createAction('[Lang] Set selected language', props<{ language: string }>());
