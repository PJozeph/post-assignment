import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, Observable } from 'rxjs';
import { Post, PostService } from 'src/app/shared/services/post.service';
import { selectSelectedLanguage } from 'src/app/store/selectors';

@Component({
    selector: 'app-post-list-page',
    templateUrl: './post-list-page.component.html',
    styleUrls: ['./post-list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListPageComponent {
    posts$: Observable<Post[]> = this.store.select(selectSelectedLanguage).pipe(mergeMap(language => this.postService.getPosts(language)));

    constructor(private postService: PostService, private store: Store) {}
}
