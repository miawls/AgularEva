import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmpleadoService} from './list-all-data/empleado.service';
import { AppComponent } from './app.component';
import { ListAllDataComponent } from './list-all-data/list-all-data.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FomularioClienteComponent } from './fomulario-cliente/fomulario-cliente.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavBComponent } from './nav-b/nav-b.component';


const routes: Routes = [
  { path: '', redirectTo: '/ListaEmpleados', pathMatch: 'full' },
  { path: 'ListaEmpleados', component: ListAllDataComponent },
  { path: 'addEmpleado', component: FomularioClienteComponent },
  { path: 'Update', component: FomularioClienteComponent },
  { path: 'delete', component: ListAllDataComponent }
  //{ path: 'clientes/form', component: FormComponent },
//  { //path: 'clientes/form/:id', component: FormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListAllDataComponent,
    FomularioClienteComponent,
    NavBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
