import {  Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})

export class EditgameComponent implements OnInit, OnDestroy {

  rows = [];

  constructor( private element : ElementRef, private apiService : ApiService) { 
       this.fetch((data) => {
      this.rows = data;
      console.log(this.rows)
        });
   }

  ngOnInit() {

      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
      navbar.classList.remove('navbar-transparent');
  }

	ngOnDestroy(){
		let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
	}

  fetch(cb) {
      let magazines;
        this.apiService.getUsers()
                       .subscribe((value) =>{
                       magazines = value;
                       cb(magazines);
                     });
  }

}
