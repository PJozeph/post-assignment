import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
    @Input() title: string;
    @Input() lead: string;
    @Input() imagePath: string;
    @Input() id: string;

    constructor(private router: Router) {}

    public onCardClick(): void {
        this.router.navigate(['post-content-view', this.id]);
    }
}
