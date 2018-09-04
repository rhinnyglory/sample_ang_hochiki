import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FeedbckService } from './../feedbck.service';
import { Feedack } from './../../../types/feedback';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit {
  feedDet = {} as Feedack;
  showLoader: boolean;
  constructor(private route: ActivatedRoute, private feed: FeedbckService) { }

  ngOnInit() {
    this.showLoader = true;
    const userId = this.route.snapshot.params['id'];
    this.feed.getFeedDetail(userId).then(res => {
      this.feedDet = res.result;
      this.showLoader = false;
    }).catch(err => {
      this.showLoader = false;
    });
  }

}
