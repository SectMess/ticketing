import { Subjects, Publisher, OrderCancelledEvent } from "@sectionmessy/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
