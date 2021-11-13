import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSonidoCPage } from './primer-sonido-c.page';

describe('PrimerSonidoCPage', () => {
  let component: PrimerSonidoCPage;
  let fixture: ComponentFixture<PrimerSonidoCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSonidoCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSonidoCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
