import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../models/Client';
import {Form, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GestionCleintsService implements OnInit{
  clients: any;
  clients1: Client[] = [];
  test: Client[] = [];
  clients_non_valides: object[] = [];
  clients_valides: object[] = [] ;
 // client_a_ajoutee: Client = new Client();
  client_consulte1: any;
  client_consulte: any;
  //afficher le component de validation ou le component de consultation
  validation = false;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
   }
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression

    console.log(this.test);
    this.getClients();
    this.getClientvalidandnonvalid();
  }

  // tslint:disable-next-line:typedef
  getClients(): void {
    this.http
      .get('http://localhost:8080/Clients')
      .subscribe(data => {
        this.clients = data;
        this.clients1 = this.clients;
        this.getClientvalidandnonvalid();

      });
  }

  getClientvalidandnonvalid(): void {
     this.clients_valides = this.clients1.filter( obj => obj.status === true);
     this.clients_non_valides = this.clients1.filter( obj => obj.status === false);
  }
  AjoutClient( f: NgForm): void{
    this.http
      .post('http://localhost:8080/clientses', f.value)
      .subscribe(data => {
        alert('vous avez ajouter un client avec succes');
        this.router.navigate(['/gestion-des-clients'], {relativeTo: this.route});
      }, error => {
        alert('un erreur s\'est produit');
      });
  }
  Supprimer_client(id: number): void{
    this.http.delete('http://localhost:8080/clientses/' + id)
      .subscribe(() => {
        this.getClients();
        alert('Suppression réussie');
      }, error => {alert('un erreur s\'est produit'); });
  }
  getClient_consultee(id: number): void{
    //this.client_a_modifier.emit(id);
    this.http
      .get('http://localhost:8080/Client/' + id)
      .subscribe(data => {
        this.client_consulte1 = data;
        this.client_consulte = this.client_consulte1;

      });
  }
  retour(){
    this.validation = false;
  }
  getClient_a_valider(id: number): void{
    //this.client_a_modifier.emit(id);
    this.validation = true;
    this.http
      .get('http://localhost:8080/Client/' + id)
      .subscribe(data => {
        this.client_consulte1 = data;
        this.client_consulte = this.client_consulte1;

      });
  }
  ModifierClient(form: NgForm, id: number): any{

       this.http
      .put('http://localhost:8080/clientses/' + id, form.value, { headers: new HttpHeaders(({'Content-Type': 'application/json'}))})
      .subscribe(data => {
          console.log(data) ;
          alert('la modification est bien faite');
          this.router.navigate(['/gestion-des-clients'], {relativeTo: this.route}); },
        error => {alert('un erreur s\'est produit'); } );

  }
  validerClient(form: NgForm, id: number): any{
    this.http
      .patch('http://localhost:8080/clientses/' + id,  form.value, { headers: new HttpHeaders(({'Content-Type': 'application/json'}))})
      .subscribe(data => {
          console.log(data) ;
          alert('le client est valide');
         },
        error => {alert('un erreur s\'est produit'); } );
   /* this.http
      .patch('http://localhost:8080/clientses/' + id, { status: true} , { headers: new HttpHeaders(({'Content-Type': 'application/json'}))})
      .subscribe(data => {
          console.log(data) ;
          alert('la modification est bien faite');
          //this.router.navigate(['/gestion-des-clients'], {relativeTo: this.route});
          },
        error => {alert('un erreur s\'est produit'); } );*/

  }
}























/*this.client_a_ajoutee.nom_client = f.value.nom_client;
   this.client_a_ajoutee.contact_client = f.value.contact_client;
   this.client_a_ajoutee.adresse_client = f.value.adresse_client;
   this.client_a_ajoutee.tele1 = f.value.tele1;
   this.client_a_ajoutee.tele2 = f.value.tele2;
   this.client_a_ajoutee.solde = f.value.solde;
   this.client_a_ajoutee.ancien_solde = f.value.ancien_solde;
   this.client_a_ajoutee.solde_cheque = f.value.solde_cheque;
   this.client_a_ajoutee.categorie_client = f.value.categorie_client;
   this.client_a_ajoutee.loclaisation = f.value.localisation;
   this.client_a_ajoutee.zone_client = f.value.zone_client;
   this.client_a_ajoutee.plafond_cheque = f.value.plafond_cheque;
   this.client_a_ajoutee.plafond_effet = f.value.plafond_effet;
   this.client_a_ajoutee.plafond = f.value.plafond;
   this.client_a_ajoutee.credit = f.value.credit;
   this.client_a_ajoutee.delai_paiement = f.value.delai_paiement;
   this.client_a_ajoutee.taux_de_retours = f.value.taux_de_retours;
   this.client_a_ajoutee.caracteristique1 = f.value.caracteristique1;
   this.client_a_ajoutee.caracteristique2 = f.value.caracteristique2;
   this.client_a_ajoutee.caracteristique3 = f.value.caracteristique3;
   this.client_a_ajoutee.caracteristique4 = f.value.caracteristique4;
   this.client_a_ajoutee.caracteristique5 = f.value.caracteristique5;
   this.client_a_ajoutee.caracteristique6 = f.value.caracteristique6;
   this.client_a_ajoutee.caracteristique7 = f.value.caracteristique7;
   this.client_a_ajoutee.caracteristique8 = f.value.caracteristique8;
   this.client_a_ajoutee.list_prix = f.value.list_prix;
   this.client_a_ajoutee.status = false;
   console.log(this.client_a_ajoutee);
 }*/
