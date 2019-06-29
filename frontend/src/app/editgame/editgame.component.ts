import {  Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormControl,Validators,ValidationErrors} from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})

export class EditgameComponent implements OnInit, OnDestroy {
  checkoutForm : FormGroup;
  game;
  constructor(
    private element : ElementRef,
    private apiService : ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.checkoutForm = this.formBuilder.group({
        status: ['' 
              ],
        platform: [''
      ],
        title: new FormControl(''),
  
        
      })
      this.fetch( async (data) => { 
        this.game = data;
        this.checkoutForm.controls['title'].setValue(this.game.title)
      })
      

      
   }

  ngOnInit() {
  }

	ngOnDestroy(){
	}

  async update(body,cb) {
      let games;
      await this.apiService.updateGame(parseInt(this.route.snapshot.paramMap.get('id')),body)
                       .subscribe((value) =>{
                       games = value;
                       cb(games);
                     });
  }

  async fetch(cb) {
    let games;
    await this.apiService.getOneGame(parseInt(this.route.snapshot.paramMap.get('id')))
                     .subscribe((value) =>{
                       console.log(value)
                     games = value[0];
                     cb(games);
                   });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.update(customerData,(data) => console.log(data))
    this.checkoutForm.reset();
  }

}
