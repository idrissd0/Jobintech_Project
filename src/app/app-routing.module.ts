import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizWelcomeComponent } from './components/quiz/quiz-welcome.component';
import { QuestionComponent } from './components/quiz/quizQuestions/question.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { StartquizComponent } from './components/quiz/startquiz/startquiz.component';

const routes: Routes = [
  {path:"", redirectTo: 'welcome', pathMatch:"full"},
  {path:"welcome", component: WelcomeComponent},
  {path:"quiz", component: QuizWelcomeComponent},
  {path:"startquiz", component: StartquizComponent},
  {path:"questions", component: QuestionComponent},
  {path:'courses', component: CoursesComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
