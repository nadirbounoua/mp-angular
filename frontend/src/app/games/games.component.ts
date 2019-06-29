import {  Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  title = "My Games";
  games = [];

  constructor(private apiService : ApiService, private router: Router,) {
      this.fetch((data) => {
      this.games = data;
      console.log(this.games)
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
      let games;
        this.apiService.getGames()
                       .subscribe((value) =>{
                       games = value;
                       cb(games);
                     });
  }

  async delete(id) {
    await this.apiService.deleteGame(parseInt(id))
                     .subscribe((value) =>{
                       console.log(value)
                     this.router.navigate(['/games']);
                   });
  }

  deleteGame(id) {    
    this.delete(parseInt(id))
  }
}
