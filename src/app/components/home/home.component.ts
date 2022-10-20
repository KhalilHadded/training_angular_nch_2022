import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {HttpResponse} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  myList: any[]= [];

  httpSubscription!: Subscription;

  constructor(
    protected homeService: HomeService
  ) {
  }

  ngOnDestroy(): void {
    if (this.httpSubscription){
      this.httpSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.httpSubscription = this.homeService.getData().subscribe((data: HttpResponse<any[]>) => {
      this.myList = data.body!
    });
  }

}
