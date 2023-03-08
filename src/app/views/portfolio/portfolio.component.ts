import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  showMore:boolean = false
  constructor() { }

  projects = [
    {
      type:'native',
      title:'None',
      image:'../../../assets/1.png',
      previewLink:'https://devomohamed.github.io/Insur/',
      githubLink:'https://github.com/devomohamed/Insur'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/2.png',
      previewLink:'https://fanciful-salamander-074501.netlify.app/',
      githubLink:'https://github.com/devomohamed/Shopping-cart'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/3.png',
      previewLink:'https://stunning-dasik-98715d.netlify.app',
      githubLink:'https://github.com/devomohamed/Market'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/4.png',
      previewLink:'https://devomohamed.github.io/Food-Theme/',
      githubLink:'https://github.com/devomohamed/Food-Theme'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/5.png',
      previewLink:'https://devomohamed.github.io/agrica-Template/',
      githubLink:'https://github.com/devomohamed/agrica-Template'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/6.png',
      previewLink:'https://devomohamed.github.io/portfolio-New/',
      githubLink:'https://github.com/devomohamed/portfolio-New'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/7.png',
      previewLink:' https://devomohamed.github.io/ilene-berg-Template/',
      githubLink:': https://github.com/devomohamed/ilene-berg-Template'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/8.png',
      previewLink:'https://devomohamed.github.io/Prtofolio/',
      githubLink:'https://github.com/devomohamed/Prtofolio'
    },
    {
      type:'native',
      title:'None',
      image:'../../../assets/9.png',
      previewLink:'https://devomohamed.github.io/template02/',
      githubLink:'https://github.com/devomohamed/template02'
    },
  ]

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

}
