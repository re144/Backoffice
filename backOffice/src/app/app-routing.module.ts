import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Web/login/login.component';
import {GestionDesAdminsComponent} from './Web/gestion-des-admins/gestion-des-admins.component';
import {ClientComponent} from './Web/clients/client.component';
import {AjouterClientComponent} from './Web/clients/ajouter-client/ajouter-client.component';
import {EditionConsultationComponent} from './Web/clients/edition-consultation/edition-consultation.component';
import {ClientsNonValidesComponent} from './Web/clients/clients-non-valides/clients-non-valides.component';
import {CommerciauxComponent} from './Web/commerciaux/commerciaux.component';
import {CommandesComponent} from './Web/commandes/commandes.component';
import {AjouterCommercialComponent} from './Web/commerciaux/ajouter-commercial/ajouter-commercial.component';
import {EditionCommerciauxComponent} from './Web/commerciaux/edition-commerciaux/edition-commerciaux.component';
import {ObjectifComponent} from './Web/commerciaux/objectif/objectif.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'gestion-des-admins', component: GestionDesAdminsComponent},
  { path: 'gestion-des-clients', component: ClientComponent},
  { path: 'Ajouter-clients', component: AjouterClientComponent},
  { path: 'Edition-consultation-client', component: EditionConsultationComponent},
  { path: 'clients-non-valides', component: ClientsNonValidesComponent},
  { path: 'commerciaux', component: CommerciauxComponent},
  { path: 'commerciaux-ajout', component: AjouterCommercialComponent},
  { path: 'commerciaux-edition', component: EditionCommerciauxComponent},
  { path: 'commerciaux-objectif', component: ObjectifComponent},
  { path: 'commandes', component: CommandesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
