import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PersonasService {

  constructor(protected http: HttpClient) { }

  getPersonas() {
    return this.http.get('https://private-anon-3d7532cb99-testphonebook.apiary-mock.com/persona');
  }
}