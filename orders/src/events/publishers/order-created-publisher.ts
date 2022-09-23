import { Publisher, OrderCreatedEvent, Subjects } from "@sectionmess/common-v2";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
