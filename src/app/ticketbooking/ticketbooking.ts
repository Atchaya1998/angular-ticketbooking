export class Ticketbooking {
    id: number;
    name: string;
    film_name: string;
    show_date: string;
    show_time: string
    payment_mode: string
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
