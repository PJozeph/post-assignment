import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Post {
    title: string;
    lead: string;
    content: string;
    imagePath: string;
    id?: string;
}

export interface PostResponse {
    data: PostData[];
}

export interface PostData {
    title?: { [key: string]: string };
    lead?: { [key: string]: string };
    content?: { [key: string]: string };
    lead_image?: string;
    id?: string;
}

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private httpClient: HttpClient) {}

    public getPosts(lang: string): Observable<Post[]> {
        return this.httpClient.get<PostResponse>('https://api.ots.group/content/posts').pipe(
            map(response => {
                return response.data.map(data => ({
                    title: data.title?.[lang] ?? 'N/A',
                    lead: data.lead?.[lang] ?? 'N/A',
                    content: data.content?.[lang] ?? 'N/A',
                    imagePath: `https://api.ots.group/${data.lead_image['path']}`,
                    id: data['category']['id'],
                }));
            })
        );
    }

    public getPostById(id: string, lang: string): Observable<Post> {
        return this.httpClient.get<Post>(`https://api.ots.group/content/posts-of-category/${id}`).pipe(
            map(data => {
                console.log(data['data']);
                return {
                    title: data['data'][0].title?.[lang] ?? 'N/A',
                    lead: data['data'][0].lead?.[lang] ?? 'N/A',
                    content: data['data'][0].content?.[lang] ?? 'N/A',
                    imagePath: `https://api.ots.group/${data['data'][0].lead_image['path']}`,
                };
            })
        );
    }

}
