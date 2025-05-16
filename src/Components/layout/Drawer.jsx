import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useLocation } from 'react-router-dom';
import { getMenuItems } from './MenuItems';

const SideDrawer = ({ handleLogout, isDarkMode, isMobile, setMobileOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = getMenuItems();

  return (
    <Box>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, bgcolor: isDarkMode ? "rgb(39, 39, 39)" : "GrayText" }}>
        <img src="" alt="ZEAL Logo" style={{ width: 34, height: 33 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: "white" }}>
          ZEAL Travels
        </Typography>
      </Box>

      <List sx={{ p: 0, m: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  if (isMobile) setMobileOpen(false);
                }}
                selected={location.pathname === item.path}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#1565c0',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        <Divider />

        <Box>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                '&:hover': {
                  backgroundColor: '#ff5252',
                  color: '#fff',
                  '& .MuiListItemIcon-root': {
                    color: '#fff',
                  },
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Box>
  );
};

export default SideDrawer;