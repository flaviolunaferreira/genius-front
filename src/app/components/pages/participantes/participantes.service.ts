import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participante } from './participante.model';

@Injectable({
  providedIn: 'root'
})

export class ParticipantesService {

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Participante[]> {
    const url = 'api/participantes/';
    return this.http.get<Participante[]>(url)
  }

}
