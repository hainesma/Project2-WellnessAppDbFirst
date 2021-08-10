import { Component } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { AuthorizeGuard } from '../../api-authorization/authorize.guard'
import { User } from 'oidc-client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authorizeService: AuthorizeService) {
    let user = authorizeService.getUser().subscribe((result): any => {
      console.log(result)
      this.currentUserId = result;
    });
    console.log(user);
    this.checkForLoggedIn()
  }

  isLoggedIn: boolean = false;
  currentUserId: any;
  checkForLoggedIn():any {
    if (this.currentUserId != null) {
      this.isLoggedIn = true;
    }
    else if (this.currentUserId = null) {
      this.isLoggedIn = false
    }
  }
}



