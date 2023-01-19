import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit{
  titre = 'Liste des Assignments';
  formVisible=false;

  assignmentSelectionne!:Assignment;

  assignments:Assignment[] = [];

  constructor(private assignmentsService:AssignmentsService){

  }

  ngOnInit(){
    console.log("Avant Affichage");

    // On cherche data with service
    this.assignmentsService.getAssignments()
    .subscribe(assignments =>{
      this.assignments = assignments;
    });

  }

  getColor(a:any) {
    if (a.rendu) {
      return 'green';
    } else {
      return 'red';
    }
  }

  assignmentClique(a:Assignment) {
    console.log("CLICK : " + a.nom);
    this.assignmentSelectionne = a;
  }

  onAddAssignment(a:Assignment) {
    // on ajoute l'assignment envoyé par le fils au tableau
    // this.assignments.push(a);
    this.assignmentsService.addAssignments(a)
    .subscribe(message =>{
      console.log(message);
      // on cache le formulaire et on affiche la liste
      this.formVisible = false;
    })

  }

  onDeleteAssignment(a:Assignment) {
    // on ajoute l'assignment envoyé par le fils au tableau
    console.log(a);
    this.assignmentsService.deleteAssignments(a)
    .subscribe(message =>{
      console.log(message);
    });

  }
}
