import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //aquí podemos crear variables:
  //NOMBRE: TIPO = VALOR;
  //NOMBRE = Clase(VALOR);
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre: new FormControl('',[Validators.minLength(3),Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear métodos:
  public registrar():void{
    //validaciones? llamar un DAO? conversión?
    console.log(this.persona.value);
    alert("registrado!");
    this.router.navigate(['/login']);
  }

}
