 interface IItem
{
  name: string;
  description?: string;
  url?: string;
}


 export class Item implements IItem
{
   name: string;
   description?: string;
   url?: string;
constructor( _name: string,  _description?:string, _url?:string){
  this.name = _name;

}

}
