import { Component, OnInit } from '@angular/core';
import exercices from './exercices.json'

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  exercices = exercices
  current_exercice_number:string = "1"
  current_exercice_desc = (this.exercices as any)[this.current_exercice_number]["desc"]
  current_exercice_row = "0"
  current_exercice_content = (this.exercices as any)[this.current_exercice_number]["rows"][this.current_exercice_row]
  current_exercice_chars:string[] = []
  current_exercice_chars_number:number[] = []
  current_exercice_chars_color:string[] = []

  current_exercice_char_number = 0
  current_content_passed = ""

  constructor() {
    for (let i = 0; i < this.current_exercice_content.length; i++) {
      this.current_exercice_chars_color[i] = "inherit"
      this.current_exercice_chars_number[i] = i
      this.current_exercice_chars[i] = this.current_exercice_content[i]
    }
  }

  ngOnInit(): void {
  }

  check_char(value: string): void {
    console.log(value)
    console.log(this.current_exercice_chars[this.current_exercice_char_number])
    if (this.current_exercice_chars[this.current_exercice_char_number] == value[this.current_exercice_char_number]){
      this.current_exercice_chars_color[this.current_exercice_char_number] = "rgb(124, 252, 0)"
    } else {
      this.current_exercice_chars_color[this.current_exercice_char_number] = "red"
    }

    this.current_exercice_char_number++
  }

}
