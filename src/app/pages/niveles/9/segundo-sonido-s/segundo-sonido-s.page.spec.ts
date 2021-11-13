import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSonidoSPage } from './segundo-sonido-s.page';

describe('SegundoSonidoSPage', () => {
  let component: SegundoSonidoSPage;
  let fixture: ComponentFixture<SegundoSonidoSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoSonidoSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoSonidoSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
