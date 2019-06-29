import {  Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormControl,Validators,ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})

export class EditgameComponent implements OnInit, OnDestroy {
  id: number;
  rows = [];
  checkoutForm;

  constructor( private element : ElementRef, private apiService : ApiService, private formBuilder: FormBuilder) { 
       /*this.fetch((data) => {
      this.rows = data;
      console.log(this.rows)
        });*/

        this.checkoutForm =  this.formBuilder.group({
          status: ['' 
                ],
          platform: [''
        ],
          title: new FormControl(''),
    
          
        });  
   }

  ngOnInit() {

      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
      navbar.classList.remove('navbar-transparent');
  }

	ngOnDestroy(){
		let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
	}

  fetch(body,cb) {
      let magazines;
        this.apiService.updateGame(1,body)
                       .subscribe((value) =>{
                       magazines = value;
                       cb(magazines);
                     });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.fetch(customerData,(data) => console.log(data))
    this.checkoutForm.reset();
  }

}
