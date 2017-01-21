import { Component, OnInit } from '@angular/core';
import { Feed } from '../model/feed.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Array<Feed>;

  constructor() { }

  ngOnInit() {
    this.feeds = Feed.list();    
  }

}
