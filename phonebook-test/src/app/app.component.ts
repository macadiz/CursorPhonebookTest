import { Component, NgModule } from '@angular/core';
import { PersonasService } from './services/PersonasService';
import { RegionesService } from './services/RegionesService';
import UTF8 from './utils/UTF8';
import Validar from './utils/Validar';

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

  regiones: any[] = [];
  comunas: any[] = [];
  selectedRegion = 0;
  selectedComuna = 0;

  constructor(
    protected personasService: PersonasService,
    protected regionesService: RegionesService
  ) {
  }

  ngOnInit() {
    this.personasService.getPersonas().subscribe(
      (data) => {
        this.personas = data as any[];
        this.personas = this.personas.map((p) => {
          if (!Validar.Rut(p.rut)) {
            p.rutNoValido = true;
          }
          if (!Validar.Telefono(p.telefono)) {
            p.telefonoNoValido = true;
          }
          p.nombre = UTF8.decode(p.nombre);
          p.apellido = UTF8.decode(p.apellido);
          if (p.direccion) {
            p.direccion.calle = UTF8.decode(p.direccion.calle);
            if (p.direccion.comuna) {
              p.direccion.comuna.nombre = p.direccion.comuna.nombre ? UTF8.decode(p.direccion.comuna.nombre) : null;
            }
          }
          return p;
        });
      },
      (error) => {
        console.error(error);
      }
    )

    this.regionesService.getRegiones().subscribe((data) => {
      this.regiones = data as any[];
      this.regiones = this.regiones.map((r)=> {
        r.nombre = UTF8.decode(r.nombre);
        r.comunas.map((c)=> {
          c.nombre = UTF8.decode(c.nombre);
          return c;
        });
        return r;
      });
    },
      (error) => {
        console.error(error);
      })
  }

  buscar(form) {
    let busquedaPersonas = this.personas.filter((p) => {
      var nombreCompleto = p.nombre ? p.nombre + (p.apellido ? " " + p.apellido : "") : p.apellido ? p.apellido : "";
      return nombreCompleto.toLowerCase().indexOf(form.nombre_persona.toLowerCase()) != -1 && p.activo == 1 && (this.selectedComuna ? p.direccion.comuna.id == this.selectedComuna : true);
    });
    this.sinResultados = busquedaPersonas.length == 0;
    this.personasDisplay = busquedaPersonas != null ? busquedaPersonas : [];
  }

  setRegion(reg): void {
    this.selectedComuna = null;
    this.selectedRegion = reg;
    let region = this.regiones.find((r)=> {
      return r.id == reg;
    })
    this.comunas = region ? region.comunas : [];
  }

  setComuna(comuna): void {
    this.selectedComuna = comuna;
    let nombre_persona = document.getElementById("nombre_persona").nodeValue;
    this.buscar({ nombre_persona: nombre_persona ? nombre_persona : "" });
  }
}
