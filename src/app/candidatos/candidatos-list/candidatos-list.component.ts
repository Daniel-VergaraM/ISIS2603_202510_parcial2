import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Candidato } from '../candidato';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css',
})
export class CandidatosListComponent implements OnInit {
  candidatos: Candidato[] = [];

  @Output() candidatoSeleccionado!: Candidato;
  seleccionado = false;
  

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }

  getCandidatos() {
    this.service.getCandidatos().subscribe((data) => {
      let d = data.candidatos
      if (d) {
        this.candidatos = d
      }
    });
  }

  constructor(private service: CandidatosService) {}

  ngOnInit(): void {
    this.getCandidatos();
  }
}
