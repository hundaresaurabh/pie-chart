import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-domain2',
  templateUrl: './domain2.component.html',
  styleUrls: ['./domain2.component.scss']
})
export class Domain2Component implements OnInit {
  tableOneData = [];
  showTable: boolean = false;
  userDetails;
  showUserDetails: boolean = false;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  
  public pieChartLabels: Label[] = [['Account A'], ['Account B'], 'Account C'];
  chartData = [
    { data: [600, 260, 700], label: 'Account A' , chat:[{name:'user',count:0,domain:'domainTest1', wishes:'1'},{name:'user1',count:1,domain:'domainTest1', wishes:'2'},{name:'user2',count:2,domain:'domainTest1', wishes:'3'}], domain:'Account Domain 1', wishes:'wish-1'},
    { data: [455, 100, 340], label: 'Account B' ,chat:[{name:'user',count:0,domain:'domainTest2', wishes:'1'}], domain:'Account Domain 2', wishes:'wish-2'},
    { data: [67, 800, 500], label: 'Account C' ,chat:[{name:'user',count:0,domain:'domainTest3', wishes:'1'}], domain:'Account Domain 3', wishes:'wish-3'}
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  constructor() { }

  ngOnInit() {
  }


  chartClicked(event) {
    this.chartData.forEach((element, index) => {
      if(index === event.active[0]._datasetIndex){
        this.showTable = true;
        if(!this.tableOneData.includes(element)){
          this.tableOneData.push(element);
        }
      }
    });
  }

  userData(event){
    this.userDetails = event;
    this.showUserDetails = true;
  }
}
