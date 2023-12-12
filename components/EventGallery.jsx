"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { getEvents } from "@/actions/getEvents";

import ScrollButton from "./ScrollButton";
import Card from "./Card";

const EventGallery = ({ initialEvents, date, city, types }) => {
  const [events, setEvents] = useState(initialEvents);
  const [page, setPage] = useState(0);
  const [ref, isInView] = useInView();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  async function fetchMoreEvents() {
    const nextPage = page + 1;
    const newEvents = await getEvents(nextPage, types, date, city);
    if (newEvents.length) {
      setPage(nextPage);
      setEvents((prev) => [...prev, ...newEvents]);
    }
  }

  useEffect(() => {
    if (isInView) {
      fetchMoreEvents();
    }
  }, [isInView]);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setIsButtonVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  return (
    <div className=" justify-self-end">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {events?.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>

      <div ref={ref} className="mt-16 flex items-center justify-center">
        <span className="sr-only">Loading...</span>
      </div>
      {isButtonVisible && <ScrollButton />}
    </div>
  );
};

export default EventGallery;
