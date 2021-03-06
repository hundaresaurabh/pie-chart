import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-domain1',
  templateUrl: './domain1.component.html',
  styleUrls: ['./domain1.component.scss']
})
export class Domain1Component implements OnInit {

  tableOneData = [];
  showTable: boolean = false;
  userDetails;
  showUserDetails: boolean = false;

  /**
   * Barchart required data
   *
   * @type {ChartOptions}
   * @memberof Domain1Component
   */
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2016', '2017', '2018'];
  public barChartType: string = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];


  barChartData = [
    { index: 0, data: [65, 59, 80], label: 'Account A', chat: [{ name: 'user-A', count: 1, domain: 'domainTest1', wishes: '1' }, { name: 'user1', count: 2, domain: 'domainTest1', wishes: '2' }, { name: 'user2', count: 3, domain: 'domainTest1', wishes: '3' }], domain: 'Account Domain 1', wishes: 'wish-1' },
    { index: 1, data: [28, 48, 40], label: 'Account B', chat: [{ name: 'user-B', count: 1, domain: 'domainTest2', wishes: '1' }], domain: 'Account Domain 2', wishes: 'wish-2' },
    { index: 2, data: [82, 84, 4], label: 'Account C', chat: [{ name: 'user-C', count: 1, domain: 'domainTest3', wishes: '1' }], domain: 'Account Domain 3', wishes: 'wish-3' }
  ];



  constructor() { }

  ngOnInit() {
  }

  /**
   * functional use-
   * When user click on chart to show a table with respect to data
   *
   * @param {*} event
   * @memberof Domain1Component
   */
  chartClicked(event) {
    this.barChartData.forEach((element, index) => {
      event.active.filter(item => {
        if (item._datasetIndex === element.index) {
          this.showTable = true;
          if (!this.tableOneData.includes(element)) {
            this.tableOneData.push(element);
          }
        }
      });
    });
  }


  /**
   *functional use-
   * to send data to user details table
   * @param {*} event
   * @memberof Domain1Component
   */
  userData(event) {
    this.userDetails = event;
    this.showUserDetails = true;
  }

}
