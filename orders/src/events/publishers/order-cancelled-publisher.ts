import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@sectionmess/common-v2";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
