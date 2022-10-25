import { Publisher, Subjects, TicketUpdatedEvent } from '@learnatibm/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}