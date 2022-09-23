import { Publisher, Subjects, TicketUpdatedEvent } from "@sectionmessy/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
