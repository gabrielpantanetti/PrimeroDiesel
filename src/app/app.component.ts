import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;
declare function init($);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PrimeroDiesel';

  @ViewChild('videoPlayer') videoplayer: any;

  ngOnInit(): void {

    // SLIDER
    init($);

    //this.videoplayer.nativeElement.play();
  }

  closeSideNav() {
    if ($("body").hasClass("mini-sidebar")) {

      $("body").removeClass("show-sidebar");
      $(".nav-toggler i").toggleClass("ti-close");
      $(".nav-toggler i").addClass("ti-menu");
    }
  }





}
