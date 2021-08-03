import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Recipe} from './recipe/recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }


  public apiKey = "207156f6a227e7d81a80d58d76ab0574";
  public appId = "e3f8630c"
  public apiBase = "https://api.edamam.com/api/recipes/v2?type=public";
  /*  This is the search term we are searching we need to figure out what to do with*/
  //both search term and preference will likely need to be moved into the method call so it can be changed based on user
  //preferences from the survey once we are ready for this, still waiting for User tables to be finalized before I go ahead with
  //modifying this method call
  public searchTerm = "chicken";
  public FoodPreference = "keto-friendly"

  callRecipe() {
    //this method returns an observable containing an array of ALL hits returned by the edaman nutrition recipe search API
    //it will need to be subscribed in the component class later
    let response =this.http.get<Recipe>(this.apiBase + '&q=' + this.searchTerm + '&app_id=' + this.appId + '&app_key=' + this.apiKey + "&random=true")
    return response;  }
}
