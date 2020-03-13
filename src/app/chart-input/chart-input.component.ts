import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import * as _ from "lodash";
import { Subject } from "rxjs";
@Component({
  selector: "app-chart-input",
  templateUrl: "./chart-input.component.html",
  styleUrls: ["./chart-input.component.scss"]
})
export class ChartInputComponent implements OnInit {
  labels: any = [];
  values = [];
  selectedFile: File;
  chartSelected: Subject<string>;
  chartType = [
    { name: "Bar", value: "bar" },
    { name: "Horizontal Bar", value: "horizontalBar" },
    { name: "Line", value: "line" },
    { name: "Radar", value: "radar" },
    { name: "Pie", value: "pie" },
    { name: "Doughnut", value: "doughnut" },
    { name: "Polar Area", value: "polarArea" },
    { name: "Bubble", value: "bubble" },
    { name: "Scatter", value: "scatter" }
  ];

  constructor() {}

  ngOnInit() {
    this.chartSelected = new Subject<string>();
  }

  fileSelected(ev) {
    let workBook = null;
    let sheetData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: "binary" });
      sheetData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.getLablesAndValues(sheetData.Sheet1);
    };
  }

  getLablesAndValues(sheetData) {
    const data = _.countBy([...sheetData], "Task");
    console.log("data", data);
    for (const [key, value] of Object.entries(data)) {
      this.labels.push(key);
      this.values.push(value);
    }
    console.log("this.labels", this.labels);
    console.log("this.values", this.values);
  }

  chartChanged(event) {
    console.log("event", event.target.value);
    this.chartSelected.next(event.target.value);
  }
}
