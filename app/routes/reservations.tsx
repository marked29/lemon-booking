import type { Route } from './+types/home';
import Reservations from '../pages/Reservations/reservations';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function ReservationRoute() {
  return <Reservations />;
}
