
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { fetchEvents } from "@/actions/fetchEvents"

const Home = async () => {

  const events = await fetchEvents();

  return (
    <section className=" relative px-20 flex justify-between my-20">
      <Filters />
      <div className="max-w-[80%]">
        <EventGallery initialEvents={events} />
      </div>
    </section>
  )
}

export default Home
