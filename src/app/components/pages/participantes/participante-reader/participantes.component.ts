import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from '../participantes.service';
import { Participante as Participate } from '../participante.model';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  participante: Participate[] = []; 
  displayedColumns: string[] = ['nomeParticipante', 'idParticipante', 'matricula', 'cpf', 'plano', 'sexo', 'dataAdmissao', 'dataDoCadastro'];
  
  constructor(private service: ParticipantesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.participante = resposta;
    });
  }


}
