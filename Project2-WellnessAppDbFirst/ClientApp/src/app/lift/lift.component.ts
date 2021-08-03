import { Component } from '@angular/core';
import { getBaseUrl } from '../../main';
import { LiftService } from '../lift.service';
import { Lift } from './lift';

@Component({
    selector: 'app-lift',
    templateUrl: './lift.component.html',
    styleUrls: ['./lift.component.css']
})
/** lift component*/
export class LiftComponent {
  /** lift ctor */

  public lift: Lift;
  constructor(private api: LiftService) {
    this.lift = this.getLiftRandom();
  }

  getLiftRandom(): any {
    this.lift = this.api.callLiftRandom(getBaseUrl()).subscribe(result => {
      this.lift = result;
      console.log(this.lift);
    })
    return this.lift;
  }
}
