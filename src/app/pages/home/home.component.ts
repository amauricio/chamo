import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@core/language/services/language.service';
import { StorageService } from '@core/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private language: LanguageService,
              private storage: StorageService) { }

  response : string;
  
  ngOnInit() {    
  this.response = "Aca se cargara algo"
  //aca metes el fetch si quieres que llame al fetch ni bien cargue
  }

  fetchJson() {

  //aca metes el servicio
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.applyText(json))

  }

  applyText(json){
    this.response = json.title;
  }

}
