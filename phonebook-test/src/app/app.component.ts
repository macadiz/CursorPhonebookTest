import { Component, NgModule } from '@angular/core';
import { PersonasService } from './services/PersonasService';
import { RegionesService } from './services/RegionesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService, RegionesService]
})
export class AppComponent {
  title = 'phonebook-test';
  personas: any[] = [];
  personasDisplay = [];
  sinResultados = false;

  constructor(
    protected personasService: PersonasService,
    protected regionesService: RegionesService
  ) {
  }

  ngOnInit() {
    this.personasService.getPersonas().subscribe(
      (data) => {
        this.personas = data as any[];
        console.log(this.personas);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  buscar(form) {
    let busquedaPersonas = this.personas.filter((p) => {
      var nombreCompleto = p.nombre ? p.nombre + (p.apellido ? " " + p.apellido : "") : p.apellido ? p.apellido : "";
      return nombreCompleto.toLowerCase().indexOf(form.nombre.toLowerCase()) != -1 && p.activo == 1;
    });
    this.sinResultados = busquedaPersonas.length == 0;
    this.personasDisplay = busquedaPersonas != null ? busquedaPersonas : [];
  }

}
