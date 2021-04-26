import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  // tslint:disable-next-line:variable-name
  public email_required = false;
  public tele2_required = false;
  public ancien_solde_required = false;
  public caract4_required = false;
  public caract5_required = false;
  public caract6_required = false;
  public caract7_required = false;
  public caract8_required = false;
}
