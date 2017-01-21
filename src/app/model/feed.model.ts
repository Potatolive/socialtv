import { FeedService } from './services/feed.service'

export enum FeedStatus {
    'SCHEDULED', 'STOPPED'
}

export enum FeedType {
  'FACEBOOK', 'TWITTER', 'NONE'
}

export class Feed {
  uid: String;
  feedName: String; 
  handle: String;
  feedType: FeedType;
  authentication: any;
  feedStatus: FeedStatus;
  hashTag: String;
  static list() : Array<Feed> {
    return FeedService.list();
  }

  // constructor(
  //   uid,
  //   feedName, 
  //   handle,
  //   feedType,
  //   authentication,
  //   feedStatus,
  //   hashTag,
  // ) {
  //   this.uid = uid;
  //   this.feedName = feedName;
  //   this.handle = handle;
  //   this.feedType = feedType;
  //   this.authentication = authentication;
  //   this.feedStatus = feedStatus;
  //   this.hashTag = hashTag;
  // }

  constructor(params: Feed) {
        // object.assign will overwrite defaults if params exist
        Object.assign(this, params)
    }

  get handleDescription(): String {
    if(this.feedType == FeedType.FACEBOOK) {
      return "Page";
    } else if(this.feedType == FeedType.TWITTER) {
      return "Handle";
    } else {
      return "Source";
    }
  }

  get isNewFeed(): boolean {
    return (this.feedType == FeedType.NONE);
  }
}