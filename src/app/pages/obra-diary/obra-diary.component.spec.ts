import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraDiaryComponent } from './obra-diary.component';

describe('ObraDiaryComponent', () => {
  let component: ObraDiaryComponent;
  let fixture: ComponentFixture<ObraDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraDiaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
