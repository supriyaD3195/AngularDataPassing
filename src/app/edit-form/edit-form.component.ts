import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  form: FormGroup;
  dataReceive: any;
  pickupAddress:any;
 dropAddress:any;
  constructor( private route:ActivatedRoute,
    private roter:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
       this.dataReceive = JSON.parse(params.datasend);
       this.pickupAddress=this.dataReceive.pickupAddress;
       this.dropAddress=this.dataReceive.dropAddress;
    });
    this.form = new FormGroup({
      pickupAddres: new FormControl('', [Validators.required]),
      dropAddres: new FormControl('', [Validators.required]),

      selected: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(form){
    let datasend: any[] = this.form.value;

this.roter.navigate(['/view'], {
queryParams: {
datasend: JSON.stringify(datasend),
},
});
  }
}
