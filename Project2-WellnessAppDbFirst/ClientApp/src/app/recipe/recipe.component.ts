import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe, RecipeClass } from './recipe';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
/** recipe component*/
export class RecipeComponent {
  /** recipe ctor */

  


  public searchResult: Recipe;
  public singleRecipe: RecipeClass;

  constructor(private api: RecipeService) {
    this.singleRecipe = this.getRecipe();
    
  }
  

getRecipe():any {
  //this method subscibes the observable from the Recipe Service
  this.api.callRecipe().subscribe(result => {
    this.searchResult = result;
    this.singleRecipe = this.searchResult.hits[0].recipe;
    //This next line is what calculates calories/serving for the given recipe
    this.singleRecipe.servingcalories = (this.singleRecipe.calories / this.singleRecipe.yield);
 
    console.log(this.singleRecipe)
    return this.singleRecipe
  })

}
}
