import { Component } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 coords = [
  {title : 'GitHub' , link :'https://github.com/TuncayBilgi', icon : 'default'},
  {title : 'LinkedIn', link :'https://github.com/TuncayBilgi', icon : 'default'},
  {title : 'Mail', link :'https://github.com/TuncayBilgi', icon : 'default'}
 ]

}
