import { Component, OnInit } from '@angular/core';
// import FormBuilder , FormGroup มาใช้
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.less']
})
export class FormTitleComponent implements OnInit {
  // สร้าง FormGroup โดยเราจะสร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็น FormGroup
  myForm: FormGroup;

  constructor(
    // เรียกชื่อ FormBuilder ตั้งชื่อว่า fb
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // เรียกใช้ myForm โดยจะเก็บข้อมูลของ email , password
    this.myForm = this.fb.group({
      email: '',
      password: '',
    });

    // this.myForm.valueChanges.subscribe(console.log);
  }
}
