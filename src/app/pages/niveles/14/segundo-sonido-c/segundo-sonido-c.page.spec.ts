import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSonidoCPage } from './segundo-sonido-c.page';

describe('SegundoSonidoCPage', () => {
  let component: SegundoSonidoCPage;
  let fixture: ComponentFixture<SegundoSonidoCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoSonidoCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoSonidoCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
