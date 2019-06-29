import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
      navbar.classList.remove('navbar-transparent');  
  }

	ngOnDestroy(){
		let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
	}

}
