import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/shared/services/post.service';

@Component({
    selector: 'app-post-view-page',
    templateUrl: './post-view-page.component.html',
    styleUrls: ['./post-view-page.component.scss'],
})
export class PostViewPageComponent {
    post$: Observable<Post> = this.activatedRoute.data.pipe(map(({ post }) => post));

    constructor(private activatedRoute: ActivatedRoute) {}
}
