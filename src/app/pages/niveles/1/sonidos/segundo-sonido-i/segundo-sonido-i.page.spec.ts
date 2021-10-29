import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSonidoIPage } from './segundo-sonido-i.page';

describe('SegundoSonidoIPage', () => {
  let component: SegundoSonidoIPage;
  let fixture: ComponentFixture<SegundoSonidoIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoSonidoIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoSonidoIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
