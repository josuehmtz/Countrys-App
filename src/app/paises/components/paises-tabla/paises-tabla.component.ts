import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.css']
})
export class PaisesTablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  @Input() paises: Country[] = [];

}
