import { Component, OnInit } from '@angular/core';
import {GestionCleintsService} from '../../../services/gestionCleints.service';
import {ConfigurationService} from '../../../services/configuration.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edition-consultation',
  templateUrl: './edition-consultation.component.html',
  styleUrls: ['./edition-consultation.component.css']
})
export class EditionConsultationComponent implements OnInit {

  constructor(public gestionCleintsService: GestionCleintsService , public config: ConfigurationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
   onSubmit(f: NgForm): void{
    if (!this.gestionCleintsService.validation){
      this.gestionCleintsService.ModifierClient(f, this.gestionCleintsService.client_consulte.id_client);
    }
    else {
      this.gestionCleintsService.validerClient(f, this.gestionCleintsService.client_consulte.id_client);

    }
     this.gestionCleintsService.retour();
    //f.reset();
  }
  Retour(){
    this.router.navigate(['/gestion-des-clients'], {relativeTo: this.route});
    this.gestionCleintsService.retour();
  }
}
