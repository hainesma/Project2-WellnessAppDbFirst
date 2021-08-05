import { Component } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { AuthorizeGuard } from '../../api-authorization/authorize.guard'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(authorizeService: AuthorizeService) {
    let user = authorizeService.getUser();
    console.log(user)
  }
}


