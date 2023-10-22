import { Component, EventEmitter, Output } from '@angular/core';
import { CrawlResult, CrawlResponse } from '../models/crawler.model';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crawler-form',
  templateUrl: './crawler-form.component.html',
  styleUrls: ['./crawler-form.component.css']
})
export class CrawlerFormComponent {
  url: string = '';
  depth: number = 0;
  isLoading = false;
  
  @Output() onFormSubmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  
  submitForm() {
    this.isLoading = true;
    const formData = {
      url: this.url,
      depth: this.depth
    };
    
    this.http.post('http://localhost:8000/api/crawl', formData)
      .subscribe(response => {
        console.log(response);
        this.isLoading = false;
        this.onFormSubmitted.emit(this.url);
    });
  }
}
