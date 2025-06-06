import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHistoryComponent } from './book-history.component';

describe('BookHistoryComponent', () => {
  let component: BookHistoryComponent;
  let fixture: ComponentFixture<BookHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
