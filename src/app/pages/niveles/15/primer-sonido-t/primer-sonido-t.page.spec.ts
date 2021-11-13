import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSonidoTPage } from './primer-sonido-t.page';

describe('PrimerSonidoTPage', () => {
  let component: PrimerSonidoTPage;
  let fixture: ComponentFixture<PrimerSonidoTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSonidoTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSonidoTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
