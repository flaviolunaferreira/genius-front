import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { WorkComponent } from './components/template/work/work.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ParticipantesComponent } from './components/pages/participantes/participante-reader/participantes.component';
import { PlanosComponent } from './components/pages/planos/planos.component';
import { FinanceiroComponent } from './components/pages/financeiro/financeiro.component';
import { SimulacaoComponent } from './components/pages/simulacao/simulacao.component';
import { ParticipanteCreateComponent } from './components/pages/participantes/participante-create/participante-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WorkComponent,
    HomeComponent,
    ServicesComponent,
    ContactsComponent,
    LoginComponent,
    ParticipantesComponent,
    PlanosComponent,
    FinanceiroComponent,
    SimulacaoComponent,
    ParticipanteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
