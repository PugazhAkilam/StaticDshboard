import DashboardIcon from '@mui/icons-material/Dashboard';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import LuggageIcon from '@mui/icons-material/Luggage';
import VisaIcon from '@mui/icons-material/DocumentScanner';
import TableChartIcon from '@mui/icons-material/TableChart';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export const getMenuItems = () => {
  return [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/welcomeDashboard' },
    { 
      text: 'Flight', 
      icon: <FlightIcon />, 
      path: '/superadmin/flight',
      subMenu: [
        { 
          text: 'Airlines', 
          icon: <AirplanemodeActiveIcon />, 
          path: '/superadmin/flight/airlines' 
        },
        { 
          text: 'Kingfisher', 
          icon: <AirplanemodeActiveIcon />, 
          path: '/superadmin/flight/kingfisher' 
        }
      ]
    },
    { text: 'Hotel', icon: <HotelIcon />, path: '/superadmin/hotel' },
    { text: 'Travel', icon: <LuggageIcon />, path: '/superadmin/travel' },
    { text: 'Visa', icon: <VisaIcon />, path: '/superadmin/visa' },
    { text: 'Table', icon: <TableChartIcon />, path: '/admin/table' }
  ];
};