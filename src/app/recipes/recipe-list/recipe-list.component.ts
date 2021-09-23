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
    new Recipe('A Juice','This is simple a test','https://www.news-medical.net/image.axd?picture=2018%2F4%2Fshutterstock_1By_stockcreations.jpg'),
    new Recipe('A Burger','This is simple a test','https://www.simplyrecipes.com/thmb/x_Ua1kQUTAHP_aGBSlPmBZVrkGU=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__06__HT-Grill-Burger-LEAD-HORIZONTAL-4d92f9ebd3c742a5b84c1254e2770eab.jpg')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
  

  onRecipeSected(recipe: Recipe)
  {
    this.recipewasSelected.emit(recipe);
  }

}
