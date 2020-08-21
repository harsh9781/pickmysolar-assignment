import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdatedialogComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  cancel() {
    this.dialogRef.close();
  }
  
  submit() {
    this.dialogRef.close({ data: 'Yes' });
  }

}
