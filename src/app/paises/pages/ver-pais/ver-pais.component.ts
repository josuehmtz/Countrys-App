import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisesServices: PaisesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisesServices.getPaisPorCodigo(param.id) ),
      )
      .subscribe(pais => this.pais = pais );
  }

}
