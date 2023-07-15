import { Component } from '@angular/core';
import { Aluno } from './modelo/aluno.model';

@Component({
  selector: 'bom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno1: Aluno = {nome: "Diego", nota: 5, aprovado: true};
  aluno2: Aluno = {nome: "Fred", nota: 7, aprovado: true};
  aluno3: Aluno = {nome: "Renan", nota: 6, aprovado: true};
  aluno4: Aluno = {nome: "Julio", nota: 3, aprovado: false};


  // nome: string = "Joaquim";
  // alunos = ['Fred', 'Diego', 'Renan'];
  // aluno = {
  //   turma: 'Técnico em Informática',
  //   nome: 'David Santos',
  //   nota: 8
  // };

  // classe = [
  //   {turma: 'Técnico em Informática', nome: 'David Santos', nota: 8},
  //   {turma: 'Técnico em Informática', nome: 'Diego', nota: 6},
  //   {turma: 'Técnico em Informática', nome: 'Fred', nota: 3},
  //   {turma: 'Técnico em Informática', nome: 'Mauricio', nota: 5},
  //   {turma: 'Técnico em Informática', nome: 'Julio', nota:5},
  //   {turma: 'Técnico em Informática', nome: 'Thiago', nota:4}
  // ];

  // getMensagem(informacao: number): string {
  //   if(informacao === 1) {
  //     return "Mensagem do método";
  //   } else {
  //     return `Mensagem com valor ${informacao}`;
  //   }
  // }
}
