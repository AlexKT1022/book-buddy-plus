const ReservationCard = ({ reservation }) => {
  return (
    <li className='reservations-items'>
      {reservation.title} {reservation.author}
    </li>
  );
};

export default ReservationCard;
