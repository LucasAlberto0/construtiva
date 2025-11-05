import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraControlComponent } from './obra-control.component';

describe('ObraControlComponent', () => {
  let component: ObraControlComponent;
  let fixture: ComponentFixture<ObraControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
