import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {

  private BASE_URL = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/'

  private apiUrlLst =
    'candidates.json';

  private apiUrlDetail =
    'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/{0}/candidates.json';
  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'candidates.json');
  }

  getCandidato(id: string):Observable<Candidato> {
    return this.http.get<Candidato>(this.BASE_URL + id + '/candidates.json')
  }
}
