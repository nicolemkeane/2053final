import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


// export class job {
//   constructor(public router: Router) {}
// }


export class AppComponent {

  title = 'Villanova Job Finder';
  description = "Below are job options for Mathematics majors. Click on a job to see a description of it."
  // navigateToSecond() {
  //   this.router.navigateByUrl('/job-detail/:id')
  // }
}

