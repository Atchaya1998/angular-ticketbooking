import { Component, OnInit } from '@angular/core';
import { Ticketbooking } from './ticketbooking';

import { TicketbookingService } from './ticketbooking.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css'],
})
export class TicketbookingComponent implements OnInit {
  ticketbookings = [];
  model = new Ticketbooking();

  constructor(private ticketbookingService: TicketbookingService) {}

  ngOnInit() {
    this.getAllTicketbooking();
  }
  getAllTicketbooking() {
    this.ticketbookingService
      .getAllTicketbookingService()
      .subscribe((x: any[]) => {
        this.ticketbookings = x;
      });
  }
  editTicketbooking(id) {
    this.ticketbookingService
      .getTicketbookingService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteticketbooking(id: any) {
    this.ticketbookingService
      .deleteTicketbookingService(id)
      .subscribe((data) => {
        this.getAllTicketbooking();
      });
  }

  addTicketbooking() {
    // alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.ticketbookingService
        .createTicketbookingService(this.model)
        .subscribe((data) => {
          this.getAllTicketbooking();
          this.model = new Ticketbooking();
        });
    } else {
      // alert(JSON.stringify(this.model));
      this.ticketbookingService
        .updateTicketbookingService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllTicketbooking();
          this.model = new Ticketbooking();
        });
    }
  }
}
