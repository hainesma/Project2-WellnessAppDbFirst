import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { DailySurveysComponent } from './daily-surveys/daily-surveys.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';



import { UserProfileComponent } from './user-profile/user-profile.component';
import { StoicQuoteComponent } from './stoic-quote/stoic-quote.component';
import { RecipeComponent } from './recipe/recipe.component';
import { YogaComponent } from './yoga/yoga.component';
import { KanyeComponent } from './kanye/kanye.component';
import { BuddhaComponent } from './buddha/buddha.component';
import { LiftComponent } from './lift/lift.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    DailySurveysComponent,
    SurveyDetailsComponent,
    DailySurveysComponent,
    DashboardComponent,
    UserProfileComponent,
    StoicQuoteComponent,
    RecipeComponent,
    YogaComponent,
    KanyeComponent,
    BuddhaComponent,
    LiftComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'daily-surveys', component: DailySurveysComponent },
      {path: 'survey/:Id', component: SurveyDetailsComponent},
      { path:  'daily-surveys', component: DailySurveysComponent},
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizeGuard]},
      { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthorizeGuard] },

    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
