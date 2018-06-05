import { Component, OnInit } from '@angular/core';

import { FeedbckService } from './feedbck.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedList = [];
  searchFeed = [];
  count: number;
  constructor(private feed: FeedbckService) { }

  ngOnInit() {
    this.getFeedBacks();
  }

  getFeedBacks() {
    this.feed.getFeedbacks().then(data => {
      this.feedList = data.result;
      this.count = data.count;
      this.searchFeed = JSON.parse(JSON.stringify(data.result));
    });
  }

  searchTerm(type) {
    this.feedList = this.searchFeed;
    this.feedList = this.feedList.filter(response => {
      return (response.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.customerName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.customerEmail.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
    });
  }
}
