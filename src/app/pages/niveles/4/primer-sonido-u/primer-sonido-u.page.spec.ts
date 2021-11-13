import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSonidoUPage } from './primer-sonido-u.page';

describe('PrimerSonidoUPage', () => {
  let component: PrimerSonidoUPage;
  let fixture: ComponentFixture<PrimerSonidoUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSonidoUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSonidoUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
