import { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';

const languages = [
  { code: 'en', label: 'ENG' },
  { code: 'uk', label: 'UKR' },
  { code: 'ru', label: 'RUS' },
];

const LanguageSelector = ({ currentLang = 'en' }) => {
  const [language, setLanguage] = useState(currentLang);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code) => {
    setLanguage(code);
    handleClose();
  };

  const getCurrentLanguageLabel = () => {
    const lang = languages.find(lang => lang.code === language);
    return lang ? lang.label : 'ENG';
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon sx={{ fontSize: 16 }} />}
        sx={{
          borderRadius: 30,
          backgroundColor: 'rgba(11, 18, 33, 0.7)',
          border: '1px solid rgba(100, 181, 246, 0.3)',
          color: '#fff',
          px: 2,
          py: 0.5,
          fontSize: '0.75rem',
          fontWeight: 500,
          minWidth: '80px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(100, 181, 246, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(11, 18, 33, 0.9)',
            border: '1px solid rgba(100, 181, 246, 0.5)',
            boxShadow: '0 0 15px rgba(100, 181, 246, 0.2)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(255, 58, 140, 0.1))',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            borderRadius: 30,
            zIndex: -1,
          },
          '&:hover::after': {
            opacity: 1,
          },
        }}
      >
        {getCurrentLanguageLabel()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(11, 18, 33, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            minWidth: '120px',
            mt: 1,
          }
        }}
      >
        {languages.map((lang) => (
          <MenuItem 
            key={lang.code} 
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === language}
            sx={{
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(100, 181, 246, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(100, 181, 246, 0.15)',
                },
              },
            }}
          >
            {lang.code === language && (
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <CheckIcon fontSize="small" sx={{ color: '#64B5F6' }} />
              </ListItemIcon>
            )}
            {lang.code !== language && (
              <ListItemIcon sx={{ minWidth: '30px' }} />
            )}
            <Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>
              {lang.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector; 