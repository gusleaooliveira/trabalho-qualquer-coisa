import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListasComponent } from './tabela-listas.component';

describe('TabelaProdutosComponent', () => {
  let component: TabelaListasComponent;
  let fixture: ComponentFixture<TabelaListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
