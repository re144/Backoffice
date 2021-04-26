import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent } from './Web/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBar, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClientComponent} from './Web/clients/client.component';
import { GestionDesAdminsComponent } from './Web/gestion-des-admins/gestion-des-admins.component';
import {InterceptorService} from './services/interceptor.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AjouterClientComponent } from './Web/clients/ajouter-client/ajouter-client.component';
import { EditionConsultationComponent } from './Web/clients/edition-consultation/edition-consultation.component';
import { ClientsNonValidesComponent } from './Web/clients/clients-non-valides/clients-non-valides.component';
import { TestComponent } from './Web/test/test.component';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import { CommerciauxComponent } from './Web/commerciaux/commerciaux.component';
import { CommandesComponent } from './Web/commandes/commandes.component';
import { NavComponent } from './Web/nav/nav.component';
import { AjouterCommercialComponent } from './Web/commerciaux/ajouter-commercial/ajouter-commercial.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { EditionCommerciauxComponent } from './Web/commerciaux/edition-commerciaux/edition-commerciaux.component';
import { ObjectifComponent } from './Web/commerciaux/objectif/objectif.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    GestionDesAdminsComponent,
    AjouterClientComponent,
    EditionConsultationComponent,
    ClientsNonValidesComponent,
    TestComponent,
    CommerciauxComponent,
    CommandesComponent,
    NavComponent,
    AjouterCommercialComponent,
    EditionCommerciauxComponent,
    ObjectifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatOptionModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule
],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
