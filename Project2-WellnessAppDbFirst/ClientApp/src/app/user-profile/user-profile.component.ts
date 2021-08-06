import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { getBaseUrl } from '../../main';
import { UserProfile } from '../userProfile';
import { UserProfileService } from '../userProfile.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
/** UserProfile component*/
export class UserProfileComponent {
  /** UserProfile ctor */


  currentUserId: any;
  


    constructor(private userProfileService: UserProfileService, private authorize: AuthorizeService) {
    
      this.authorize.getUser().subscribe((result): any => {
        console.log(result)
        this.currentUserId = result;
      })
  }

  postUserProfile(form: NgForm) {

    let firstName = form.form.value.firstName;
    let birthDate = form.form.value.birthDate;
    let foodRegimenFk = form.form.value.foodRegimenFk;
    let philosophySchoolFk = form.form.value.philosophySchoolFk;
    let profile: UserProfile = {
      
      firstName: firstName,
      birthDate: birthDate,
      aspNetUserFk: this.currentUserId.sub,
      foodRegimenFk: foodRegimenFk, philosophySchoolFk: philosophySchoolFk, aspNetUserFkNavigation: null,
      foodRegimenFkNavigation: null,
      philosophySchoolFkNavigation: null

    }
    console.log(profile);
    this.userProfileService.postUserProfile(getBaseUrl(), profile)
    
  }
}
