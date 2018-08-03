import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  getUrl = 'https://api.myjson.com/bins/sbnyq';
  postUrl = 'https://api.myjson.com/bins';
  putUrl = 'https://api.myjson.com/bins/dhz0';

  getUrl1 = 'https://api.jsonbin.io/b/5b432d68a5a2f34ea6b332e8';
  postUrl1 = 'https://api.jsonbin.io/b';
  putUrl1 = 'https://api.jsonbin.io/b/5b432d68a5a2f34ea6b332e8';

  secretKey = '$2a$10$/ij4CQEkfcI1wfwPgx1gNeZ3pNfb0BvY6vlJKAy/Yqq2wpn8Ou4Kq';
  headers = {
    'content-type': 'application/json',
    'secret-key': this.secretKey,
    'private': 'true'
  }

  data = { "a": 4 };

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
    //this.createJSON(this.postUrl1, this.data, this.headers);//5b432d68a5a2f34ea6b332e8
    //this.loadJSON(this.getUrl1, this.headers);
    //this.updateJSON(this.putUrl1, this.data, this.headers);
    //this.deleteJSON(this.putUrl1, this.headers);
  }

  loadJSON(url: string, headers?:any) {
    this.commonService.getJSON(url, headers).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  createJSON(url: string, data: any, headers?:any) {
    this.commonService.postJSON(url, data, headers).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  updateJSON(url:string, data:any, headers?:any) {
    this.commonService.putJSON(url, data, headers).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  deleteJSON(url:string, headers?:any) {
    this.commonService.deleteJSON(url, headers).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
