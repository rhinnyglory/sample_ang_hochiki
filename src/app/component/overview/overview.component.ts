import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import { DatePipe } from '@angular/common';
import { ChartSelectEvent } from 'ng2-google-charts';
import { IMyDpOptions } from 'mydatepicker';

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
  private startDate = moment().subtract(7, 'days').format('MMMM D, YYYY');
  private endDate = moment().subtract(1, 'days').format('MMMM D, YYYY');
  private days = '';
  private beginDateFormat = '';
  private endDateFormat = '';
  showLoader = false;
  private dimensions = 'ga:date';
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
  // private start = '';
  private selectedIntialDates = '';
  // private end = '';
  private dates: Cluster1Model[];
  private dataTable = [];
  private day = [];
  private previousDays = [];
  private metrics = [];
  private pmetrics = [];
  private hoursTocal;
  private secondsTocal;
  private minutesTocal;
  private session = 0;
  private user = 0;
  private duration = 0;
  private Bounce = 0;
  private pageView = 0;
  private newUser = 0;
  private perSessionUser = 0;
  private AvgSessDuration = 0;
  private pagevssessions = 0;
  private currentTab: any = '';
  private currentTab2: any = '';
  private currentTabcopy: any = '';
  private currentTab2copy: any = '';
  private firstMetric: any;
  public buttonDisabled: boolean;
  public QUnit: any = {};
  // private container: null;
  // private numberOfMonths: 3;

  // private datepickerShowing: true;

  // private defaultDate: '-1D';


  // private defaultDateRange: 'LAST_7_DAYS';
  // private maxDate: '-1D';

  // private minDate: new Date(2011, 0, 1);

  // test: false,

  // today: null
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
  //   myDateRangePickerOptions: IMyDrpOptions = {

  //     dateFormat: 'mmm dd, yyyy',
  //     disableSince: { year: new Date().getFullYear(), month: (new Date().getMonth() + 1), day: (new Date().getDate() + 1) },
  //  };
  //   private model: any = {
  //     beginDate: this.startDate,
  //     endDate: this.endDate
  //   };
  //   setDateRange(): void {
  //     const date = new Date();
  //     this.myForm.patchValue({
  //       myDateRange: {
  //         beginDate: {
  //           year: date.getFullYear(),
  //           month: date.getMonth() + 1,
  //           day: date.getDate()
  //         },
  //         endDate: {
  //           year: date.getFullYear(),
  //           month: date.getMonth() + 1,
  //           day: date.getDate()
  //         }
  //       }
  //     });
  //   }
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
// console.log()
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
      console.log(picker.startDate.format('MMM D, YYYY'));
      console.log(picker.endDate.format('MMM D, YYYY'));
      vm.startDate = picker.startDate.format('MMM D, YYYY');
      vm.endDate = picker.endDate.format('MMM D, YYYY');
      // console.log(this.startDate, this.endDate);
      vm.finalDataToSend();
    });
    // console.log(this.startDate , this.endDate, 'hghjghjgkj' );
    // console.log(picker.startDate.format('MMM D, YYYY'));
    // console.log(picker.endDate.format('MMM D, YYYY'));
    // const days = 7;
    // const date = new Date();
    // const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    // this.startDate = last.getFullYear() + '-' + ((last.getMonth() + 1) < 10 ? '0' : '') + (last.getMonth() + 1) + '-' + ((last.getDate()) < 10 ? '0' : '') + (last.getDate());
    // this.endDate = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1) + '-' + ((new Date().getDate()) < 10 ? '0' : '') + (new Date().getDate());
    // const datePipeS = new DatePipe('en-US');
    // this.startDate = datePipeS.transform(this.startDate, 'MMM dd, yyyy');
    // this.endDate = datePipeS.transform(this.endDate, 'MMM dd, yyyy');
    // this.selectedIntialDates = this.startDate + ' ' + '' + '-' + '' + ' ' + this.endDate;
    this.finalDataToSend();

  }



  // clearDateRange(): void {
  //   this.startDate = '';
  //   this.endDate = '';
  // }


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
  }
  // onDateRangeChanged(event: IMyDateRangeModel) {
  //   if (event.formatted !== '') {

  //     const newDate = new Date(this.endDate);
  //     if (event.beginJsDate <= newDate && event.endJsDate >= newDate) {
  //       this.finalDataToSend();
  //     } else {
  //       this.onDateSelected(event);
  //     }
  //   } else {
  //   }
  // }
  onDateSelected(dates) {
    if (dates.type === 1) {
      this.startDate = dates.formatted;
    } else {
      this.endDate = dates.formatted;
    }
  }
  matrics = [{ id: 'ga:sessions', value: 'Sessions' }, { id: 'ga:bounceRate', value: 'Bounce Rate' }, { id: 'ga:users', value: 'Users' }, { id: 'ga:pageViews', value: 'Pageviews' }];
  getDetailsfirst(event: any) {
    this.currentTab = event;
    const tables = [];

    if (this.currentTab2 !== 'Select a metrics') {
      if (event === '(ga:sessionDuration/ga:sessions)') {
        tables.push(['date', 'Avg. Session Duration', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:bounceRate') {
        tables.push(['date', 'Bounce Rate', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (event === 'ga:pageViews') {
        tables.push(['date', 'pageviews', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:sessions') {
        tables.push(['date', 'Sessions', this.getTheCurrentTab2(this.currentTab2)]);
      } else if (event === 'ga:users') {
        tables.push(['date', 'Users', this.getTheCurrentTab2(this.currentTab2)]);
      }
    } else {
      if (event === '(ga:sessionDuration/ga:sessions)') {
        tables.push(['date', 'Avg. Session Duration']);
      } else if (event === 'ga:bounceRate') {
        tables.push(['date', 'Bounce Rate']);
      } else if (event === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (event === 'ga:pageViews') {
        tables.push(['date', 'pageviews']);
      } else if (event === 'ga:sessions') {
        tables.push(['date', 'Sessions']);
      } else if (event === 'ga:users') {
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
      chartType: 'AreaChart',
      chart: {2: {type: 'LineChart'}},
      dataTable: tables,
      options: {
        colors: ['skyblue', 'lightpink'], pointsVisible: true,
        legend: { position: 'top' },
        chartArea: {
          width: '95%',
      }
      },
    };

  }

  matrics2 = [{ id: 'ga:sessions', value: 'Sessions' }, { id: 'ga:bounceRate', value: 'Bounce Rate' }, { id: 'ga:users', value: 'Users' }, { id: 'ga:pageViews', value: 'Pageviews' }];
  getDetailssecond(type: any) {
    const tables2 = [];

    this.currentTab2 = type;
    if (this.currentTab2 !== 'Select a metrics') {
      if (type === '(ga:sessionDuration/ga:sessions)') {
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Avg. Session Duration']);
      } else if (type === 'ga:bounceRate') {
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Bounce Rate']);
      } else if (type === 'Pages/Sessions') {
        this.firstMetric = this.pagevssessions;
      } else if (type === 'ga:pageViews') {
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'pageviews']);
      } else if (type === 'ga:sessions') {
        tables2.push(['date', this.getTheCurrentTabEvent(this.currentTab), 'Sessions']);
      } else if (type === 'ga:users') {
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
      chartType: 'AreaChart',
      chart: {2: {type: 'LineChart'}},
      dataTable: tables2,
      options: {
        colors: ['skyblue', 'lightpink'], pointsVisible: true,
        legend: { position: 'top' },
        chartArea: {
          width: '95%',
      }
      },
    };
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
  getTheCurrentTabEvent(type: any) {
    if (type === 'ga:sessions') {
      return 'sessions';
    } else if (type === 'ga:bounceRate') {
      return 'bouncerate';
    } else if (type === 'ga:users') {
      return 'Users';
    } else if (type === 'ga:pageViews') {
      return 'pageviews';
    }
  }
  getTheCurrentTab2(type: any) {
    if (type === 'ga:sessions') {
      return 'sessions';
    } else if (type === 'ga:bounceRate') {
      return 'bounceRate';
    } else if (type === 'ga:users') {
      return 'users';
    } else if (type === 'ga:pageViews') {
      return 'pageViews';
    }
  }
  finalDataToSend() {
    const completeDate = { startDate: '', endDate: '', dimensions: '' };
    completeDate.startDate = new Date(this.startDate).getFullYear() + '-' + ((new Date(this.startDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(this.startDate).getMonth() + 1) + '-' + ((new Date(this.startDate).getDate()) < 10 ? '0' : '') + (new Date(this.startDate).getDate());
    completeDate.endDate = new Date(this.endDate).getFullYear() + '-' + ((new Date(this.endDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(this.endDate).getMonth() + 1) + '-' + ((new Date(this.endDate).getDate()) < 10 ? '0' : '') + (new Date(this.endDate).getDate());
    completeDate.dimensions = this.dimensions;
    console.log(completeDate.startDate, completeDate.endDate, completeDate.dimensions);
    this.showLoader = true;
    if (this.startDate !== '' && this.endDate !== '' && this.dimensions !== '' && completeDate.endDate >= completeDate.startDate) {
      this.cluster1Service.createGraph(completeDate)
        .then(response => {
          this.showLoader = false;

          if (response.data.length === 0) {

          } else {
            this.dataTable = response.data;
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
              this.BounceTotal += this.metrics[0]['ga:bounceRate'];
              this.pageViewTotal += this.metrics[0]['ga:pageViews'];
              this.newUsers += this.metrics[0]['ga:newUsers'];


              this.session = this.metrics[0][this.currentTab];
              // this.session = this.metrics[0]['ga:sessions'];
              this.user = this.metrics[0][this.currentTab2];

              // this.user = this.metrics[0]['ga:users'];
              this.duration = this.metrics[0]['ga:sessionDuration'];
              this.Bounce = this.metrics[0]['ga:bounceRate'];
              this.pageView = this.metrics[0]['ga:pageViews'];
              this.newUser = this.metrics[0]['ga:newUsers'];
              this.AvgSessDuration = (this.durationTotal / this.session);
              this.pagevssessions = (this.pageViewTotal / this.sessionTotal);
              if (this.currentTab2 !== 'Select a metrics') {
                if (this.dimensions === 'ga:date') {
                  table.push([this.gettheDate(this.day[0]['ga:date']), this.session, this.user]);
                  // table.push([this.day[0]['ga:date'], this.session, this.user])
                } else {
                  table.push([this.day[0]['ga:date'], this.session, this.user]);
                }
              } else {
                if (this.dimensions === 'ga:date') {
                  table.push([this.gettheDate(this.day[0]['ga:date']), this.session]);
                  // table.push([this.day[0]['ga:date'], this.session]);

                } else {
                  table.push([this.day[0]['ga:date'], this.session]);
                }
              }

              // sessions.push([this.day[0][''], this.metrics[0]['ga:sessions']]);
              // users.push([this.day[0][''], this.metrics[0]['ga:users']]);
              // durations.push([this.day[0][''], this.metrics[0]['ga:avgSessionDuration']]);
              // bouncerate.push([this.day[0][''], this.metrics[0]['ga:bounceRate']]);
              // pageview.push([this.day[0][''], this.metrics[0]['ga:pageviews']]);
              // pagevssessions.push([this.day[0][''], this.metrics[0]['ga:pageviewsPerSession']]);
              // persessions.push([this.day[0][''], this.metrics[0]['ga:percentNewSessions']]);
            });
            this.pagevssessionsTotal = ((this.pageViewTotal / this.sessionTotal)).toFixed(2);
            this.pagevssessionsTotalRound = parseFloat(this.pagevssessionsTotal);
            this.persessionsTotal = ((this.newUsers / this.sessionTotal) * 100).toFixed(2);
            this.bouncesTotal = ((this.BounceTotal / this.sessionTotal) * 100).toFixed(2);
            this.bouncesTotalround = parseInt('this.bouncesTotal', 10);
            this.totalSessionUsers = JSON.stringify((this.durationTotal / this.sessionTotal));
            this.totalSessionUsers = this.changeTheSecondsToDate(this.totalSessionUsers);
            this.lineChartData = {
              chartType: 'AreaChart',
              chart: {2: {type: 'LineChart'}},
              dataTable: table,
              options: {
                colors: ['skyblue', 'lightpink'], pointsVisible: true,
                legend: { position: 'top' },
                width: 1200,
                chartArea: {
                  width: '95%',
              }
              },
            },
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
