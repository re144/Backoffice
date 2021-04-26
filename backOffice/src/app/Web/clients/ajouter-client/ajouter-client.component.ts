import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Client} from '../../../models/Client';
import {GestionCleintsService} from '../../../services/gestionCleints.service';
import {ConfigurationService} from "../../../services/configuration.service";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  client: any;

  constructor(public gestionCleintsService: GestionCleintsService , public config: ConfigurationService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.client = f.value + f.status;
    this.gestionCleintsService.AjoutClient(f);
    f.reset();

  }
}
