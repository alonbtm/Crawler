import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerResultsComponent } from './crawler-results.component';

describe('CrawlerResultsComponent', () => {
  let component: CrawlerResultsComponent;
  let fixture: ComponentFixture<CrawlerResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlerResultsComponent]
    });
    fixture = TestBed.createComponent(CrawlerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
