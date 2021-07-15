import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionactiva: string = '';
  paises: Country[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string{
    return (region === this.regionactiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if (region === this.regionactiva) { return; }
    this.regionactiva = region;
    this.paises= [];
    this.paisesService.getPaisesRegion(region)
    .subscribe(paises => {
      this.paises = paises;
    });
  }

}
