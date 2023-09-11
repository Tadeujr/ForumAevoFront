import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topicos } from '../model/Topicos';
// Importe a classe Topico

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private readonly API = "https://forumaevo20230910184902.azurewebsites.net/api/";
  private readonly apiKey = "f1a29d0f-72a6-4c9a-bd50-b3004d3f776b";
  constructor(private httpClient: HttpClient) { }

  list(): Observable<Topicos[]> {
    const rota ="forum"
    const headers = new HttpHeaders({
      'Token': this.apiKey,
    });

    return this.httpClient.get<Topicos[]>(this.API+rota, { headers: headers });
  }

  postTopico(msg:string,id:number){
    const rota ="topico"
    const headers = new HttpHeaders({
      'Token': this.apiKey,
    });
    return this.httpClient.post<Topicos[]>(this.API, { headers: headers });
  }
}


  //   //take(1)
  //   //first() quando eu quero só receber a primeira resposta do servidor
  //   return this.httpClient.get<Course[]>(this.API, { headers }).pipe(
  //     first(),
  //     delay(5000),
  //     tap(courses => console.log(courses))
  //   );
  // }

  // searchCourses(searchTerm: string) {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer seu-token-aqui'
  //   });

  //   // Você deve ajustar a URL de pesquisa de acordo com sua API.
  //   const searchUrl = `${this.API}/search?term=${searchTerm}`;

  //   return this.httpClient.get<Topicos[]>(searchUrl, { headers });
  // }




