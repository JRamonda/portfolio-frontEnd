import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  editableAbout = false;


  editable = true;
  banner: string = '../../assets/images/banner.jpg';
  logo = '../../assets/images/logo.png';

  formAbout = {
    logo: '../../assets/images/logo.png',
    name:'JOAQUIN RAMONDA',
    title: 'Full Stack Developer Jr',
    resumen: 'Me encanta pensar, crear y buscar soluciones creativas y eficaces a los problemas día a día. Soy una persona muy curiosa, innovadora, exigente, responsable, predispuesta al trabajo en equipo, y sobre todo autodidacta, con muchas expectativas de crecimiento laboral y ansias de seguir aprendiendo.'
  }

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.FormAbout.patchValue(this.formAbout);
  }
  
  FormAbout = new FormGroup({
    logo: new FormControl(''),
    name: new FormControl(''),
    title: new FormControl(''),
    resumen: new FormControl(''),
  });
}
