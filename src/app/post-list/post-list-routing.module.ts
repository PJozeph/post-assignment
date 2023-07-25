import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from './page/post-list-page/post-list-page.component';

const routes: Routes = [{ path: '', component: PostListPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostListRoutingModule {}
