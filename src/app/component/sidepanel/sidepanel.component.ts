import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  productUrl: string;
  hideProps: boolean;
  ngOnInit() {
    if (localStorage.getItem('userType') === '2') {
      this.productUrl = 'kentec';
      this.hideProps = false;
    } else {
      this.productUrl = 'product';
      this.hideProps = true;
    }
  }
  // private cat() {
  //   this.router.navigateByUrl('category', { skipLocationChange: true });
  // }
}
