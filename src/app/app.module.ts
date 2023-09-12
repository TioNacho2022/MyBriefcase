import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './component/main/main.component';
import { InformationComponent } from './component/information/information.component';
import { FinmeComponent } from './component/finme/finme.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainComponent,
    InformationComponent,
    FinmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
