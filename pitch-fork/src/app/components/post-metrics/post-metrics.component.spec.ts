import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMetricsComponent } from './post-metrics.component';

describe('PostMetricsComponent', () => {
  let component: PostMetricsComponent;
  let fixture: ComponentFixture<PostMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
