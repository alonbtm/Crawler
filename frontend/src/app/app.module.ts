import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrawlerFormComponent } from './crawler-form/crawler-form.component';
import { CrawlerResultsComponent } from './crawler-results/crawler-results.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CrawlerFormComponent,
    CrawlerResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // add this line
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
