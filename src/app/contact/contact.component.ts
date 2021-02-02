import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../_modal';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  goal$: Contact = new Contact();
  currentContacts$: Contact[] = [];
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private modalService: ModalService
  ) {}

  ngOnInit() {return this.dataService.getContact()
    .subscribe(data => this.currentContacts$ = data)}
  onSubmit(data: any) {
    this.http.post('http://localhost:3000/contact', data).subscribe((data) => {
      console.warn(data);
    });
    
    //this.dataService.postContact(data);
  }
  onCheckDataBase(){
    this.openModal('custom-modal-1');
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
