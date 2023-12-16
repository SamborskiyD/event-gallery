
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { getData } from "@/actions/getData"

const Home = async ({searchParams}) => {

  const events = await getData('/api/event?page=0&types=');

  const date = searchParams.date
  const city = searchParams.city
  const types = searchParams.types

  return (
    <section className="flex flex-col justify-between gap-6">
      <Filters />
      <div key={Math.random()} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"> 
        <EventGallery initialEvents={events} date={date} city={city} types={types} />
      </div>
    </section>
  )
}

export default Home
