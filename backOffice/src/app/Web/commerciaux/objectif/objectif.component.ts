import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GestionDesCommerciaux} from '../../../services/gestion-des-commerciaux';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {

  constructor(public gestionDesCommerciaux: GestionDesCommerciaux) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void{
    console.log(f.value);
   this.gestionDesCommerciaux.ModifierObjectif(f, this.gestionDesCommerciaux.objectif.id_objectif);
  }
  OnAjoutObjectif(f: NgForm): void{
    this.gestionDesCommerciaux.OnAjoutObjectif(f);
  }

}
