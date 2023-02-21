import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  pastJobs: Job[] = [{
    id: 1,
    title: "Developer",
    description: "Designing virtual worlds millions have experienced.",
    duration: "2016 - Now",
    employer: "Self-Employed"
  },
  {
    id: 2,
    title: "3D Model Artist",
    description: "Creating assets for my worlds and others.",
    duration: "2016 - Now",
    employer: "Self-Employed"
  },
  {
    id: 3,
    title: "Sound Designer",
    description: "Made soundscapes to entertain the ears.",
    duration: "2016 - Now",
    employer: "Self-Employed"
  }
]


  constructor() { }

  getAllJobs(): Observable<any>{
    return of(this.pastJobs);
  }

  getJob(id: number): Observable<Job>{
    let chosenJob:Job=new Job();
    this.pastJobs.forEach(j => {
        if (j.id === id){
            chosenJob=j;
        }
    });
    return of(chosenJob);
}
}
