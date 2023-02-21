import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/services/job-service.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  currentJob:Job=new Job();

  constructor(private actRoute: ActivatedRoute, private jobService: JobServiceService) { }

  ngOnInit(): void {
    let id:string = this.actRoute.snapshot.paramMap.get("jobID") ?? "";
    let idInt:number = parseInt(id);
    this.jobService.getJob(idInt).subscribe(job =>{
        this.currentJob = job;
    });
  }

}
