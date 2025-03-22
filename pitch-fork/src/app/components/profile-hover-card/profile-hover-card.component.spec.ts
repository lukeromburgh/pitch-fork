import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHoverCardComponent } from './profile-hover-card.component';

describe('ProfileHoverCardComponent', () => {
  let component: ProfileHoverCardComponent;
  let fixture: ComponentFixture<ProfileHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHoverCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
