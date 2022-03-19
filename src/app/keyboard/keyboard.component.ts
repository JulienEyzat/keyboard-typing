import { Component, OnInit } from '@angular/core';
import keyboards from './keyboards.json'

interface Keyboard {
  "normal": string[],
  "caps": string[]
}

interface Keyboards {
  [keyboard_name: string ]: Keyboard
}

interface Margins {
  [key: string]: number
}


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  keyboards:Keyboards = keyboards
  current_keyboard:string[] = keyboards["classic"]["normal"]
  left_margins:Margins = {
    "0": 30,
    "1": 40,
    "2": 50,
    "3": 50
  }

  constructor() { }

  ngOnInit(): void {
  }

}
