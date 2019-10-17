import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  constructor() { }

  fileName;

  ngOnInit() { 
  }
 
  onSubmit(ev)
  {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];

    console.log("sss")
     
     reader.onload = (event) => {
     //  console.log("sjbabhjabhj")
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });//reading the file from workbook
     console.log(workBook.SheetNames)
     console.log(workBook.SheetNames.length)
      const sheet= workBook.Sheets[workBook.SheetNames[1]]
      var range= XLSX.utils.decode_range(sheet['!ref'])
       console.log(range)
      
  //     for(var R = range.s.r; R <= range.e.r; ++R) {
  //       for(var C = range.s.c; C <= range.e.c; ++C) {
  //         /* find the cell object */
  //         // console.log('Row : ' + R);
  //         // console.log('Column : ' + C);
  //         var cellref = XLSX.utils.encode_cell({c:C, r:0}); // construct A1 reference for cell
  //         //var col = XLSX.utils.encode_row(R)
          
         
  //         console.log(sheet[cellref].v)
         
  //         if(!sheet[cellref]) continue; // if cell doesn't exist, move on
  //         var cell = sheet[cellref];
  //        // console.log(cell.v);

  // };
      
  //   }
    jsonData = workBook.SheetNames.reduce((initial, name) => {
      //console.log(name)
      //console.log(initial)
      const sheet = workBook.Sheets[name];
      initial[name] = XLSX.utils.sheet_to_json(sheet);
  //  console.log(initial[name])
   // console.log(sheet)
      return initial;
    }, {});
    const dataString = JSON.stringify(jsonData);
    // console.log(dataString)
    // console.log(jsonData)
   // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
    //this.setDownload(dataString);
  
  }
  reader.readAsBinaryString(file);
  }
}
