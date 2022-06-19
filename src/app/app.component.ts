import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supreme-coffee';
  
  ngOnInit() {
      window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll = (): void => { 
    if (window.pageYOffset > 200) {
      document.body.classList.add('body-scrolled');
    } else {
      document.body.classList.remove('body-scrolled');
    }
  }
}

