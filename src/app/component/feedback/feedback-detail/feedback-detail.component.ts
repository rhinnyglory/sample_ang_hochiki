import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FeedbckService } from './../feedbck.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit {
  feedDet = {};
  constructor(private route: ActivatedRoute, private feed: FeedbckService) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.feed.getFeedDetail(userId).then(res => {
      this.feedDet = res.result;
    });
  }

}
