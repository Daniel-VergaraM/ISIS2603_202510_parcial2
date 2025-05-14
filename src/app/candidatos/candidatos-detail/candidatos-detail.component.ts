import { Component, OnInit, Input } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Candidato } from '../candidato';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css',
})
export class CandidatosDetailComponent implements OnInit {
  id!: string;
  @Input() candidato!: Candidato;

  constructor(
    private route: ActivatedRoute,
    private service: CandidatosService
  ) {}

  getCandidato(): void {
    this.service.getCandidato(this.id).subscribe((data) => {
      console.log(data)
      this.candidato = data;
    });
  }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap);
    if (this.candidato === undefined) {
      this.id = this.route.snapshot.paramMap.get('id')!;
      console.log(this.id);
      if (this.id) {
        this.getCandidato();
      }
    }
  }
}
