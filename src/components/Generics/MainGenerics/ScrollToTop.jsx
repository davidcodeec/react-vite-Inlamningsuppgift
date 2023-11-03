import React, { useEffect } from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toGoTop = document.querySelector('#goto-top');

    if (toGoTop) {
      const toggleButton = () => {
        if (window.scrollY > 100) {
          toGoTop.classList.remove('d-none'); // Show the button
        } else {
          toGoTop.classList.add('d-none'); // Hide the button
        }
      };

      toggleButton(); // Call it to set the initial button state

      window.addEventListener('scroll', toggleButton);
      toGoTop.addEventListener('click', scrollToTop);

      return () => {
        window.removeEventListener('scroll', toggleButton);
      };
    }
  }, []);

  return (
    <button onClick={scrollToTop} id="goto-top" className="btn btn-primary btn-circle d-none">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
