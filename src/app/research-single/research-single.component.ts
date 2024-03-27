import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research-single',
  templateUrl: './research-single.component.html',
  styleUrls: ['./research-single.component.scss']
})
export class ResearchSingleComponent implements OnInit{


  constructor(private httpClient: HttpClient){
  }
 
  Reports: any[] =[];

  ngOnInit(): void {

    this.getReports();
  }
  getReports(){

    this.httpClient.get<any[]>('assets/fonts/data/data1.json')
    .subscribe((data:any) => {
      this.Reports = data.reports;
    });
  }
}
