import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../../Theme';
import About from './about/About';
import Rates from './rates/Rates';
import ContactInfo from './contactInfo/ContactInfo';
import Testimonials from './testimonials/Testimonials';
import Questions from './questions/Questions';
import InDepth from './inDepth/InDepth';
import './HomePage.css';

export default function HomePage() {
  const [about, setAbout] = useState(false);
  const [inDepth, setInDepth] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  const [rates, setRates] = useState(false);
  const [contact, setContact] = useState(false);
  const [questions, setQuestions] = useState(false);

  return (
    <div className='homepage'>
      <header className='home-header'>
        <ThemeProvider theme={theme}>
          <Stack orientation='vertical' spacing={4} variant='outlined'>
            <Button onClick={() => setAbout(!about)}>
              {about ? <About status={about} /> : 'About CNS Reset'}
            </Button>
            <Button onClick={() => setTestimonials(!testimonials)}>
              {testimonials ? (
                <Testimonials status={testimonials} />
              ) : (
                'Testimonials'
              )}
            </Button>
            <Button onClick={() => setRates(!rates)}>
              {rates ? <Rates status={rates} /> : 'Rates and Services'}
            </Button>
            <Button onClick={() => setContact(!contact)}>
              {contact ? <ContactInfo status={contact} /> : 'Contact Info'}
            </Button>
            <Button onClick={() => setInDepth(!inDepth)}>
              {inDepth ? <InDepth status={inDepth} /> : 'What I do In Depth'}
            </Button>
            <Button onClick={() => setQuestions(!questions)}>
              {questions ? (
                <Questions status={questions} />
              ) : (
                'Common Questions'
              )}
            </Button>
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}
