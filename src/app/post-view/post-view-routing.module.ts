import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostViewPageComponent } from './page/post-view-page/post-view-page.component';
import { postResolverResolver } from './resolver/post-resolver.resolver';

const routes: Routes = [{ path: '', component: PostViewPageComponent, resolve: { post: postResolverResolver } }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PosViewRoutingModule {}
