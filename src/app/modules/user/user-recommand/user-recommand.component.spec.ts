import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecommandComponent } from './user-recommand.component';

describe('UserRecommandComponent', () => {
  let component: UserRecommandComponent;
  let fixture: ComponentFixture<UserRecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
