import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { EditgameComponent } from './editgame/editgame.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        GamesComponent,
        EditgameComponent

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule 
    
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
