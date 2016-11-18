import { Post } from '../post.model'

export class PostService {
static list() : Array<Post> {
    return [
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: 'Adv happy bday', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: 'Adv happy bday Adv happy bday Adv happy bdayAdv happy bdayAdv happy bday',
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/000071a3-fdac-44d3-ac79-14cb0874e7a3.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/0000a021-dfa4-4713-8d44-54d9549f117b.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/0001a7c7-d738-4fbc-95bd-3222801e71d5.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/0001d347-de23-4d7c-adc1-3edf6a68e2ae.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/0001a7c7-d738-4fbc-95bd-3222801e71d5.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
        },
        {
            profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
            profileName: 'Ganesan', 
            postedOn: new Date('01-02-2016'), 
            postText: '', 
            postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
        },
        {
                profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
                profileName: 'Ganesan', 
                postedOn: new Date('01-02-2016'), 
                postText: '', 
                postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
            },
            {
                profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
                profileName: 'Ganesan', 
                postedOn: new Date('01-02-2016'), 
                postText: '', 
                postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
            },
            {
                profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12195855_1653826414902030_3299510735361493963_n.jpg?oh=51f721da0a58e627e2753eb6ed4f25fd&oe=58628320', 
                profileName: 'Ganesan', 
                postedOn: new Date('01-02-2016'), 
                postText: '', 
                postImage: 'https://s3-ap-southeast-1.amazonaws.com/plivestore/mypaatu/66dca211-16bf-4ae6-b192-5d035dd41110.jpg'
            }
        ];
    }
} 