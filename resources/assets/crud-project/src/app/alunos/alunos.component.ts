import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Aluno } from '../aluno';
//import { ALUNOS } from '../mock-alunos';

import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @ViewChild('novoAluno') novoAluno: ElementRef;

  idNumber: number;

  alunos : Aluno[];
  selectedAluno: Aluno;

  constructor(private alunoService: AlunoService) {

  }

  ngOnInit() {

    this.alunoService.getAlunos() .subscribe(
      (alunos) => {
        this.alunos = alunos;
        console.log(alunos);
      },
      (err) => { }
    );

  }

  onSelect(aluno: Aluno):void {
    this.selectedAluno = aluno;
    console.log(aluno)
  }

  deleteAluno(aluno : Aluno){

   this.alunoService.deleteAluno(aluno.id).subscribe(
      (res) => {
        console.log(res)
        this.alunos.splice(
        this.alunos.indexOf(aluno), 1);   
      } );
  }

  addAluno(name){

    //this.alunos.push({id: this.idNumber++, name: name});
    //this.novoAluno.nativeElement.value = '';

    this.alunoService.createAluno(name).subscribe((res) => {
      console.log(res.aluno)
      this.alunos.push(res.aluno);
    });
  }
}
