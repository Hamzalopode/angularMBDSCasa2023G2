import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsComponent } from '../assignments.component';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis!: Assignment;
  @Output() delAssignment = new EventEmitter<Assignment>();

  deleteElem(_el:any){
    this.delAssignment.emit(_el);
    //this.assignmentTransmis = undefined;
  }
}
