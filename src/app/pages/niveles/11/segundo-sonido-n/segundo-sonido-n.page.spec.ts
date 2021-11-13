import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSonidoNPage } from './segundo-sonido-n.page';

describe('SegundoSonidoNPage', () => {
  let component: SegundoSonidoNPage;
  let fixture: ComponentFixture<SegundoSonidoNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoSonidoNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoSonidoNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
