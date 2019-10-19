import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSTracerComponent } from './mstracer/app.component.mstracer';
import {IntroductionComponent} from './introduction/app.component.introduction';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuoteComponent } from './quote/quote.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MooddetailComponent } from './mooddetail/mooddetail.component';
import { InfosliderComponent } from './infoslider/infoslider.component';
import { NgxSimpleSliderModule } from 'ngx-simple-slider';

@NgModule({
  declarations: [
    AppComponent,
    MSTracerComponent,
    IntroductionComponent,
    UserProfileComponent,
    DashboardComponent,
    WelcomeComponent,
    QuoteComponent,
    MooddetailComponent,
    InfosliderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSimpleSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
