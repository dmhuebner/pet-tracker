import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-medical-event',
  templateUrl: './new-medical-event.component.html',
  styleUrls: ['./new-medical-event.component.scss']
})
export class NewMedicalEventComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewMedicalEventComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
  }

  onSubmit(newMedEventForm: FormGroup) {
    if (newMedEventForm.valid) {
      this.dialogRef.close(newMedEventForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
