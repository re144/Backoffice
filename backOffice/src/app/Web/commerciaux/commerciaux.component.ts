import {Component, OnInit, ViewChild} from '@angular/core';
import {GestionDesCommerciaux} from '../../services/gestion-des-commerciaux';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-commerciaux',
  templateUrl: './commerciaux.component.html',
  styleUrls: ['./commerciaux.component.css']
})
export class CommerciauxComponent implements OnInit {
  displayedColumns: string[] = ['id_client', 'nom_utilisateur', 'cin', 'date_activite_debut', 'date_activite_fin', 'objectif', 'edit', 'delete'];
  constructor(public gestionDesCommerciaux: GestionDesCommerciaux, private router: Router, private activatedRoute: ActivatedRoute) { }
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.gestionDesCommerciaux.commerciaux) ;
  filtrage: any;
  ngOnInit(): void {
    this.gestionDesCommerciaux.getCommerciaux();
    setTimeout(
      () => {
    this.dataSource = new MatTableDataSource(this.gestionDesCommerciaux.commerciaux) ;
    this.dataSource.paginator = this.paginator; }, 100
      );
  }

  appliquerfilter(filtervalue: string){
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }
  OnModifier(id: number){
     this.gestionDesCommerciaux.getCommercial_consultee(id);
    this.router.navigate(['/commerciaux-edition'], {relativeTo: this.activatedRoute});
  }
  OnSupprimer(id: number){
    this.gestionDesCommerciaux.Supprimer_commericla(id);
    setTimeout(
      () => {
         this.dataSource = new MatTableDataSource(this.gestionDesCommerciaux.commerciaux) ;
         this.dataSource.paginator = this.paginator; }, 10
    );
    /*this.gestionClient.delete_client(id);*/
    this.router.navigate(['/commerciaux'], {relativeTo: this.activatedRoute});
  }
  Ongetobjectif(id: number){
    this.gestionDesCommerciaux.getObjectif(id);
  }

}
