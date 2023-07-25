import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'post-list', pathMatch: 'full' },
    { path: 'post-list', loadChildren: () => import('./post-list/post-list.module').then(m => m.PostListModule) },
    { path: 'post-content-view/:id', loadChildren: () => import('./post-view/post-view.module').then(m => m.PostViewModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
