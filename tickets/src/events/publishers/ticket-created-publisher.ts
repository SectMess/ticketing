import { Publisher, Subjects, TicketCreatedEvent } from "@sectionmessy/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
