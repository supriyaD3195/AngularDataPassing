
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;
camefrom:any;
  dataReceive: any;
  pickupAddress: any;
  dropAddress: any;
  pickupAddres: any;
  dropAddres: any;
  constructor(private route:Router,
    private rout:ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      pickupAddress: new FormControl('', [Validators.required]),
      dropAddress: new FormControl('', [Validators.required]),
    });
    this.form1 = new FormGroup({
      pickupAddress: new FormControl('', [Validators.required]),
      dropAddress: new FormControl('', [Validators.required]),
    });
    if(this.camefrom!=0){
      this.rout.queryParams.subscribe((camefrom)=>{
        this.camefrom=camefrom;
        console.log(this.camefrom)
      })
      this.rout.queryParams.subscribe((params) => {
         console.log(params);
         this.dataReceive = JSON.parse(params.datasend);
         console.log(this.dataReceive);
         let pickup =this.dataReceive
      this.pickupAddres=pickup.pickupAddres;
      console.log(this.pickupAddres)
      let drop =this.dataReceive
      this.dropAddres=drop.dropAddres;
      console.log(this.dropAddres)
           });
    }
  }
  onSubmit(form) {

  let datasend: any[] = this.form.value;
  // queyparam is used for passing data to other component JSON is used for pass data in json formate
this.route.navigate(['/edit'], {
queryParams: {
datasend: JSON.stringify(datasend),
},
});
if(this.camefrom!=0){
  let datasend: any[] = this.form1.value;
  // queyparam is used for passing data to other component JSON is used for pass data in json formate
this.route.navigate(['/edit'], {
queryParams: {
datasend: JSON.stringify(datasend),
},
});
}

  }
}
