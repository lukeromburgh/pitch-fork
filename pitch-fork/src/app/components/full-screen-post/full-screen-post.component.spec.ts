import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenPostComponent } from './full-screen-post.component';

describe('FullScreenPostComponent', () => {
  let component: FullScreenPostComponent;
  let fixture: ComponentFixture<FullScreenPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
