import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraChecklistsComponent } from './obra-checklists.component';

describe('ObraChecklistsComponent', () => {
  let component: ObraChecklistsComponent;
  let fixture: ComponentFixture<ObraChecklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraChecklistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
