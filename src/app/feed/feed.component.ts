import { Component, OnInit, Input } from '@angular/core';
import { Feed, FeedStatus, FeedType } from '../model/feed.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  feedTypes: Array<string> = ['FACEBOOK', 'TWITTER'];
  constructor() { }

  ngOnInit() {
  }

}
