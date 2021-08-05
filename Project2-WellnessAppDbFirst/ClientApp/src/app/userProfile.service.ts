import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UserProfile } from "./userProfile";


@Injectable({
    providedIn: 'root'
  })

export class UserProfileService {
  profile: UserProfile;
  constructor(private http: HttpClient) {
      
    }

    getUserProfiles(@Inject('BASE_URL') baseUrl: string): any {
        return this.http.get<UserProfile[]>(baseUrl + 'UserProfiles')
  }

  postUserProfiles(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.post<UserProfile>(baseUrl + 'UserProfiles', this.profile)
  }
}
