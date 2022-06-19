import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() image: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
