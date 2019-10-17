import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDatepicker, MatDatepickerInputEvent, MatSlider } from "@angular/material";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  setError = false;
  name = "Ajay";
  value;
  minDate;
  maxDate;
slider;
  constructor() {
    console.log("fjksfksfs");
  }



  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate()+10)
    console.log(this.minDate,this.maxDate)
  }

  myFilter = (d: Date): boolean => {
    const day = d.getMonth();

    return day !== 10;
  };

 
fileName;
isValid=false;
  onSubmit(event)
  {
      console.log(event);
      this.fileName = event.target.files[0].name;
      console.log(this.fileName.split('.')[1])

     
  }
}
