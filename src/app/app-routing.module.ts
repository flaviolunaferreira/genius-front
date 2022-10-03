import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { FinanceiroComponent } from './components/pages/financeiro/financeiro.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ParticipantesComponent } from './components/pages/participantes/participante-reader/participantes.component';
import { PlanosComponent } from './components/pages/planos/planos.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SimulacaoComponent } from './components/pages/simulacao/simulacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'participantes',
    component: ParticipantesComponent
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent
  },
  {
    path: 'planos',
    component: PlanosComponent
  },
  {
    path: 'simulacao',
    component: SimulacaoComponent
  },
  {
    path: 'servicos',
    component: ServicesComponent
  },
  {
    path: 'contato',
    component: ContactsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
