import { Subjects, Publisher, ExpirationCompleteEvent } from '@learnatibm/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

}