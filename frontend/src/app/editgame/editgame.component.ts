import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})
export class EditgameComponent implements OnInit {

	focus = true;
  constructor() { }

  ngOnInit() {
      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
      navbar.classList.remove('navbar-transparent');
  }

}
