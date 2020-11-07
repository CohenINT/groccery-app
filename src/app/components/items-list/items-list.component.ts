import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import {Item} from '../../types/Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
    console.log("check this out");

  }
  public itemList: Item[];

  ngOnInit(): void {
  }

  FetchItemsByUserid(userid: string): any
  {
      this.itemsService.fetchItems("12").subscribe(data => {

      console.log(data);
      this.itemList = data;

    });


  }

}
