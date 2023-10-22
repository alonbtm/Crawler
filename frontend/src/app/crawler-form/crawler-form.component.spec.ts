import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerFormComponent } from './crawler-form.component';

describe('CrawlerFormComponent', () => {
  let component: CrawlerFormComponent;
  let fixture: ComponentFixture<CrawlerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlerFormComponent]
    });
    fixture = TestBed.createComponent(CrawlerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
