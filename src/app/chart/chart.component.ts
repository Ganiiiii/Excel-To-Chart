import { Component, OnInit, Input } from "@angular/core";
import Chart from "chart.js";
import { ChartInputComponent } from "../chart-input/chart-input.component";
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input() labels: Array<any>;
  @Input() values: Array<any>;
  hideCanvas: boolean = true;
  constructor(private chartInputComponent: ChartInputComponent) {}

  ngOnInit() {
    this.chartInputComponent.chartSelected.subscribe({
      next: type => {
        this.hideCanvas = true;
        setTimeout(() => {
          this.hideCanvas = false;
        }, 100);
        setTimeout(() => {
          this.drawChart(type);
        }, 100);
      }
    });
  }

  drawChart(chartType: string) {
    new Chart(document.getElementById("myChart"), {
      type: chartType,
      data: {
        labels: [...this.labels],
        datasets: [
          {
            label: "# of Votes",
            data: [...this.values],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
