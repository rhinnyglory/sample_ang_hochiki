import { Component, OnInit } from '@angular/core';

import { FeedbckService } from './feedbck.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  showLoader: boolean;
  id: number;
  userName: string;
  email: string;
  mobile: string;
  createdOn; string;
  feedList = [];
  searchFeed = [];
  count: number;
  constructor(private feed: FeedbckService) { }

  ngOnInit() {
    this.getFeedBacks();
  }

  getFeedBacks() {
    this.showLoader = true;
    this.feed.getFeedbacks().then(data => {
      this.showLoader = false;
      this.feedList = data.result;
      this.count = data.count;
      this.searchFeed = JSON.parse(JSON.stringify(data.result));
    }).catch(err => {
      this.showLoader = false;
    });
  }

  searchTerm(type) {
    this.feedList = this.searchFeed;
    this.feedList = this.feedList.filter(response => {
      return (response.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.customerName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.customerEmail.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1)
        || (response.createdOn.toLowerCase().indexOf(type.toLowerCase()) !== -1);
    });
  }
}
