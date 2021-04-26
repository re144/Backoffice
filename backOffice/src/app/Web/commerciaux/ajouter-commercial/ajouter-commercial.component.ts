import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {GestionDesCommerciaux} from "../../../services/gestion-des-commerciaux";

@Component({
  selector: 'app-ajouter-commercial',
  templateUrl: './ajouter-commercial.component.html',
  styleUrls: ['./ajouter-commercial.component.css']
})
export class AjouterCommercialComponent implements OnInit {

  constructor(public gestionDesCommerciaux: GestionDesCommerciaux) { }
  hide = true;
  status_com = true;
  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    console.log(f.value);
    this.gestionDesCommerciaux.AjoutCommercial(f);
  }
}
