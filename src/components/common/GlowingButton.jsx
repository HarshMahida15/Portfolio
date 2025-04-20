import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  padding: '12px 35px',
  fontSize: '1.1rem',
  color: '#fff',
  background: 'transparent',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25px',
    padding: '2px',
    background: 'linear-gradient(45deg, #2196F3, #FF69B4)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&:hover': {
    '&::before': {
      background: 'linear-gradient(45deg, #FF69B4, #2196F3)',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25px',
    background: 'linear-gradient(45deg, #2196F3, #FF69B4)',
    filter: 'blur(15px)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: -1,
  },
  '&:hover::after': {
    opacity: 0.3,
  },
}));

const GlowingButton = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <StyledButton {...props}>
        {children}
      </StyledButton>
    </motion.div>
  );
};

export default GlowingButton; 