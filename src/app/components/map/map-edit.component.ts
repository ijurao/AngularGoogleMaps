import { Marker } from './../../_models/marker';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, _MatDialogContainerBase} from '@angular/material/dialog';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  index: number = 0;
  markerToEdit:Marker | undefined ;
  form!: FormGroup ;
  constructor(public dialogRef:MatDialogRef<MapEditComponent>,@Inject(MAT_DIALOG_DATA) public data: {index: number}, private fb: FormBuilder) {
   this.index = data.index;

  }

  ngOnInit(): void {

    const markers = JSON.parse(localStorage.getItem("markers") || '{}');
    this.markerToEdit = markers[this.index];
    this.buildForm();

  }

  buildForm(){
    this.form = this.fb.group({
      'title': this.markerToEdit?.title,
      'description':this.markerToEdit?.description

     })

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  onNoClick():void{
        this.dialogRef.close();
  }

}
