import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import { DatePipe } from '@angular/common';
import { ChartSelectEvent } from 'ng2-google-charts';
import { IMyDpOptions } from 'mydatepicker';
import { DataTableResource } from 'angular-4-data-table';

// import { IMyDpOptions, IMyDateModel, IMyInputFieldChanged } from 'mydatepicker';

import { overviewService } from './overview.service';
import { Cluster1Model } from '../../types/cluster1';
import { Router } from '@angular/router';
// import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment'; // add this 1 of 4
declare var $: any;
// import 'jquery-daterangepicker/lib/dist/daterangepicker.min.css';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @ViewChild('cchart') cchart;
  startDate = moment().subtract(7, 'days').format('MMMM D, YYYY');
  endDate = moment().subtract(1, 'days').format('MMMM D, YYYY');
  days = '';
  beginDateFormat = '';
  endDateFormat = '';
  showLoader = false;
  dimensions = 'ga:date';
  sessionTotal = 0;
  usersTotal = 0;
  durationTotal = 0;
  BounceTotal = 0;
  pageViewTotal = 0;
  sessionperUser = 0;
  avgSessDuration = 0;
  pagevssessionsTotal = '';
  pagevssessionsTotalRound = 0;
  persessionsTotal = '';
  bouncesTotal = '';
  newUsers = 0;
  displayBounce = 0;
  bouncesTotalround = 0;
  totalSessionUsersRound = 0;
  itemCount = 0;
  totalSessionUsers = '';
  IntialDates = '';
  start = '';
  selectedIntialDates = '';
  end = '';
  dates: Cluster1Model[];
  dataTable = [];
  items = [];
  day = [];
  previousDays = [];
  metrics = [];
  pmetrics = [];
  hoursTocal;
  secondsTocal;
  minutesTocal;
  session = 0;
  user = 0;
  duration = 0;
  Bounce = 0;
  pageView = 0;
  newUser = 0;
  perSessionUser = 0;
  AvgSessDuration = 0;
  pagevssessions = 0;
  currentTab: any = '';
  legend1: any = '';
  // ate itemResource = '';
  currentTab2: any = '';
  legend2: any = '';
  currentTabcopy: any = '';
  currentTab2copy: any = '';
  firstMetric: any;
  buttonDisabled: boolean;
  itemResource = new DataTableResource(this.items);
  page: any;
  // ate container: null;
  // ate numberOfMonths: 3
  // ate datepickerShowing: true;

  // private defaultDate: '-1D';


  // private defaultDateRange: 'LAST_7_DAYS';
  // private maxDate: '-1D';

  // private minDate: new Date(2011, 0, 1);

  // test: false,

  // today: null
  name: string;
  list: any;
  selected: any;
  myForm: FormGroup;
  lineChartData: any = {
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




  lineChartDatasessions: any = {
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


  lineChartDatausers: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  lineChartDatadurations: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  lineChartDatabounceRate: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  lineChartDatapageView: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  lineChartDataPageVsSessions: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  lineChartDataPerSessions: any = {
    chartType: '',
    dataTable: [],
    options: {}
  };
  key = 'name';
  reverse = false;
  matrics = [{ id: 'ga:sessions', value: 'Sessions' },
  { id: 'ga:bounceRate', value: 'Bounce Rate' },
  { id: 'ga:users', value: 'Users' },
  { id: 'ga:pageViews', value: 'Pageviews' }];
  matrics2 = [{ id: 'ga:sessions', value: 'Sessions' },
  { id: 'ga:bounceRate', value: 'Bounce Rate' },
  { id: 'ga:users', value: 'Users' },
  { id: 'ga:pageViews', value: 'Pageviews' }];
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private router: Router,
    private cluster1Service: overviewService, private formBuilder: FormBuilder) {
    this.buttonDisabled = false;
  }

  ngOnInit() {
    document.title = 'Audience Overview - Firestrome';
    // this.myForm = this.formBuilder.group({
    //   myDateRange: ['', Validators.required]
    // });
    const vm = this;

    $(function () {

      const start = moment().subtract(7, 'days');
      const end = moment().subtract(1, 'days');
      // vm.startDate = start.format('MMM D, YYYY');
      // vm.endDate = end.format('MMM D, YYYY');
      function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }
      $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left',
        alwaysShowCalendars: true,
        maxDate: moment(),
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);
      cb(start, end);
    });
    $('#reportrange').on('apply.daterangepicker', function (ev, picker) {
      vm.startDate = picker.startDate.format('MMM D, YYYY');
      vm.endDate = picker.endDate.format('MMM D, YYYY');
      vm.finalDataToSend();
      vm.listOfOverview();
    });

    // const days = 7;
    // const date = new Date();
    // const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    // this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-'
    // + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
    // this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) +
    //  '-' + ((new Date().getDate()) < 10 ? '0' : '') + (new Date().getDate());
    // const datePipeS = new DatePipe('en-US');
    // this.startDate = datePipeS.transform(this.startDate, 'MMM dd, yyyy');
    // this.endDate = datePipeS.transform(this.endDate, 'MMM dd, yyyy');
    // this.selectedIntialDates = this.startDate + ' ' + '' + '-' + '' + ' ' + this.endDate;
    this.finalDataToSend();
    this.listOfOverview();
  }





  gettheDate(date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const dates = date.substring(6, 8);
    return monthNames[month < 10 ? (month.substring(1, 2) - 1) : month - 1] + ' ' + dates;

  }


  public showdimension(dimen) {
    this.dimensions = dimen;
    this.finalDataToSend();
    this.listOfOverview();
  }

  onDateSelected(dates) {
    if (dates.type === 1) {
      this.startDate = dates.formatted;
    } else {
      this.endDate = dates.formatted;
    }
  }

  getDetailsfirst(event: any) {
    this.currentTab = event;
    const tables = [];

    if (this.currentTab2 !== 'Select a metrics') {
      if (event === '(ga:sessionDuration/ga:sessions)') {
        tables.push(['date', 'Avg. Session Duration', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:bounceRate') {
        this.legend1 = 'Bounce Rate',
          tables.push(['date', 'Bounce Rate', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (event === 'ga:pageViews') {
        this.legend1 = 'pageviews',
          tables.push(['date', 'pageviews', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:sessions') {
        this.legend1 = 'Sessions',
          tables.push(['date', 'Sessions', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:users') {
        this.legend1 = 'Users',
          tables.push(['date', 'Users', this.getTheCurrentTab2(this.currentTab2)]);
      }
    } else {
      if (event === '(ga:sessionDuration/ga:sessions)') {
        tables.push(['date', 'Avg. Session Duration']);
      } else if (event === 'ga:bounceRate') {
        this.legend1 = 'Bounce Rate';
        tables.push(['date', 'Bounce Rate']);
      } else if (event === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (event === 'ga:pageViews') {
        this.legend1 = 'pageviews';
        tables.push(['date', 'pageviews']);
      } else if (event === 'ga:sessions') {
        this.legend1 = 'Sessions';
        tables.push(['date', 'Sessions']);
      } else if (event === 'ga:users') {
        this.legend1 = 'Users';
        tables.push(['date', 'Users']);
      }
    }

    this.dataTable.forEach((item, index) => {
      this.day = item.dimensions;
      this.metrics = item.metrics;
      if (this.currentTab2 !== 'Select a metrics') {
        if (this.dimensions === 'ga:date') {
          tables.push([this.gettheDate(this.day[0]['ga:date']), this.metrics[0][this.currentTab], this.metrics[0][this.currentTab2]]);
        } else {
          tables.push([this.day[0]['ga:date'], this.metrics[0][this.currentTab], this.metrics[0][this.currentTab2]]);
        }
      } else {
        if (this.dimensions === 'ga:date') {
          tables.push([this.gettheDate(this.day[0]['ga:date']), this.metrics[0][this.currentTab]]);
        } else {
          tables.push([this.day[0]['ga:date'], this.metrics[0][this.currentTab]]);
        }
      }
    });

    this.lineChartData = {
      chartType: 'ComboChart',
      dataTable: tables,
      options: {
        colors: ['skyblue', '#0A97F5'], pointsVisible: true,
        legend: 'none',
        chartArea: {
          width: '92%',
        },
        seriesType: 'area',
        series: { 1: { type: 'line' } }
      },
    };
  }


  getDetailssecond(type: any) {
    const tables2 = [];

    this.currentTab2 = type;
    if (this.currentTab2 !== 'Select a metrics') {
      if (type === '(ga:sessionDuration/ga:sessions)') {
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Avg. Session Duration']);
      } else if (type === 'ga:bounceRate') {
        this.legend2 = 'Bounce Rate';
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Bounce Rate']);
      } else if (type === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (type === 'ga:pageViews') {
        this.legend2 = 'pageviews';
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'pageviews']);
      } else if (type === 'ga:sessions') {
        this.legend2 = 'Sessions';
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Sessions']);
      } else if (type === 'ga:users') {
        this.legend2 = 'Users';
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Users']);
      }
    } else {
      tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab)]);

    }

    this.dataTable.forEach((item, index) => {
      this.day = item.dimensions;
      this.metrics = item.metrics;
      if (this.currentTab2 !== 'Select a metrics') {
        if (this.dimensions === 'ga:date') {
          tables2.push([this.gettheDate(this.day[0]['ga:date']), this.metrics[0][this.currentTab], this.metrics[0][type]]);
        } else {
          tables2.push([this.day[0]['ga:date'], this.metrics[0][this.currentTab], this.metrics[0][type]]);
        }
      } else {
        if (this.dimensions === 'ga:date') {
          tables2.push([this.gettheDate(this.day[0]['ga:date']), this.metrics[0][this.currentTab]]);
        } else {
          tables2.push([this.day[0]['ga:date'], this.metrics[0][this.currentTab]]);
        }
      }

    });

    this.lineChartData = {
      chartType: 'ComboChart',
      dataTable: tables2,
      options: {
        colors: ['skyblue', '#0A97F5'], pointsVisible: true,
        legend: 'none',
        chartArea: {
          width: '92%',
        },
        seriesType: 'area',
        series: { 1: { type: 'line' } }
      },
    };
  }

  changeTheSecondsToDate(seconddata) {
    const sec_num = parseFloat(seconddata);
    this.hoursTocal = Math.floor(sec_num / 3600);
    this.minutesTocal = Math.floor((sec_num - (this.hoursTocal * 3600)) / 60);
    this.secondsTocal = Math.floor(sec_num - (this.hoursTocal * 3600) - (this.minutesTocal * 60));
    if (this.hoursTocal < 10) {
      this.hoursTocal = '0' + this.hoursTocal;
    }
    if (this.minutesTocal < 10) {
      this.minutesTocal = '0' + this.minutesTocal;
    }
    if (this.secondsTocal < 10) {
      this.secondsTocal = '0' + this.secondsTocal;
    }
    // return this.hoursTocal + ':' + this.minutesTocal + ':' + parseInt(this.secondsTocal, 10);
    return this.hoursTocal + ':' + this.minutesTocal + ':' + this.secondsTocal;
  }
  getTheCurrentTabEvent(type: any) {
    if (type === 'ga:sessions') {
      this.legend1 = 'sessions';
      return 'sessions';
    } else if (type === 'ga:bounceRate') {
      this.legend1 = 'bounce rate';
      return 'bouncerate';
    } else if (type === 'ga:users') {
      this.legend1 = 'users';
      return 'Users';
    } else if (type === 'ga:pageViews') {
      this.legend1 = 'pageviews';
      return 'pageviews';
    }
  }
  getTheCurrentTab2(type: any) {
    if (type === 'ga:sessions') {
      this.legend2 = 'sessions';
      return 'sessions';
    } else if (type === 'ga:bounceRate') {
      this.legend2 = 'bounceRate';
      return 'bounceRate';
    } else if (type === 'ga:users') {
      this.legend2 = 'users';
      return 'users';
    } else if (type === 'ga:pageViews') {
      this.legend2 = 'pageViews';
      return 'pageViews';
    }
  }
  finalDataToSend() {
    const completeDate = { startDate: '', endDate: '', dimensions: '' };
    completeDate.startDate = new Date(this.startDate).getFullYear() + '-' + ((new Date(this.startDate).getMonth() + 1) < 10 ? '0' : '')
      + (new Date(this.startDate).getMonth() + 1) + '-' + ((new Date(this.startDate).getDate()) < 10 ? '0' : '')
      + (new Date(this.startDate).getDate());
    completeDate.endDate = new Date(this.endDate).getFullYear() + '-' + ((new Date(this.endDate).getMonth() + 1) < 10 ? '0' : '')
      + (new Date(this.endDate).getMonth() + 1) + '-' + ((new Date(this.endDate).getDate()) < 10 ? '0' : '')
      + (new Date(this.endDate).getDate());
    completeDate.dimensions = this.dimensions;
    this.showLoader = true;
    if (this.startDate !== '' && this.endDate !== '' && this.dimensions !== '' && completeDate.endDate >= completeDate.startDate) {
      this.cluster1Service.createGraph(completeDate)
        .then(response => {

          this.dataTable = response.data;
          const table = [];
          if (this.currentTab === '') {
            this.currentTab = 'ga:sessions';
          }
          if (this.currentTab2 === '') {
            this.currentTab2 = 'Select a metrics';
          }
          if (this.currentTab2 !== 'Select a metrics') {
            table.push(['date', this.getTheCurrentTabEvent(this.currentTab), this.getTheCurrentTab2(this.currentTab2)]);
          } else {
            table.push(['date', this.getTheCurrentTabEvent(this.currentTab)]);
          }
          this.dataTable.forEach((item, index) => {
            this.day = item.dimensions;
            this.metrics = item.metrics;
            this.session = this.metrics[0][this.currentTab];
            this.user = this.metrics[0][this.currentTab2];
            if (this.currentTab2 !== 'Select a metrics') {
              if (this.dimensions === 'ga:date') {
                table.push([this.gettheDate(this.day[0]['ga:date']), this.session, this.user]);
              } else {
                table.push([this.day[0]['ga:date'], this.session, this.user]);
              }
            } else {
              if (this.dimensions === 'ga:date') {
                table.push([this.gettheDate(this.day[0]['ga:date']), this.session]);
              } else {
                table.push([this.day[0]['ga:date'], this.session]);
              }
            }

          });

          this.lineChartData = {
            chartType: 'ComboChart',
            dataTable: table,
            options: {
              colors: ['skyblue', '#0A97F5'], pointsVisible: true,
              legend: 'none',
              //     legend: { position: 'top' },
              chartArea: {
                width: '92%',
              },
              seriesType: 'area',
              series: { 1: { type: 'line' } }
            },
          };
          setTimeout(function () {
          }, 1000);
          this.showLoader = false;
        });
      this.cluster1Service.createMetrics(completeDate)
        .then(response => {
          this.dataTable = response.data;
          this.sessionTotal = 0;
          this.pageViewTotal = 0;
          this.sessionperUser = 0;
          this.avgSessDuration = 0;
          this.newUsers = 0;
          this.usersTotal = 0;
          this.persessionsTotal = '';
          this.BounceTotal = 0;
          this.bouncesTotal = '';
          this.bouncesTotalround = 0;
          this.totalSessionUsers = '';
          this.totalSessionUsersRound = 0;
          this.durationTotal = 0;
          const table = [];
          const sessions = [];
          const users = [];
          const durations = [];
          const bouncerate = [];
          const pageview = [];
          const pagevssessions = [];
          const persessions = [];
          this.dataTable.forEach((item, index) => {
            this.metrics = item.metrics;
            this.sessionTotal = this.metrics[0]['ga:sessions'];
            this.usersTotal = this.metrics[0]['ga:users'];
            this.durationTotal = this.metrics[0]['ga:sessionDuration'];
            this.BounceTotal = this.metrics[0]['ga:bounceRate'];
            this.pageViewTotal = this.metrics[0]['ga:pageViews'];
            this.newUsers = this.metrics[0]['ga:newUsers'];
            this.sessionperUser = this.metrics[0]['ga:sessionsPerUser'];
            this.avgSessDuration = this.metrics[0]['ga:avgSessionDuration'];

            this.duration = this.metrics[0]['ga:sessionDuration'];
            this.Bounce = this.metrics[0]['ga:bounceRate'];
            this.pageView = this.metrics[0]['ga:pageViews'];
            this.newUser = this.metrics[0]['ga:newUsers'];
            this.AvgSessDuration = (this.durationTotal / this.session);
            this.pagevssessions = (this.pageViewTotal / this.sessionTotal);
          });

          this.pagevssessionsTotal = ((this.pageViewTotal / this.sessionTotal)).toFixed(2);
          // console.log(typeof this.pagevssessionsTotal);

          this.pagevssessionsTotalRound = parseFloat(this.pagevssessionsTotal);
          console.log(typeof this.pagevssessionsTotalRound);
          if (typeof this.pagevssessionsTotalRound === 'number') {
            this.pagevssessionsTotalRound = 0;
          }
          this.persessionsTotal = (this.sessionperUser).toFixed(2);
          this.bouncesTotal = ((this.BounceTotal)).toFixed(2);
          this.bouncesTotalround = parseFloat(this.bouncesTotal);

          this.totalSessionUsers = JSON.stringify(this.avgSessDuration);
          this.totalSessionUsers = this.changeTheSecondsToDate(this.totalSessionUsers);

        });
    } else {
      this.showLoader = false;
    }
  }
  listOfOverview() {
    const completeDate = { startDate: '', endDate: '', dimensions: '' };
    completeDate.startDate = new Date(this.startDate).getFullYear() + '-' + ((new Date(this.startDate).getMonth() + 1) < 10 ? '0' : '')
      + (new Date(this.startDate).getMonth() + 1) + '-' + ((new Date(this.startDate).getDate()) < 10 ? '0' : '')
      + (new Date(this.startDate).getDate());
    completeDate.endDate = new Date(this.endDate).getFullYear() + '-' + ((new Date(this.endDate).getMonth() + 1) < 10 ? '0' : '')
      + (new Date(this.endDate).getMonth() + 1) + '-' + ((new Date(this.endDate).getDate()) < 10 ? '0' : '')
      + (new Date(this.endDate).getDate());
    completeDate.dimensions = this.dimensions;
    this.showLoader = true;
    if (this.startDate !== '' && this.endDate !== '' && this.dimensions !== '' && completeDate.endDate >= completeDate.startDate) {
      this.cluster1Service.overviewList(completeDate)
        .then(response => {
          this.items = response.data;
          this.dataTable = response.data;
          this.itemCount = response.data.length;
          this.dataTable.forEach((item, index) => {
            item.avgSessionDuration = this.changeTheSecondsToDate(JSON.stringify(item.avgSessionDuration));
            item.timeOnPage = this.changeTheSecondsToDate(JSON.stringify(item.timeOnPage));

          });

        });

      this.itemResource = new DataTableResource(this.items);

      //   reloadItems(params) {
      //     this.itemResource.query(params).then(response => this.items = items);
      // }
      //   reloadItems(params) {
      //     this.response.query(params).then(items => this.items = items);
      //     this.cluster1Service.overviewList(completeDate)
      //     .then(response => {
      //        this.items = response.data;
      //        this.itemCount = response.data.length;
      //     });
      // }
    } else {
      this.showLoader = false;
    }
  }
}
