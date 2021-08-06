import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  

  postUserProfile(baseUrl: string, profile: UserProfile): Observable<UserProfile> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(profile);
    return this.http.post<UserProfile>((baseUrl + 'api/UserProfiles'), profile, { headers: headers })
  }
}


// @Inject('BASE_URL') baseUrl: string,
