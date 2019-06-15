import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RegionesService {

  constructor(protected http: HttpClient) { }

  getRegiones() {
    return this.http.get('https://private-anon-3d7532cb99-testphonebook.apiary-mock.com/region');
  }
}