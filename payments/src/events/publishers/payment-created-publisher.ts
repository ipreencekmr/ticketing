import { Subjects, PaymentCreatedEvent, Publisher } from '@learnatibm/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
