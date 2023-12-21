import { getData } from "../../actions/getData";
import Ticket from "../../components/Ticket"

const TicketPage = async ({ searchParams }) => {
  const ticket = await getData(`/api/ticket/${searchParams.ticketId}`);

  return (
    <section className="w-full flex justify-center">
        <Ticket {...ticket} />
    </section>
  );
};

export default TicketPage;