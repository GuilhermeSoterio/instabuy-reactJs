import { useState } from 'react';

const useCarouselLoader = (initialNumCarouselsToShow = 5, step = 5) => {
  const [numCarouselsToShow, setNumCarouselsToShow] = useState(initialNumCarouselsToShow);

  const handleLoadMoreCarousels = () => {
    setNumCarouselsToShow((prevNum) => prevNum + step);
  };

  return { numCarouselsToShow, handleLoadMoreCarousels };
};

export default useCarouselLoader;