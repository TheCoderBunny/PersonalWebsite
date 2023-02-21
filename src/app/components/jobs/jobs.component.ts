import { Component } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobList: any = [];

  constructor(private jobService: JobServiceService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(list => {
      this.jobList = list;
    })
  }
}
