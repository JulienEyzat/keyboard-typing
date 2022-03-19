import { Component, OnInit } from '@angular/core';
import exercices from './exercices.json'

interface Exercice {
  "desc": string,
  "colored_keys": string[],
  "rows": string[]
}

interface Exercices {
  [exercice_number: string ]: Exercice
}

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  exercices:Exercices = exercices
  current_exercice_number:number = 1
  current_exercice_desc:string = this.exercices[this.current_exercice_number]["desc"]
  current_exercice_row:number = 0
  current_exercice_content:string = this.exercices[this.current_exercice_number]["rows"][this.current_exercice_row]

  current_exercice_chars:string[] = []
  current_exercice_chars_number:number[] = []
  current_exercice_chars_color:string[] = []

  current_exercice_char_number:number = 0
  current_content_passed:string = ""

  boxname:string = ""

  constructor() {
    this.init_exercice_row()
  }

  ngOnInit(): void {
  }

  init_exercice(): void {
    this.current_exercice_desc = this.exercices[this.current_exercice_number]["desc"]
    this.current_exercice_row = 0
    this.current_exercice_content = this.exercices[this.current_exercice_number]["rows"][this.current_exercice_row]
    this.init_exercice_row()
  }

  init_exercice_row(): void {
    for (let i = 0; i < this.current_exercice_content.length; i++) {
      this.current_exercice_chars_color[i] = "inherit"
      this.current_exercice_chars_number[i] = i
      this.current_exercice_chars[i] = this.current_exercice_content[i]
    }
    this.current_exercice_char_number = 0
    this.current_content_passed = ""
  }

  check_char(value: string): void {
    if (this.current_exercice_chars[this.current_exercice_char_number] == value[this.current_exercice_char_number]){
      this.current_exercice_chars_color[this.current_exercice_char_number] = "rgb(124, 252, 0)"
    } else {
      this.current_exercice_chars_color[this.current_exercice_char_number] = "red"
    }

    this.current_exercice_char_number++
  }

  change_exercice(value: string): void {
    if (value == "+") {
      this.current_exercice_number++
    } else if (value == "-") {
      this.current_exercice_number--
    }

    if (this.exercices[this.current_exercice_number]) {
      this.init_exercice()
    } else if (value == "+") {
      this.current_exercice_number--
    } else if (value == "-") {
      this.current_exercice_number++
    }
  }

  restart(): void {
    this.init_exercice()
    this.boxname = ""
  }

}
