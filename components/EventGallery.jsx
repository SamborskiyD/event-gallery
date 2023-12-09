"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { fetchEvents } from "@/actions/fetchEvents";

import ScrollButton from "./ScrollButton";
import Card from "./Card";
 
const EventGallery = ({ initialEvents }) => {
  const [events, setEvents] = useState(initialEvents);
  const [page, setPage] = useState(1);
  const [ref, isInView] = useInView();

  async function fetchMoreEvents() {
    const nextPage = page + 1;
    const newEvents = await fetchEvents(nextPage);
    if (newEvents.length) {
      setPage(nextPage);
      setEvents((prev) => [...prev, ...newEvents]);
    }
  }

  useEffect(() => {
    if(isInView) {
      fetchMoreEvents()
    }
  }, [isInView])

  return (
    <div className=" justify-self-end">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {events?.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>

      <div
        ref={ref}
        className='mt-16 flex items-center justify-center'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <ScrollButton />
    </div>
  );
};

export default EventGallery;
