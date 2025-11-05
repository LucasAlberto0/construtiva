import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraDocumentsComponent } from './obra-documents.component';

describe('ObraDocumentsComponent', () => {
  let component: ObraDocumentsComponent;
  let fixture: ComponentFixture<ObraDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
