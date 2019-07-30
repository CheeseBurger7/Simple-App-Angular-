import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

// import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'dish-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dish: Dish;

  constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    const id  = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
