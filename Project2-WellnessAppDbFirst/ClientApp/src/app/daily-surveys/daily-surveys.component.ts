import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { DailySurveys } from './DailySurveys'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-daily-surveys',
    templateUrl: './daily-surveys.component.html',
  styleUrls: ['./daily-surveys.component.css'],
  providers: [HttpClient]
})
/** DailySurveys component*/
export class DailySurveysComponent {
  title = 'appBootstrap';

  //array of Surveys
  public surveys: DailySurveys[] = [];
  closeResult: string;
  public apiBase: string = "";
  public http: HttpClient = null;

    /** DailySurveys ctor */ 
  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<DailySurveys[]>(baseUrl + 'api/tickets').subscribe(result => {
      this.surveys = result;
      console.log(this.surveys);
    }, error => console.error(error));

    this.apiBase = baseUrl;
    this.http = http;
  }




  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    }
    else {


      return `with: ${reason}`;

    }

  }

}
