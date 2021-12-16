export class Marker {
  public latitude:number = 0;
  public lng:number = 0;
  public title:string = 'No Title';
  public description:string = 'No Description'

  constructor(l:number, ln:number) {

       this.latitude = l;
       this.lng = ln;
  }

}
