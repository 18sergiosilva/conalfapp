import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSonidoYPage } from './primer-sonido-y.page';

describe('PrimerSonidoYPage', () => {
  let component: PrimerSonidoYPage;
  let fixture: ComponentFixture<PrimerSonidoYPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSonidoYPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSonidoYPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
