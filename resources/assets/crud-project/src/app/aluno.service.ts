import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlunoService {

  private headers = new Headers({'Content-Type': 'application/json' });

  private options = new RequestOptions({headers: this.headers});

  alunosApiUrl: string = 'http://localhost:8000/api/alunos/';

  constructor(private http: Http) { }

  getAlunos(): Observable<any> {
	   return this.http.get(this.alunosApiUrl)
	    .map(res => res.json().alunos)
 }

  createAluno(name: string): Observable<any> {
    return this.http.post(this.alunosApiUrl, { name }, this.options)
	   .map(res => res.json());
  }

  deleteAluno (id : number) : Observable<any> {
    return this.http.delete(this.alunosApiUrl+id , this.options).map(res => res.json());
  }



}
