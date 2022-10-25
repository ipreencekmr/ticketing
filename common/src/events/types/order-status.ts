export enum OrderStatus {
    Created = 'created',
    // Order is trying to reserve has been reserved 
    // user has cancelled the order
    // order expires before payment
    Cancelled = 'cancelled',
    // reserved ticket and waiting for payment
    AwaitingPayment = 'awaiting:payment',
    Complete = 'complete'
}