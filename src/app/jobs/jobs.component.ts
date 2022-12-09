import { Component, OnInit } from '@angular/core';

import { Job } from '../job';
import { JobService } from '../job.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
        .subscribe(jobs => this.jobs = jobs);
  }


}

