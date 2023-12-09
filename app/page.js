
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { fetchEvents } from "@/actions/fetchEvents"

const Home = async () => {

  const events = await fetchEvents();

  return (
    <section className="flex flex-col justify-between gap-6">
      <Filters />
      <EventGallery initialEvents={events} />
    </section>
  )
}

export default Home
