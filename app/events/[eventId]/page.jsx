import { fetchEventById } from '@/actions/fetchEventById'
import Image from 'next/image'

const EventPage = async ({params}) => {

  const event = await fetchEventById(params.eventId)

  return (
    <section className=''>

      <div className='flex gap-10'>
        <Image width={400} height={400} src={event.background_image} className='object-cover max-w-[500px] h-[400px]'/>
        <div>
          <h1>{event.name}</h1>
          <h3>{event.released}</h3>
          <h3>{event.rating}</h3>
          <p>{event.description}</p>
        </div>
      </div>

      <div>
        <h2>Tickets</h2>
        <p>//TODO: think how to display tickets</p>
      </div>

    </section>
  )
}

export default EventPage