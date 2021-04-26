import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class GestionDesCommerciaux implements OnInit{
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }
  commerciaux: any;
  commercial_consulte: any;
  objectif: any;
  id_commercial: any;
  ngOnInit(): void {
    this.getCommerciaux();
  }

  getCommerciaux(): void{
      this.http.
        get('http://localhost:8080/Commerciaux')
        .subscribe( data => {
              this.commerciaux = data;
        });
  }
  AjoutCommercial( f: NgForm): void{
    this.http
      .post('http://localhost:8080/commerciauxes', f.value)
      .subscribe(data => {
        alert('vous avez ajouter un commercial avec succes');
        this.router.navigate(['/commerciaux'], {relativeTo: this.route});
      }, error => {
        alert('un erreur s\'est produit');
      });
  }
  Supprimer_commericla(id: number): void{
    this.http.delete('http://localhost:8080/commerciauxes/' + id)
      .subscribe(() => {
        this.getCommerciaux();
        alert('Suppression réussie');
      }, error => {alert('un erreur s\'est produit'); });
  }
  getCommercial_consultee(id: number): void{
    this.http
      .get('http://localhost:8080/Commercial/' + id)
      .subscribe(data => {
        this.commercial_consulte = data;
      });
  }
  ModifierCommercial(form: NgForm, id: number): void{
    this.http
      .put('http://localhost:8080/commerciauxes/' + id, form.value, { headers: new HttpHeaders(({'Content-Type': 'application/json'}))})
      .subscribe(data => {
           alert('la modification est bien faite');
           this.router.navigate(['/commerciaux'], {relativeTo: this.route}); },
        error => {alert('un erreur s\'est produit'); } );
  }
  getObjectif(id: number){
    this.id_commercial = id;
    this.http
      .get('http://localhost:8080/Objectif/' + id)
      .subscribe(data => {
        this.objectif = data;
      });
    this.router.navigate(['/commerciaux-objectif'], {relativeTo: this.route});
    console.log(id);
  }
  OnAjoutObjectif(f: NgForm){
    this.http
      .post('http://localhost:8080/commerciauxobjectifs', f.value)
      .subscribe(data => {
        alert('vous avez ajouter un objectif avec succes');
        this.router.navigate(['/commerciaux'], {relativeTo: this.route});
      }, error => {
        alert('un erreur s\'est produit');
      });
  }
  ModifierObjectif(f: NgForm, id: number){
    this.http
      .put('http://localhost:8080/commerciauxobjectifs/' + id, f.value, { headers: new HttpHeaders(({'Content-Type': 'application/json'}))})
      .subscribe(data => {
          alert('la modification est bien faite');
          this.router.navigate(['/commerciaux'], {relativeTo: this.route}); },
        error => {alert('un erreur s\'est produit'); } );
  }
}
