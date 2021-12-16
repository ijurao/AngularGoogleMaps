import { Marker } from './../../_models/marker';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  markers: Marker[] = [];
  mapClickListener: any;
  map: any;
  zone: any;

  constructor(private _snackBar: MatSnackBar, private  _dialog: MatDialog) {

    if(localStorage.getItem("markers"))
    {
       console.log(localStorage.getItem("markers"))
       this.markers = JSON.parse(localStorage.getItem("markers") || '{}');
    }
   }


  ngOnInit() {
  }
  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      const newlat = e.latLng.lat();
      const newLng =  e.latLng.lng();
      const newMarker = new Marker(newlat,newLng);
      this.markers.push(newMarker);
      this.saveToStorage();
      this._snackBar.open('Marker added');


    });
  }

  saveToStorage(){
    localStorage.setItem("markers",JSON.stringify(this.markers));
  }

  deleteMarker(i:number){
     this.markers.splice(i,1);
     this.saveToStorage();
     this._snackBar.open('Marker deleted');

  }

  edit(i:number){
    let dialogRef = this._dialog.open(MapEditComponent, {
      height: '300px',
      width: '300px',
      data: {index: i}
    },
    );
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
         this.saveData(result,i);
      }
     // console.log(result);
    });


  }

  saveData(result:any,i:number)
  {
      const markerToEdit = this.markers[i];
      markerToEdit.title = result.title;
      markerToEdit.description = result.description;
      this.markers[i] = markerToEdit;
      this.saveToStorage();

  }




}
