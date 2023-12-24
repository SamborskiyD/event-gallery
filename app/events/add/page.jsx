'use client'

import EventCreationForm from "@/components/EventCreationForm";
import { createEvent } from "../../../actions/createEvent";

const EventCreationPage = () => {

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <EventCreationForm createEvent={createEvent} />
    </section>
  );
};

export default EventCreationPage;