import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentpageComponent } from './recentpage.component';

describe('RecentpageComponent', () => {
  let component: RecentpageComponent;
  let fixture: ComponentFixture<RecentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
