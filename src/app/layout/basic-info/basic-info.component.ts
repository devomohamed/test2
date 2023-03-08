import { Component, OnInit } from '@angular/core';
import { faEllipsisV,faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faFacebook,faGithub,faTwitter,faCodepen } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  // Icons Fontawesome Variables To Access Classes Imports
  faEllipsisV = faEllipsisV
  faDownload = faDownload
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faGithub = faGithub
  faTwitter = faTwitter
  faCodepen = faCodepen

  toggleMenuClass:boolean = false

  skills = [
    'Html5',
    'Css3',
    'Sass',
    'Js',
    'Jquery',
    'Bootstrap',
    'Angular',
    'Webpack',
    'Npm'
  ]

  data = {
    name:'Mohamed Sabry',
    age:22,
    image:'../../../assets/WhatsApp Image 2021-06-28 at 2.03.46 AM.jpeg',
    title:'Front-end Developer(Angular)',
    country:'Egypt',
    city:'Berket-Elsabaa',
    langues:[
      {name:'Arabic',percent:'100%'},
      {name:'English',percent:'60%'},
    ],
    cvLink:'../../../assets/MohamedSabryAbdelmordy.pdf',
    githubLink:'https://github.com/devomohamed',
    linkedinLink:'https://www.linkedin.com/in/mohamed-sabry-abdelmordy-b012441b0/',
    facebookLink:'https://www.facebook.com/mohammed.sabry.31521301/',
    twitterLink:'https://twitter.com/abdelmordy_s',
    codepenLink:'https://codepen.io/mohamed-s-abdelmordy'
  }

  toggleMenu(){
    if(this.toggleMenuClass){
      this.toggleMenuClass = false
    }else{
      this.toggleMenuClass = true
    }
  }
  closeToggleMenu(){
    this.toggleMenuClass = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
