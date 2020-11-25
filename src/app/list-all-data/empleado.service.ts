import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Empleado } from './empleado';
import { Datos } from './datos';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute, } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class EmpleadoService {
  private url: string = 'http://localhost:8071/';
  private http = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  body: any;
  getEmpleados(): Observable<any> {

    return this.httpClient.get(this.url + 'readAllData').pipe(
      map((response: any) => {
        (response.data as Empleado[]);


        console.log(response);
        return response;
      })
    );
  }
  addEmpleado(empleado: any): Observable<any> {
    if(empleado ){
    return this.httpClient.post<any>(this.url + 'createData', empleado, { headers: this.http }).pipe(
      catchError(e =>{
        if(e.data === 206){
          console.log(e.data);
          return throwError(e);
        }
        console.log(e.code);
        return throwError(e);
      })
      )
    }else{
      this.router.navigate(['/ListaEmpleados']);
    }

  }
  BuscarEmpleado(id = 0 ): Observable<any> {

    return this.httpClient.get<any>(`${this.url}readData?id=${id}`).pipe(
      map((response: any) => {
        (response.data as Empleado);
        return response;
      })
    );
  }
  actualizarEmpleado(empleado: any): Observable<any> {
    return this.httpClient.put(this.url + 'updateData', empleado, { headers: this.http });
  }
  Deleteall(): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'deleteAllData');
  }
  DeleteEmpleado(id): Observable<any> {
    return this.httpClient.delete(this.url + `deleteData?id=${id}`);
  }

}
