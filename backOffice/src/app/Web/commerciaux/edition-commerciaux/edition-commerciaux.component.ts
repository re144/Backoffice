import { Component, OnInit } from '@angular/core';
import {GestionDesCommerciaux} from '../../../services/gestion-des-commerciaux';
import {NgForm} from '@angular/forms';
import {isObservable} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-edition-commerciaux',
  templateUrl: './edition-commerciaux.component.html',
  styleUrls: ['./edition-commerciaux.component.css']
})
export class EditionCommerciauxComponent implements OnInit {
  private imagePath: any;
  // @ts-ignore
  private message: string;

  constructor(public gestionDesCommerciaux: GestionDesCommerciaux) { }
  hide = true;
  imgURL: any;
  userFile: any;
  status_com = true;
  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void{
    console.log(f.value);
    this.gestionDesCommerciaux.ModifierCommercial(f, this.gestionDesCommerciaux.commercial_consulte.id_commercial);
  }
  clear(): void{
    this.imgURL = null;
  }
  onSelectFile(event: Event): void {
    // @ts-ignore
    if (event.target.files.length > 0)
    {
      // @ts-ignore
      const file = event.target.files[0];
      this.userFile = file;
      // @ts-ignore
      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      const reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      // tslint:disable-next-line:variable-name
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }

  }
}
