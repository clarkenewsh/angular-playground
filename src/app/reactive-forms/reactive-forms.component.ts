import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  title = 'Reactive Forms'

  // Reactive Form, just using FormGroup approach without submit button
  reactiveFormControlInput = new FormControl('');

  // Reactive Form, just using FormGroup approach 
  formGroupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address:  new FormControl('', Validators.required)
  }) 

  // Reactive Form, using FormGroup & FormBuilder approach 
  formBuilderGroupForm = this.formBuilder.group({
    sex: ['', Validators.required],
    day: ['', Validators.required]
  })


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.formGroupForm.value)
  }


  // onSubmit() {
  //   console.log(this.formBuilderGroupForm.value)
  // }

}
