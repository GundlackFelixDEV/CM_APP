import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSTracerComponent } from './mstracer/app.component.mstracer';
import { LifestyleComponent } from './lifestylemgmt/lifestyle.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, MSTracerComponent, LifestyleComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'fightclub-20'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
