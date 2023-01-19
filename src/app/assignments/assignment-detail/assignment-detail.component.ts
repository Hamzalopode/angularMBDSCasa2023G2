import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { AssignmentsComponent } from '../assignments.component';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis?: Assignment;
  @Output() delAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentsService: AssignmentsService){}

  deleteElem(_el:any){
    this.delAssignment.emit(_el);
    this.assignmentTransmis = undefined;
  }

  onAssignmentRendu(){
    if (!this.assignmentTransmis) return;
      this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignments(this.assignmentTransmis)
    .subscribe(message => {
      console.log(message);
    });
  }
}
