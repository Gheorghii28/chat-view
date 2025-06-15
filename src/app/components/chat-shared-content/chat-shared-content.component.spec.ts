import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSharedContentComponent } from './chat-shared-content.component';

describe('ChatSharedContentComponent', () => {
  let component: ChatSharedContentComponent;
  let fixture: ComponentFixture<ChatSharedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSharedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSharedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
