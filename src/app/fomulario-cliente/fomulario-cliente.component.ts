import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadoService } from './../list-all-data/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../list-all-data/empleado';
import { Router, ActivatedRoute, } from '@angular/router';


@Component({
  selector: 'app-fomulario-cliente',
  templateUrl: './fomulario-cliente.component.html',
  styleUrls: ['./fomulario-cliente.component.css']
})
export class FomularioClienteComponent implements OnInit {
  empleado: Empleado = new Empleado
  Empl:Empleado;
  forma: FormGroup;
  Val:any;
  errores: string[];
  constructor(private empleadoService: EmpleadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarEmpleado();
  }
      cargarEmpleado(): void{
        this.activatedRoute.queryParams.subscribe(params => {

          this.empleadoService.BuscarEmpleado(params.id).subscribe(response => {
            this.Empl = response as Empleado;
            console.log( "query"+params.id);
            console.log(this.Empl);
            this.Val=this.forma = this.fb.group({
              id: [this.Empl.id,Validators.required ,],
              data: this.fb.group({
                nombre: [response.data.nombre, Validators.required,],
                telefono: [response.data.telefono, Validators.required ,],
                estado: [response.data.estado, Validators.required,],
                compania: [response.data.compania, Validators.required ,]

              })
            });
          });
       })


      }

  crearFormulario() {
    this.forma = this.fb.group({
      id: ['',,],
      data: this.fb.group({
        nombre: ['',,],
        telefono: ['',,],
        estado: ['', ,],
        compania: ['',,]

      })
    });
    console.log(this.forma.value);


  }

  guardar() {
    console.log(this.forma);
    console.log(this.forma.value);
  }


  public agregarDatos(): void {

      this.empleadoService.addEmpleado(this.forma.value).subscribe(
      empleado => {

        this.router.navigate(['/ListaEmpleados']);

      },
      err =>{

        this.router.navigate(['/ListaEmpleados']);
        this.errores = err.code as string[];
        console.log( this.errores);
        console.log("cvo"+err);
      }

    );

  }
 public actualizar():void{
   this.empleadoService.actualizarEmpleado(this.forma.value).subscribe(
     empleado =>{
      this.router.navigate(['/ListaEmpleados']);
     },err=>{
      this.router.navigate(['/ListaEmpleados']);
      this.errores = err.code as string[];
     }
   );
   console.log(this.forma.value);
 }


}
