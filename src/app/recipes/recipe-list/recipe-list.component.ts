import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A Test Recipe','This is simple a test','https://cdn.w600.comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg'),
    new Recipe('A Test Recipe','This is simple a test','https://cdn.w600.comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
