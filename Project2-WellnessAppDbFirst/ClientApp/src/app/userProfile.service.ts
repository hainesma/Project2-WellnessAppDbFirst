import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserProfile } from "./userProfile";


@Injectable({
  providedIn: 'root'
})

export class UserProfileService {
  profile: UserProfile;
  constructor(private http: HttpClient) {

  }

  getUserProfiles(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<UserProfile[]>(baseUrl + 'api/UserProfiles')
  }

  postUserProfile(profile: UserProfile): Observable<UserProfile> {


    return this.http.post<UserProfile>((@Inject('BASE_URL' + 'api/UserProfiles')), profile)
  }
}


// @Inject('BASE_URL') baseUrl: string,
