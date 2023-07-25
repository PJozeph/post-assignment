import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostViewPageComponent } from './page/post-view-page/post-view-page.component';
import { PosViewRoutingModule } from './post-view-routing.module';

@NgModule({
    declarations: [PostViewPageComponent],
    imports: [CommonModule, PosViewRoutingModule],
})
export class PostViewModule {}
