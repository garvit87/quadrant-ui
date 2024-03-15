import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
[x: string]: any;


  options: string[] = ['All Reports', 'Knowledge Brief', 'Market Insights', 'Market Outlook','SPARK Matrix']; // Add your options here
  selectedOptions: string[] = [];

  onCheckboxChange(checked: boolean, option: string) {
    if (checked) {
      this.selectedOptions.push(option);
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }

  apply() {
    console.log('Selected options:', this.selectedOptions);
  }

  constructor(private httpClient: HttpClient){
  }
 
  Reports: any[] =[];

  ngOnInit(): void {

    this.getReports();
  }
  getReports(){

    this.httpClient.get<any[]>('assets/fonts/data/data.json')
    .subscribe((data:any) => {
      this.Reports = data.reports;
    });
  }
}


