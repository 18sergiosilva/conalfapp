import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSonidoNPage } from './primer-sonido-n.page';

describe('PrimerSonidoNPage', () => {
  let component: PrimerSonidoNPage;
  let fixture: ComponentFixture<PrimerSonidoNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSonidoNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSonidoNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
