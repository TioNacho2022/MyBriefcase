import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './component/main/main.component';
import { InformationComponent } from './component/information/information.component';
import { FinmeComponent } from './component/finme/finme.component';
import { FooterComponent } from './component/footer/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainComponent,
    InformationComponent,
    FinmeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
