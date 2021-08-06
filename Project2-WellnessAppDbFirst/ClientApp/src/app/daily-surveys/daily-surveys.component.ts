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
    http.get<DailySurveys[]>(baseUrl + 'api/dailysurveys').subscribe(result => {
      this.surveys = result;
      console.log(this.surveys);
    }, error => console.error(error));

    this.apiBase = baseUrl;
    this.http = http;
  }
 
  /** function to add surveys to database */
  addSurvey(form: NgForm) {
    console.log(form.form.value.Id)

    let Id = form.form.value.Id;
    let emotion = form.form.value.emotion;
    let goal = form.form.value.goal;
    let achieved = form.form.value.achieved;
    

    if (achieved === "") {
      achieved = false;
    }

    let surveys: DailySurveys = { Id: 0, UserId: 0, EmotionLevel: emotion, DailyGoal: goal, PreviousGoalAchieved: achieved}
    this.http.post<DailySurveys>(this.apiBase + 'api/dailysurveys', surveys).subscribe(result => {
      console.log(result)

      this.surveys.push(result); 
    });
  }

  removeSurvey(index: number) {
    let id: number = index;
    console.log(index);
    console.log(id);
    this.http.delete<DailySurveys>(this.apiBase + 'api/dailysurveys/' + id).subscribe(result => {
      console.log(result)
      this.surveys.splice(id, 1)
    });
  }


  //* These open and close the survey modal*/

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
    else
    {
      return `with: ${reason}`;

    }

  }

}
