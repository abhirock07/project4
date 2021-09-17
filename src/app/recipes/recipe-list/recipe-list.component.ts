import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe('A Test Recipe','This is simple a test','https://cdn.w600.comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg'),
    new Recipe('A Test Recipe','This is simple a test','https://cdn.w600.comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipewasSelected.emit(recipe);
  }

}
