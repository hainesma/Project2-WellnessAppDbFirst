import { Component } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { getBaseUrl } from '../../main';
import { UserProfile } from '../userProfile';
import { UserProfileService } from '../userProfile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/** dashboard component*/
export class DashboardComponent {
  /** dashboard ctor */
  isUserProfileFilledOut: Boolean = false;
  userProfiles: UserProfile[];
  userProfileUrl: string;
  currentUserId: any;
  aspNetUserFk: string;
  constructor(private userProfileService: UserProfileService, private authorizeService: AuthorizeService) {
    this.currentUserId = authorizeService.getUser().subscribe((result): any => {
      console.log(result)
      this.currentUserId = result;
      this.aspNetUserFk = this.currentUserId.sub;
      console.log(this.aspNetUserFk)
    });


    this.userProfiles = this.userProfileService.getUserProfiles(getBaseUrl()).subscribe(
      results => {
        this.userProfiles = results
        console.log(results);
        console.log(this.userProfiles)
        this.doesProfileExist();
      })

    //
  }
  //ngAfterContentInit() {
  //  this.doesProfileExist();
  //}

  doesProfileExist(): any {
    for (let profile of this.userProfiles) {
      if (profile.aspNetUserFk === this.aspNetUserFk) {
        this.isUserProfileFilledOut = true;
        console.log(this.isUserProfileFilledOut)
      }
      //else if (profile.aspNetUserFk !== this.aspNetUserFk) {
      //  this.isUserProfileFilledOut = false;
      //}

    }
  }
}
