import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
import { DatePipe } from '@angular/common';
import { ChartSelectEvent } from 'ng2-google-charts';
import {IMyDpOptions} from 'mydatepicker';

// import { IMyDpOptions, IMyDateModel, IMyInputFieldChanged } from 'mydatepicker';

import { overviewService } from './overview.service';
import { Cluster1Model } from '../../types/cluster1';
import { Router } from '@angular/router';
// import { LoaderService } from '../../loader.service';
// import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
