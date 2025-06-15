import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCircleButtonComponent } from './icon-circle-button.component';

describe('IconCircleButtonComponent', () => {
  let component: IconCircleButtonComponent;
  let fixture: ComponentFixture<IconCircleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCircleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
