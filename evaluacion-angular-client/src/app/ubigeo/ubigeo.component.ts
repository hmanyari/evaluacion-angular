import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UbigeoService } from "../ubigeo.service";
import { Departamento } from "../departamento";
import { Provincia } from "../provincia";
import { Distrito } from "../distrito";

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.css']
})

export class UbigeoComponent implements OnInit {

  departamentos: Observable<Departamento[]>;
  provincias: Observable<Provincia[]>;
  distritos: Observable<Distrito[]>;
  texto = 'Esto será un datepicker';
  constructor(private ubigeoService: UbigeoService) { 
    setTimeout(() => {
      this.texto = 'Este es un datepicker';
    }, 3000);
  }

  ngOnInit() {
    this.cargarDepartamentos();
  }

  cargarDepartamentos() {
    this.departamentos = this.ubigeoService.getDepartamentos();
  }

  cargarProvincias(id: number) {
    this.provincias = this.ubigeoService.getProvincias(id);
  }

  cargarDistritos(id: number) {
    this.distritos = this.ubigeoService.getDistritos(id);
  }

}
