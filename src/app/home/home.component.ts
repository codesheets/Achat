import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCoffee=faCoffee;
  images = ["../../assets/Image_projet/56.JPG", "../../assets/Image_projet/115photo1.jpg", "../../assets/Image_projet/14.JPG"]

  constructor() { }

  ngOnInit() {
  }

}
