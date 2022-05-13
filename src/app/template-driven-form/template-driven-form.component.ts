import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Animal } from '../animal';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  title = 'Template Driven Forms'

  // data model for single input using two-way data binding
  plant: string = '';

  // data model for template driven form with submission
  // animals: Animal | undefined;

  animal: Animal = {
    name: '',
    breed: ''
  };

  // const newAnimal = {
  //   name = this.name;
  //   breed = this.breed;
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.animal);
  }

}
