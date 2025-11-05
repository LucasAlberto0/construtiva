import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCollaborationComponent } from './obra-collaboration.component';

describe('ObraCollaborationComponent', () => {
  let component: ObraCollaborationComponent;
  let fixture: ComponentFixture<ObraCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraCollaborationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
