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
 // public dropdown = [];
 private startDate = '';
 private endDate = '';
 private days = '';
 private beginDateFormat = '';
 private endDateFormat = '';
 private dimensions = 'ga:channelGrouping , ga:date';
 public sessionTotal = 0;
 public usersTotal = 0;
 public durationTotal = 0;
 public BounceTotal = 0;
 public pageViewTotal = 0;
 public pagevssessionsTotal = '';
 public pagevssessionsTotalRound = 0;
 public persessionsTotal = '';
 public bouncesTotal = '';
 public newUsers = 0;
 public displayBounce = 0;
 public bouncesTotalround = 0;
 public totalSessionUsersRound = 0;
 public totalSessionUsers = '';
 private IntialDates = '';
 private start = '';
 private selectedIntialDates = '';
 private end = '';
 private dates: Cluster1Model[];
 private dataTable = [];
 private day = [];
 private previousDays = [];
 private metrics = [];
 private pmetrics = [];
 private hoursTocal;
 private secondsTocal;
 private minutesTocal;
 public buttonDisabled: boolean;
 name: string;
 list: any;
 selected: any;
 private myForm: FormGroup;
 public lineChartData: any = {
   chartType: '',
   dataTable: [],
   options: {
     scales: {
       xAxes: [{
         gridLines: {
           color: 'white',
           zeroLineColor: 'white', // hide the zero line by making it white
           zeroLineWidth: 0,
           opacity: 0
         },
         scaleLabel: {
           display: false
         }
       }],
     },
   }
 };




 public lineChartDatasessions: any = {
   chartType: '',
   dataTable: [],
   options: {
     scales: {
       xAxes: [{
         gridLines: {
           color: 'white',
           zeroLineColor: 'white', // hide the zero line by making it white
           zeroLineWidth: 0,
           opacity: 0
         },
         scaleLabel: {
           display: false
         }
       }],
     },
   }
 };


 public lineChartDatausers: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 public lineChartDatadurations: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 public lineChartDatabounceRate: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 public lineChartDatapageView: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 public lineChartDataPageVsSessions: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 public lineChartDataPerSessions: any = {
   chartType: '',
   dataTable: [],
   options: {}
 };
 myDateRangePickerOptions: IMyDrpOptions = {
   // other options...
   // dateFormat: 'yyyy-mm-dd',
   dateFormat: 'dd mmm yyyy',
   // dateFormat: ' DD YYYY'MMM,
  disableSince: { year: new Date().getFullYear(), month: (new Date().getMonth() + 1), day: (new Date().getDate() + 1) },
   // disableSince: { day: (new Date().getDate() + 1), month: (new Date().getMonth() + 1), year: new Date().getFullYear() },

 };
 private model: any = {
   beginDate: this.startDate,
   endDate: this.endDate
 };
 setDateRange(): void {
   const date = new Date();
   this.myForm.patchValue({myDateRange: {
       beginDate: {
           year: date.getFullYear(),
           month: date.getMonth() + 1,
           day: date.getDate()
       },
       endDate: {
           year: date.getFullYear(),
           month: date.getMonth() + 1,
           day: date.getDate()
       }
   }});
 }
 constructor(private router: Router,
   private cluster1Service: overviewService, private formBuilder: FormBuilder) {
     this.buttonDisabled = false;
     // this.list = ['ga:date', 'ga:week', 'ga:month'];
      }
   //    select(item) {
   //     this.selected = item;
   // }
   // isActive(item) {
   //     return this.selected === item;
   // }
 ngOnInit() {
   document.title = 'Audience Overview - Firestrome';
  //  this.loaderService.display(true);
  //  this.loaderService.display(false);
   this.myForm = this.formBuilder.group({
     myDateRange: ['', Validators.required]
 });
   const days = 7;
   const date = new Date();
   const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
   this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
   this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate()) < 10 ? '0' : '') + (new Date().getDate());
   const datePipeS = new DatePipe('en-US');
   this.startDate = datePipeS.transform( this.startDate, 'dd MMM yyyy');
   this.endDate = datePipeS.transform(this.endDate, 'dd MMM yyyy');
   this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
   this.finalDataToSend();

 }

 dropdown= [ 'Today', 'Yesterday', 'Last week', 'Last Month', 'Last 7 days', 'Last 30 days'];
 //  public optionSelected: any;
   onOptionSelected(event) {
    console.log(event);
    if (event === 'Last 7 days') {
      console.log('7days hi');
     const days = 7;
     const date = new Date();
     const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
     this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
     this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate() - 1) < 10 ? '0' : '') + (new Date().getDate() - 1);
     const datePipeS = new DatePipe('en-US');
     this.startDate = datePipeS.transform( this.startDate, 'dd MMM yyyy');
     this.endDate = datePipeS.transform(this.endDate, 'dd MMM yyyy');
     this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
    } else if (event === 'Last 30 days') {
     console.log('30 days hi');
     const days = 30;
     const date = new Date();
     const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
     this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
     this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate() - 1) < 10 ? '0' : '') + (new Date().getDate() - 1);
     const datePipeS = new DatePipe('en-US');
     this.startDate = datePipeS.transform( this.startDate, 'dd MMM yyyy');
     this.endDate = datePipeS.transform(this.endDate, 'dd MMM yyyy');
     this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
   console.log(this.selectedIntialDates);
   } else if (event === 'Last Month') {
     const date = new Date();
     const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
     const lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
     const datePipeS = new DatePipe('en-US');
     this.startDate = datePipeS.transform( firstDay, 'dd MMM yyyy');
     this.endDate = datePipeS.transform(lastDay, 'dd MMM yyyy');
     this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
     // alert(firstDay+"==="+lastDay);
   } else if (event === 'Last week') {
     const first = new Date().getDate() - new Date().getDay() - 7;
     const last = first + 6; // last day is the first day + 6
     const startDateOfWeek = new Date(new Date().setDate(first));
     const endDateOfWeek = new Date(new Date().setDate(last));
     const datePipeS = new DatePipe('en-US');
     this.startDate = datePipeS.transform(startDateOfWeek, 'dd MMM yyyy');
     this.endDate = datePipeS.transform(endDateOfWeek, 'dd MMM yyyy');
     this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
         }else if (event === 'Yesterday') {
           // this.buttonDisabled = true;
              const days = 1;
     const date = new Date();
     const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
     this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
     this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate() - 1) < 10 ? '0' : '') + (new Date().getDate() - 1);
     const datePipeS = new DatePipe('en-US');
     this.startDate = datePipeS.transform( this.startDate, 'dd MMM yyyy');
     this.endDate = datePipeS.transform(this.endDate, 'dd MMM yyyy');
     this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
               }else {
                 // this.buttonDisabled = true;
                 const days = 0;
                 const date = new Date();
                 const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
                 this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
                 this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate()) < 10 ? '0' : '') + (new Date().getDate());
                 const datePipeS = new DatePipe('en-US');
                 this.startDate = datePipeS.transform( this.startDate, 'dd MMM yyyy');
                 this.endDate = datePipeS.transform(this.endDate, 'dd MMM yyyy');
                 this.selectedIntialDates = this.startDate + '' + '' + '-' + '' + '' + this.endDate;
               }
               this.finalDataToSend();
   }

 clearDateRange(): void {
   this.startDate = '';
   this.endDate = '';
 }


 gettheDate(date) {
 const monthNames = [ 'Jan', 'Feb' , 'Mar',  'Apr',  'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];
   const year = date.substring(0, 4);
   const month = date.substring(4, 6);
   const dates = date.substring(6, 8);
   return dates + '-' + monthNames[month < 10 ? (month.substring(1, 2) - 1) : month - 1];

 }


 public showdimension(dimen) {
   this.dimensions = dimen;
   this.finalDataToSend();
 }
 onDateRangeChanged(event: IMyDateRangeModel) {
   // console.log(event, 'tocheckDate');
   if (event.formatted !== '') {
   // const datePipe = new DatePipe('en-US');
   // this.startDate = datePipe.transform(event.beginJsDate, 'dd MMM yyyy');
   // this.endDate = datePipe.transform(event.endJsDate, 'dd MMM yyyy');
   const newDate = new Date(this.endDate);
   if (event.beginJsDate <= newDate && event.endJsDate >= newDate) {
     this.finalDataToSend();
       }else {
         this.onDateSelected(event);
   }
       }else {
       }
 }
 onDateSelected(dates) {
   if (dates.type === 1) {
     this.startDate = dates.formatted;
   } else {
     this.endDate = dates.formatted;
   }
 }



   changeTheSecondsToDate(seconddata) {
   const sec_num = parseFloat(seconddata);
   this.hoursTocal = Math.floor(sec_num / 3600);
   this.minutesTocal = Math.floor((sec_num - (this.hoursTocal * 3600)) / 60);
   this.secondsTocal = sec_num - (this.hoursTocal * 3600) - (this.minutesTocal * 60);
   if (this.hoursTocal < 10) {
     this.hoursTocal = '0' + this.hoursTocal;
   }
   if (this.minutesTocal < 10) {
     this.minutesTocal = '0' + this.minutesTocal;
   }
   if (this.secondsTocal < 10) {
     this.secondsTocal = '0' + this.secondsTocal;
   }
   return this.hoursTocal + ':' + this.minutesTocal + ':' + parseInt(this.secondsTocal, 10);
 }

 finalDataToSend() {
   const completeDate = { startDate: '', endDate: '', dimensions: '' };
   completeDate.startDate = new Date(this.startDate).getFullYear() + '-'  +((new Date(this.startDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(this.startDate).getMonth() + 1) + '-' + ((new Date(this.startDate).getDate()) < 10 ? '0' : '') + (new Date(this.startDate).getDate());
   completeDate.endDate = new Date(this.endDate).getFullYear() + '-'  +((new Date(this.endDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(this.endDate).getMonth() + 1) + '-' + ((new Date(this.endDate).getDate()) < 10 ? '0' : '') + (new Date(this.endDate).getDate());
   completeDate.dimensions = this.dimensions;
  if (this.startDate !== '' && this.endDate !== '' && this.dimensions !== '' && completeDate.endDate  >= completeDate.startDate) {
   //  console.log(this.startDate , this.endDate , 'forcjjcjcj', new Date(this.startDate).getMonth() );
    //  this.loaderService.display(true);
     this.cluster1Service.createGraph(completeDate)
      .then(response => {
        console.log(response);
        //  this.loaderService.display(false);
        if (response.data === '[]' && response.data.length === 0) {
          console.log('No data found');
        }else {
         this.dataTable = response;
         this.sessionTotal = 0;
         this.pageViewTotal = 0;
         this.newUsers = 0;
         this.usersTotal = 0;
         this.persessionsTotal = '';
         this.BounceTotal = 0;
         this.bouncesTotal = '';
         this.bouncesTotalround = 0;
         this.totalSessionUsers = '';
         this.totalSessionUsersRound = 0;
         this.pagevssessionsTotalRound = 0;
         this.durationTotal = 0;
         const table = [];
         const sessions = [];
         const users = [];
         const durations = [];
         const bouncerate = [];
         const pageview = [];
         const pagevssessions = [];
         const persessions = [];
         table.push(['date', 'users']);
         sessions.push(['week', 'sessions']);
         users.push(['week', 'users']);
         durations.push(['week', 'durations']);
         bouncerate.push(['week', 'bouncerate']);
         pageview.push(['week', 'pageview']);
         pagevssessions.push(['week', 'pagevssessions']);
         persessions.push(['week', 'persessions']);
         this.dataTable.forEach((item, index) => {
           this.day = item.dimensions;
           this.metrics = item.metrics;
           this.sessionTotal += this.metrics[0]['ga:sessions'];
           this.usersTotal += this.metrics[0]['ga:users'];
           this.durationTotal += this.metrics[0]['ga:sessionDuration'];
           this.BounceTotal += this.metrics[0]['ga:bounces'];
           this.pageViewTotal += this.metrics[0]['ga:pageviews'];
           this.newUsers += this.metrics[0]['ga:newUsers'];
           if (this.dimensions === 'ga:date') {
             table.push([this.gettheDate(this.day[0]['ga:date']), this.metrics[0]['ga:users']]);
           } else {
             table.push([this.day[0]['ga:date'], this.metrics[0]['ga:users']]);
           }
           sessions.push([this.day[0][''], this.metrics[0]['ga:sessions']]);
           users.push([this.day[0][''], this.metrics[0]['ga:users']]);
           durations.push([this.day[0][''], this.metrics[0]['ga:avgSessionDuration']]);
           bouncerate.push([this.day[0][''], this.metrics[0]['ga:bounceRate']]);
           pageview.push([this.day[0][''], this.metrics[0]['ga:pageviews']]);
           pagevssessions.push([this.day[0][''], this.metrics[0]['ga:pageviewsPerSession']]);
           persessions.push([this.day[0][''], this.metrics[0]['ga:percentNewSessions']]);
         });
         this.pagevssessionsTotal = ((this.pageViewTotal / this.sessionTotal)).toFixed(2);
         this.pagevssessionsTotalRound = parseFloat(this.pagevssessionsTotal);
         this.persessionsTotal = ((this.newUsers / this.sessionTotal) * 100).toFixed(2) ;
         this.bouncesTotal = ((this.BounceTotal / this.sessionTotal) * 100).toFixed(2);
         this.bouncesTotalround = parseInt('this.bouncesTotal', 10);
         this.totalSessionUsers = JSON.stringify((this.durationTotal / this.sessionTotal));
         this.totalSessionUsers = this.changeTheSecondsToDate(this.totalSessionUsers);
         this.lineChartData = {
           chartType: 'AreaChart',
           dataTable: table,
           // options: { title: '' }
         };
         this.lineChartDatasessions = {
           chartType: 'AreaChart',
           dataTable: sessions,
           // options: { title: 'sessions' }
         };
         this.lineChartDatausers = {
           chartType: 'AreaChart',
           dataTable: users,
           // options: { title: 'users' }
         };
         this.lineChartDatadurations = {
           chartType: 'AreaChart',
           dataTable: durations,
           // options: { title: 'Avg sessions duration' }
         };
         this.lineChartDatabounceRate = {
           chartType: 'AreaChart',
           dataTable: bouncerate,
           // options: { title: 'bounce rate' }
         };
         this.lineChartDatapageView = {
           chartType: 'AreaChart',
           dataTable: pageview,
           // options: { title: 'page view' }
         };
         this.lineChartDataPageVsSessions = {
           chartType: 'AreaChart',
           dataTable: pagevssessions,
           // options: { title: 'page/session' }
         };
         this.lineChartDataPerSessions = {
           chartType: 'AreaChart',
           dataTable: persessions,
           // options: { title: '% new users' }
         };
        }
       });
   }
 }


}
