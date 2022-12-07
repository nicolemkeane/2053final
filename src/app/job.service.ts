import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Job } from './job';
import { JobsComponent } from './jobs/jobs.component';
import { JOBS } from './mock-jobs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  getJobs(): Observable<Job[]> {
    const jobs = of(JOBS);
    this.messageService.add('jobService: fetched jobs')
    return jobs;
  }

  getJob(id: number): Observable<Job> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const job = JOBS.find(j => j.id === id)!;
    this.messageService.add(`JobService: fetched job id=${id}`);
    return of(job);
  }

  constructor(private messageService: MessageService) { }
}
