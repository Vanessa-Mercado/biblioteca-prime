import { Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/libro.interface';
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  listaLibros: Libro[] = [];

  constructor(
    private serviciolibros: LibrosService
  ) { }

  ngOnInit(): void {
  }

}


