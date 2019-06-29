import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
      navbar.classList.remove('navbar-transparent');
  }

	ngOnDestroy(){
		let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
	}

}
