import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  formdata:any;

  ngOnInit() { 
     this.formdata = new FormGroup({ 
        FirstName: new FormControl('' ,[Validators.minLength(2),Validators.required]),
        LastName: new FormControl('' ,[Validators.minLength(2),Validators.required]),
        Phone: new FormControl('' ,[Validators.required]),
        Gender: new FormControl('' ,[Validators.required])
     }); 
  }
  onClickSubmit(login:any) 
  {
    console.log(this.formdata.value
      ,this.formdata.invalid
    )
  }
}