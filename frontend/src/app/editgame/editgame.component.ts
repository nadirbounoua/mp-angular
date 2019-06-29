import {  Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})

export class EditgameComponent implements OnInit, OnDestroy {

  games = [];
  game;
  constructor(
    private element : ElementRef,
    private apiService : ApiService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
       this.fetch((data) => {
      this.games = data;
      this.game = this.games[this.route.snapshot.paramMap.get('id')-1];
      console.log(this.game);
        });
   }

  ngOnInit() {

  }

	ngOnDestroy(){
	}

  fetch(cb) {
      let games;
        this.apiService.getGames()
                       .subscribe((value) =>{
                       games = value;
                       cb(games);
                     });
  }

}
