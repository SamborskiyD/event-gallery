
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { fetchEvents } from "@/actions/fetchEvents"

const Home = async () => {

  const events = await fetchEvents();

  return (
    <section className=" relative flex gap-10 justify-between">
      <Filters />
      <div className="max-w-[85%]">
        <EventGallery initialEvents={events} />
      </div>
    </section>
  )
}

export default Home
