import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Advance_web_dev, Web_dev_gamechanger , Ninecuttingedge } from '../../component/blog_cards/blog_cards';

const cardComponents = [
  <Advance_web_dev key="1" />,
  <Web_dev_gamechanger key="2" />,
  <Ninecuttingedge key="3" />
];

function Blog_content() {
  const [cards, setCards] = useState(cardComponents);

  const rotateLeft = () => {
    const newCards = [...cards];
    const first = newCards.shift();
    newCards.push(first);
    setCards(newCards);
  };

  const rotateRight = () => {
    const newCards = [...cards];
    const last = newCards.pop();
    newCards.unshift(last);
    setCards(newCards);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px' }}>
      <IconButton color="primary" onClick={rotateLeft}>
        <ArrowBackIcon />
      </IconButton>
      <div style={{ display: 'flex', gap: '20px' }}>
        {cards.map((Card, index) => (
          <div key={index}>{Card}</div>
        ))}
      </div>
      <IconButton color="primary" onClick={rotateRight}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

export default Blog_content;
