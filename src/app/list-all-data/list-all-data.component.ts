import { EmpleadoService } from './empleado.service';
import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-all-data',
  templateUrl: './list-all-data.component.html',
  styleUrls: ['./list-all-data.component.css']
})

export class ListAllDataComponent implements OnInit {
  Empleados: Empleado[];
  Empl: Empleado;
  errores: string[];

  constructor(private empleadoService: EmpleadoService,
              private router: Router,
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(

      response => {
        this.Empleados = response as Empleado[];
        console.log('datos' +  this.Empleados);
      });
    //console.log(this.Empleados);
  }
  deleteAll():void{
    this.empleadoService.Deleteall().subscribe(empleado => {
      this.router.navigate(['/ListaEmpleados']);

    },err => {
      this.router.navigate(['/ListaEmpleados']);
      this.errores = err.code as string[];
      console.log(err.code);
      location.reload();
    }
  );

  }
  deleteEmpleado(empl: Empleado): void{

      this.empleadoService.DeleteEmpleado(empl.id).subscribe(
        empleados =>{
        this.router.navigate(['/ListaEmpleados']);
        location.reload();

    },err=>{
      this.router.navigate(['/ListaEmpleados']);
      this.errores = err.code as string[];
      console.log(err.code);
      location.reload();
    }
      );
  }

}
