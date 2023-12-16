"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { getData } from "@/actions/getData";

import ScrollButton from "./ScrollButton";
import Card from "./Card";

const EventGallery = ({ initialEvents, date, city, types }) => {
  const [events, setEvents] = useState(initialEvents);
  const [page, setPage] = useState(0);
  const [ref, isInView] = useInView();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // useEffect(() => {
  //   async function fetchMoreEvents() {
  //     const nextPage = page + 1;
  //     const url = `/api/event?page=${nextPage}&types=${types ? types : ""}${
  //       date ? "&date=" + date : ""
  //     }${city ? "&city=" + city : ""}`;
  //     const newEvents = await getData(url);

  //     if (newEvents.length) {
  //       setPage(nextPage);
  //       setEvents((prev) => [...prev, ...newEvents]);
  //     }
  //   }

  //   if (isInView) {
  //     fetchMoreEvents();
  //   }
  // }, [isInView]);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setIsButtonVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  return (
    <>
      {events?.map((event) => (
        <Card key={event.uuid} {...event} />
      ))}

      <div ref={ref} className="mt-16 flex items-center justify-center">
        <span className="sr-only">Loading...</span>
      </div>
      {isButtonVisible && <ScrollButton />}
    </>
  );
};

export default EventGallery;
