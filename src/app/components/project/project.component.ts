import { Component, Input, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  faEye = faEye
  faGithub = faGithub

  @Input() data:any

  constructor() { }

  ngOnInit(): void {
  }

}
