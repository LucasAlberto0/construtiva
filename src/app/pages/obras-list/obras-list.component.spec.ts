import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasListComponent } from './obras-list.component';

describe('ObrasListComponent', () => {
  let component: ObrasListComponent;
  let fixture: ComponentFixture<ObrasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
