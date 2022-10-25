import { Publisher, OrderCreatedEvent, Subjects } from '@learnatibm/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;

}