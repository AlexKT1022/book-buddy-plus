import express from 'express';

import {
  createReservation,
  getReservationById,
  getReservations,
} from '#db/queries/reservationQueries';
import requireBody from '#middleware/requireBody';
import requireUser from '#middleware/requireUser';

const router = express.Router();

router.use(requireUser);

/**
 * @method GET
 * @route /reservations
 */
router.get('/', async (req, res) => {
  const reservations = await getReservations();

  return res.send(reservations);
});

/**
 * @method POST
 * @route /reservations
 */
router.post('/', requireBody(['checkInDate', 'userId']), async (req, res) => {
  const checkInDate = new Date();
  const newReservation = await createReservation(checkInDate, req.user.id);

  return res.status(201).send(newReservation);
});

/**
 * @method GET
 * @route /reservations/:id
 */
router.get('/:id', async (req, res) => {
  const reservation = await getReservationById(req.params.id);
  if (!reservation) return res.status(400).send('Reservation not found.');

  return res.send(reservation);
});

export default router;
