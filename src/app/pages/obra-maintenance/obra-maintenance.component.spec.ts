import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraMaintenanceComponent } from './obra-maintenance.component';

describe('ObraMaintenanceComponent', () => {
  let component: ObraMaintenanceComponent;
  let fixture: ComponentFixture<ObraMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
