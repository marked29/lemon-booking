import ReservationForm from '../reservationForm/ReservationForm';

const Reservation = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h1 className="underline">Reservation</h1>
        <p className="text-center text-gray-500">
          This is the reservation page. You can make a reservation here.
          <br />
          Please select a date and time for your reservation.
        </p>

        <ReservationForm />
      </div>
    </>
  );
};
export default Reservation;
