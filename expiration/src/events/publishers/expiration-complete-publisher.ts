import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@sectionmessy/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
