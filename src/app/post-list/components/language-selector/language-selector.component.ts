import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedLanguage } from 'src/app/store/actions';

interface Language {
    key: string;
    value: string;
}

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LanguageSelectorComponent {
    defaultValue = "en";

    languages: Language[] = [
        { key: 'en', value: 'English' },
        { key: 'hu', value: 'Hungarian' },
    ];

    constructor(private store: Store) {}

    public changeLang(lang: string) {
        this.store.dispatch(setSelectedLanguage({ language: lang }));
    }
}
