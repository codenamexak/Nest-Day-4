import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from "../../component/footer/footer";
import { Form } from "../../component/form/form";
import { Address } from '../../component/address/address';

@Component({
  selector: 'app-contact',
  imports: [ Form,Address],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
