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

  

  //This is the users preselected food preference that we need to get from the user registration and have this work
  //also when a guest logs into the website


  public searchResult: Recipe;
  public singleRecipe: RecipeClass;
  //This calls a random recipe from the list, it isn't how I'd like the final call to function and I need to
  //move this into a service instead of having it located in this class, I've been building it
  //with the wrong structure but I'm just focused on getting these calls to work, I realized the structure was wrong woops
  constructor(private api: RecipeService) {
    this.singleRecipe = this.getRecipe();
  }
  

getRecipe():any {
  //this method subscibes the observable from the Recipe
  this.api.callRecipe().subscribe(result => {
    this.searchResult = result;
    this.singleRecipe = this.searchResult.hits[0].recipe;
    console.log(this.singleRecipe)
    return this.singleRecipe
  })

}
}
