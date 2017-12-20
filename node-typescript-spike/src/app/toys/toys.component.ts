import { Component, OnInit } from '@angular/core';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
 selector: 'app-toys',
 templateUrl: './toys.component.html',
 styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

 selectedToy: Toy;

 toys: Toy[];

 constructor(private toyService: ToyService) { }

 ngOnInit() {
   this.getToys();
 }

 onSelect(toy: Toy): void {
   this.selectedToy = toy;
 }

 getToys(): void {
   this.toyService.getToys()
       .subscribe(toys => this.toys = toys);
 }


}