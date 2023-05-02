import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public texto:string
  constructor() {
    this.texto = "";
  }

  ngOnInit(): void {
    this.texto = "Inicializou!!!!"
  }

  clicou() {
    if(this.texto && this.texto =="clicou") {
      this.texto = "mudou";
    } else 
      this.texto = "clicou"
  }

  
}
