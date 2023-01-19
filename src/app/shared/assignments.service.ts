import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2023-01-26"),
      rendu : false
    },
    {
      nom:"Devoir R de Mr Pasquier",
      dateDeRendu: new Date("2023-02-15"),
      rendu : false
    },
    {
      nom:"Devoir Grails de Mr galli",
      dateDeRendu: new Date("2022-12-16"),
      rendu : true
    }
  ];
  constructor(private loggingService: LoggingService) { }

  /*Return Observable du tableau assignments et consommer avec un subscribe()*/
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignments(assignment:Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of("Assignment ajouté");
  }

  updateAssignments(assignment: Assignment): Observable<string>{
    this.loggingService.log(assignment.nom, "modifié");
    return of("Assignment modifié");
  }

  deleteAssignments(assignment: Assignment): Observable<string>{
    this.assignments.splice(this.assignments.indexOf(assignment), 1);
    this.loggingService.log(assignment.nom, "supprimé");
    return of("Assignment supprimé");
  }
}
