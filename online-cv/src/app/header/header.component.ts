import { Component } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 coords = [
  {title : 'GitHub' , link :'https://github.com/TuncayBilgi', icon : './../../assets/github-mark-white.png', style : 'height:auto ; width:25%'},
  {title : 'LinkedIn', link :'https://www.linkedin.com/in/tuncay-bilgi', icon : './../../assets/pngwing.com.png',style : "height:auto ; width:25%"},
  {title : 'Blog', link :'http://node.curcuma.ovh1.ec-m.fr', icon : './../../assets/react.png', style : "height:auto ; width:27%"}
 ]

}
