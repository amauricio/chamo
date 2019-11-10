import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '@core/language/services/language.service';
import { StorageService } from '@core/services/storage/storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements AfterViewInit {

  value : string = "";
  message = "";

  @ViewChild('message_response_template', {static: true}) message_response_template: ElementRef;
  @ViewChild('message_template', {static: true}) message_template: ElementRef;
  @ViewChild('chat_content', {static: true}) chat_content: ElementRef;

  ngAfterViewInit(){}
  onEnter(value: string) { 
  	this.value = value;
  	this.message = '';
  	this.pushMessageMe();
  	this.scrollBottom()
  	//push watson
  	this.pushMessageFetch();
   }
   pushMessageMe(){
   	var tmpMessage = this.message_template.nativeElement.innerHTML;
   	tmpMessage= tmpMessage.replace('$message', this.value);
   	this.chat_content.nativeElement.innerHTML += tmpMessage;	
   }
   pushMessageFetch(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.applyText(json))	
   }
   applyText(json){

	    var tmpMessage = this.message_response_template.nativeElement.innerHTML;
	   	tmpMessage= tmpMessage.replace('$message', json.title);
	   	this.chat_content.nativeElement.innerHTML += tmpMessage;	
  		this.scrollBottom()

   }
 
   scrollBottom(){
	   	this.chat_content.nativeElement.scrollTop = this.chat_content.nativeElement.scrollHeight;	
   }


}
