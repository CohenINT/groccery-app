import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemsService } from 'src/app/services/items/items.service';
import {Item} from '../../types/Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
    console.log('ItemsList componenet initiated.');
    const sub  =  this.FetchItemsByUserid("asf");

  }
  public itemList: Array<Item>;

  ngOnInit(): void {
  }

  FetchItemsByUserid(userid: string): any
  {
       const subscription  = this.itemsService.fetchItems(userid).subscribe((value: Item[]) => {
        value.forEach(element => {
          console.log(element);
          this.itemList = value;
        });
       });
  }

}
