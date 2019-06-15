import { Component, Input } from '@angular/core';
import { PersonasService } from '../services/PersonasService';

@Component({
  selector: 'personas-component',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonasService],
})
export class PersonasComponent {

  @Input() persona: Object;
  title = 'phonebook-test';
  personas: any[] = [];
  showDescripcion = false;

  constructor(
    protected personasService: PersonasService
  ) {
  }

  toggleDescripcion() {
    this.showDescripcion = !this.showDescripcion;
  }
}
