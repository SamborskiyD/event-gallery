
import Filters from "@/components/Filters"
import EventGallery from "@/components/EventGallery"
import { getData } from "@/actions/getData"

const Home = async ({searchParams}) => {

  const date = searchParams.date
  const city = searchParams.city
  const types = searchParams.types

  const url = `/api/event?page=0&types=${types ? types : ""}${
          date ? "&date=" + date : ""
        }${city ? "&city=" + city : ""}`;

  const events = await getData(url);

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
