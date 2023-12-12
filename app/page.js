
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { getEvents } from "@/actions/getEvents"

const Home = async ({searchParams}) => {

  const events = await getEvents();
  
  const date = searchParams.date
  const city = searchParams.city
  const types = searchParams.types

  return (
    <section className="flex flex-col justify-between gap-6">
      <Filters />
      <EventGallery initialEvents={events} date={date} city={city} types={types} />
    </section>
  )
}

export default Home
