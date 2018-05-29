import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// import './utils/dataTables.extensions';
declare var jquery: any;
declare var $: any;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    url: string;
    haha: any;
    windHeight: any;
    currentUrl: '';
    location: any;
    showDashboard = true;
    @Input() authentication: boolean;
    // showLoader: boolean;

    constructor(private element: ElementRef, private router: Router) {
        this.router.events.subscribe((event) => {
            if (this.router.url === '/login') {
                this.showDashboard = false;
            } else {
                this.showDashboard = true;
            }
        });
        this.haha = this.element.nativeElement;
        this.haha.style.height = '100%';
        this.windHeight = (window.screen.height) + 'px';
        setTimeout(() => {
            const currentUrl = window.location.href;
        }, 100);

        router.events.subscribe((val) => {
            setTimeout(function () {
                // Remove overflow from .wrapper if layout-boxed exists
                $('.layout-boxed > .wrapper').css('overflow', 'hidden');
                // Get window height and the wrapper height
                const footer_height = $('.main-footer').outerHeight() || 0;
                const neg = $('.main-header').outerHeight() + footer_height;
                const window_height = $(window).height();
                const sidebar_height = $('.sidebar').height() || 0;
                // Set the min-height of the content and sidebar based on the
                // the height of the document.
                if ($('body').hasClass('fixed')) {
                    $('.content-wrapper, .right-side').css('min-height', window_height - footer_height);
                } else {
                    let postSetWidth;
                    if (window_height >= sidebar_height) {
                        $('.content-wrapper, .right-side').css('min-height', window_height - neg);
                        postSetWidth = window_height - neg;
                    } else {
                        $('.content-wrapper, .right-side').css('min-height', sidebar_height);
                        postSetWidth = sidebar_height;
                    }
                    // Fix for the control sidebar height
                    const controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                    if (typeof controlSidebar !== 'undefined') {
                        if (controlSidebar.height() > postSetWidth) {
                            $('.content-wrapper, .right-side').css('min-height', controlSidebar.height());
                        }
                    }
                }
            }, 10);
        });
    }
    ngOnInit() {


    }


}
