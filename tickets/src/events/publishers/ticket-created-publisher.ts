import { Publisher, TicketCreatedEvent, Subjects } from '@learnatibm/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}