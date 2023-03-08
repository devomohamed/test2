import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  education = [
    {
      title:'Higher Institute Of Computer Information & Management Technology - Tanta',
      status:'Student',
      startDate:'June 2018',
      endDate:'Present',
      paragraph:"Bachelor's Degree in Management Information System Is 'B'",
      btnLink:"Bachelor's"
    },
    {
      title:'National Telecommunication Institute (NTI)',
      status:'Student',
      startDate:'Nov 2021',
      endDate:'may 2020',
      paragraph:"Web Development using Node JS and Angular '95%'",
      btnLink:'Course'
    },
  ]
  work = [
    {
      title:'Digital Bond',
      status:'Angular Developer',
      startDate:'jan 2023',
      endDate:'Present',
      paragraph:"BRANDING, SOCIAL MEDIA, INFLUENCERS MARKETING & DIGITAL PR, VIDEO PRODUCTION, WEB DEVELOPMENT, MOBILE APPS, SMS CAMPAIGNS, FOOD STYLING PHOTOGRAPHY, SEO OPTIMIZATION, PERFORMANCE MARKETING, and MEDIA BUYING      ",
      btnLink:'Job'
    },
    {
      title:'Soft Click',
      status:'Angular Developer',
      startDate:'Mar 2022',
      endDate:'jan 2023',
      paragraph:"Software solutions company",
      btnLink:'Job'
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
