import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.scss']
})
export class LogindialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LogindialogComponent>,
    public dialog: MatDialog,
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
