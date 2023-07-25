import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs';
import { Post, PostService } from 'src/app/shared/services/post.service';
import { selectSelectedLanguage } from 'src/app/store/selectors';

export const postResolverResolver: ResolveFn<Post> = (
    route,
    state,
    postService: PostService = inject(PostService),
    store: Store = inject(Store)
) => {
    return store.select(selectSelectedLanguage).pipe(mergeMap(language => postService.getPostById(route.paramMap.get('id'), language)));
};
