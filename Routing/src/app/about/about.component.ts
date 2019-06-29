import { Component} from '@angular/core';

@Component({
  template: `
    <h1 class='bg-danger text-info text-center'>About Murthy Infotek</h1>
    <h2 class='text-danger'>{{ title }}</h2>
    <h3>We offer</h3>
    <li>Angular 8</li>
    <li>React and Redux</li>
    <li>Python and Machine Learning </li>
    <h4 class="bg-secondary text-info">Contact : 98480 11641</h4>
  `
})
export class AboutComponent{
title = 'Murthy Infotek offers online tranings on Front-end skills'

}