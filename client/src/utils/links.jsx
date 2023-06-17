import { FaHome, FaMoneyBill } from 'react-icons/fa';
import { IoMdAddCircle, IoMdSettings } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';

const links = [
  {
    id: 1,
    page: 'Dashboard',
    path: '/',
    icon: <FaHome />,
  },
  {
    id: 2,
    page: 'Months Overview',
    path: '/all-months',
    icon: <FaMoneyBill />,
  },
  {
    id: 3,
    page: 'Add New Month',
    path: '/add-month',
    icon: <IoMdAddCircle />,
  },
  {
    id: 4,
    page: 'Summary',
    path: '/summary',
    icon: <GiReceiveMoney />,
  },
  {
    id: 5,
    page: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />,
  },
];

export default links;
