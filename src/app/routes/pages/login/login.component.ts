import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for(let i = 10; i < 100; i++) {
      console.log('teste');
      for(let a = 10; a < 100; i++) {
        console.log('teste');
        if (a ==1) {
          for(let b = 10; b < 100; i++) {
            console.log('teste');
          }
        }
      }
    }
  }

}
