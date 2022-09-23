import { Publisher, OrderCreatedEvent, Subjects } from "@sectionmessy/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
