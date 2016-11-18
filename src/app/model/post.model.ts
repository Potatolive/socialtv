import { PostService } from './services/post.service'

export class Post {
    profileName: string;
    profileImage: string;
    postImage: string;
    postText: string;
    postedOn: Date;

    static list() : Array<Post> {
        return PostService.list();
    }
}