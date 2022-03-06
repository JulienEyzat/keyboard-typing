import { Component, OnInit } from '@angular/core';
import keyboards from './keyboards.json'

@Component({
  selector: 'app-dvorak-keyboard',
  templateUrl: './dvorak-keyboard.component.html',
  styleUrls: ['./dvorak-keyboard.component.scss']
})
export class DvorakKeyboardComponent implements OnInit {

  current_keyboard = keyboards["classic"]["normal"]
  left_margins:any = {
    "0": 30,
    "1": 40,
    "2": 50,
    "3": 50
  }

  constructor() { }

  ngOnInit(): void {
  }

}
