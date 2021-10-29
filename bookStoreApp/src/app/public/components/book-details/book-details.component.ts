import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public id : number = 0;
  public authId: number = 0;
  public name: string="";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    this.route.params.subscribe((param)=>{
      this.id = param.id;
      this.authId = param.authId;
    });

    this.route.queryParams.subscribe(queryParam =>{
      this.name = queryParam.name;
    })
  }

}
