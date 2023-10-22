import { Component, Output, EventEmitter } from '@angular/core';
import { CrawlResult, CrawlResponse } from '../models/crawler.model';
import { HttpClient } from '@angular/common/http';
// interface CrawlResult {
//   url: string;
//   content: string;
//   depth: number;
//   parent?: string;
//   showLess?: boolean;
//   expanded?: boolean;
// }

// interface CrawlResponse {
//   parent: CrawlResult;
//   children: CrawlResult[];
// }
@Component({
  selector: 'app-crawler-results',
  templateUrl: './crawler-results.component.html',
  styleUrls: ['./crawler-results.component.css']
})


export class CrawlerResultsComponent {

  
  
  @Output() formSubmitted = new EventEmitter<void>();
  results: any[] = [];

  constructor(private http: HttpClient) {}


  onSubmit() {
    // Logic to perform your crawling and saving to DB here

    // Emit an event after the above logic completes
    this.formSubmitted.emit();
}
  ngOnInit() {
    // this.fetchResults();
  }

  fetchResults() {
    this.http.get<any[]>('http://localhost:8000/api/results')
      .subscribe(response => {
        this.results = response.map(item => ({ ...item, showLess: true }));

        this.results.forEach(result => {
          result.expanded = false;
        });
      });
  }

  fetchResultsByUrl(url: string) {
    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `http://localhost:8000/api/results/${encodedUrl}`;

    this.http.get<CrawlResponse>(apiUrl)
        .subscribe(response => {
            this.results = [];
            if (response.parent) {
                this.results.push(response.parent);
            }
            this.results.push(...response.children);

            this.results.forEach(result => {
                result.expanded = false;
                result.showLess = true;
            });
        });
}

  toggleContent(result: any) {
    result.showLess = !result.showLess;
  }

  truncateContent(content: string, limit: number): string {
    if (content.length <= limit) {
        return content;
    }

    const truncated = content.slice(0, limit);
    return truncated.slice(0, truncated.lastIndexOf(' '));
}

  
}
