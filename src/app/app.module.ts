import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaListasComponent } from './tabela-listas/tabela-listas.component';
import { FormListasComponent } from './form-listas/form-listas.component';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabelaListasComponent,
    FormListasComponent,
    FiltroPesquisaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
