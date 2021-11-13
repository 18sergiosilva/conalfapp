import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPaginaLPage } from './segunda-pagina-l.page';

describe('SegundaPaginaLPage', () => {
  let component: SegundaPaginaLPage;
  let fixture: ComponentFixture<SegundaPaginaLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaPaginaLPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPaginaLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
