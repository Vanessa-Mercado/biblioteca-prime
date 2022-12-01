import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Libro } from 'src/app/interfaces/libro.interface';
import { LibrosService } from 'src/app/servicios/libros.service';

import { Autor } from 'src/app/interfaces/autor.interface';
import { AutoresService } from 'src/app/autores/autores.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libros.component.html',
  styleUrls: ['./formulario-libros.component.css']
})
 export class FormularioLibroComponent implements OnInit {
  limpiarFormulario() {
    throw new Error('Method not implemented.');
  }

  codigo: number | null=null;
   titulo: string | null=null;
   idautor: number | null = null
   paginas: number | null=null;

   codigoValido: boolean=true;
   tituloValido: boolean=true;
   autorValido: boolean=true;
   paginasValidas: boolean=true;
 
  guardando: boolean = false;
  mensajes: Message[] = [];

  modo : 'Registrador' | 'Editar' = 'Registrador' ;
   listaAutores: Autor[] = [];
  
  recargarLibros: EventEmitter<boolean> = new EventEmitter();
 
  
 
  constructor(
    private servicioLibros: LibrosService,
    private servicioAutores: AutoresService
  ) { }

  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores() {
    this.servicioAutores.get().subscribe({
      next: (autores: Autor[]) => {
        this.listaAutores = autores;
      },
      error: (e) => {
        console.log('Error al cargar autores');
        console.log(e);
        this.mensajes = [{ severity: 'error', summary: 'Error al cargar autores', detail: e.error }];
      }
    });
  }

  guardar() {
    this.validar();
    if(this.codigoValido && this.tituloValido && this.autorValido && this.paginasValidas){
      const libro: Libro = {
        id: this.codigo,
        titulo: this.titulo,
        idautor: this.idautor,
        autor: null,
        paginas: this.paginas,
        this: undefined
      }
      this.guardando = true;
      this.servicioLibros.post(libro).subscribe({
        next: ()=>{
          this.guardando = false;
          this.mensajes=[{severity: 'success', summary: 'Éxito', detail: 'Se registró el libro'}];
        this.recargarLibros.emit(true);
        },
        error: (e) => {
          this.guardando = false;
          console.log(e)
          this.mensajes=[{severity: 'error', summary: 'Error al registrar', detail: e.error }];
        }
      });
      if(this.modo === 'Registrador'){
        this.registrar(libro);
      }else
      this.editar(libro);
    }
  }
  validar() {
    throw new Error('Method not implemented.');
  }

  private registrar(libro: Libro){
    this.guardando = true;
    this.servicioLibros.post(libro).subscribe({
      
      next: ()=>{
        this.guardando = false;
        this.mensajes=[{severity: 'success', summary: 'Éxito', detail: 'Se registró el libro'}];
      this.recargarLibros.emit(true);
      },
      error: (e) => {
        this.guardando = false;
        console.log(e)
        this.mensajes=[{severity: 'error', summary: 'Error al registrar', detail: e.error }];
      }
    });
  }

  
  private editar(libro: Libro) {
    this.guardando = true;
    this.servicioLibros.put(libro. this.idactual).subscribe({
      next: () => {
        this.guardando = false;
        this.mensajes = [{ severity: 'success', summary: 'Éxito', detail: 'Se editó el libro' }];
        this.recargarLibros.emit(true);
      },
      error: (e) => {
        this.guardando = false;
        this.mensajes = [{ severity: 'error', summary: 'Error al editar', detail: e.error }];

      }      
    });

  

  validar(); boolean: {
    this.codigoValido = this.codigo !== null;
    this.tituloValido = this.titulo !== null && this.titulo?.length > 0;
    this.autorValido = this.idautor !== null;
    this.paginasValidas = this.paginas !== null;
    return this.codigoValido && this.tituloValido && this.autorValido && this.paginasValidas;
  }

  this.limpiarFormulario(); { 
    this.codigo = null;
    this.titulo = null;
    this.idautor = null;
    this.paginas = null;

    this.codigoValido = true;
    this.tituloValido = true;
    this.autorValido = true;
    this.paginasValidas = true;

    this.mensajes = [];

  }


}
  idactual(libro: Libro, idactual: any) {
    throw new Error('Method not implemented.');
  }
 }
function validar() {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: { next: () => void; error: (e: any) => void; }) {
  throw new Error('Function not implemented.');
}

