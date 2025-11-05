import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraDetailsComponent } from './obra-details.component';

describe('ObraDetailsComponent', () => {
  let component: ObraDetailsComponent;
  let fixture: ComponentFixture<ObraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
