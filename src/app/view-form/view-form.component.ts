import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css'],
})
export class ViewFormComponent implements OnInit {
  dataReceive: any;
  pickupadd: any;
  dropadd: any;
  deliveryType: any;
  camefrom: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

      this.dataReceive = JSON.parse(params.datasend);
//       console.log(this.dataReceive);
// let pickup =this.dataReceive
//       this.pickupadd=pickup.pickupAddres;
//       console.log(this.pickupadd)
      // this.dropadd=this.dataReceive.dropAddress;
    });
  }
  add() {
    this.router.navigate(['']);
  }
  edit() {
    this.camefrom=0;
    let datasend: any[] = this.dataReceive;

    this.router.navigate([''], {
      queryParams: {
        camefrom:1,
        datasend: JSON.stringify(datasend),
      },
    });
  }
  Delete() {
    console.log('hiii');
    this.dataReceive = [];
    console.log(this.dataReceive);
  }
}
