import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSonidoPPage } from './segundo-sonido-p.page';

describe('SegundoSonidoPPage', () => {
  let component: SegundoSonidoPPage;
  let fixture: ComponentFixture<SegundoSonidoPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoSonidoPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoSonidoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
