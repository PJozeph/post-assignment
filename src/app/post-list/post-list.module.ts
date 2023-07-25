import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListPageComponent } from './page/post-list-page/post-list-page.component';
import { PostListRoutingModule } from './post-list-routing.module';

@NgModule({
    declarations: [PostCardComponent, LanguageSelectorComponent, PostListPageComponent],
    imports: [CommonModule, MatCardModule, MatSelectModule, PostListRoutingModule, MatButtonModule, RouterModule],
})
export class PostListModule {}
