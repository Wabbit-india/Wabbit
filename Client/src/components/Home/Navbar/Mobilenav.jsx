import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import { Mycontext } from '../../../context/Mycontext';

export default function Mobilenav() {
  const { setIsnavbar } = useContext(Mycontext);
  const [isVisible, setIsVisible] = useState(false); // Local state for animation

  const handleClickAway = () => {
    setIsVisible(false);
    setTimeout(() => setIsnavbar(false), 300); // Delay to sync with animation
  };

  const handleResize = () => {
    if (window.innerWidth > 760) {
      setIsVisible(false);
      setTimeout(() => setIsnavbar(false), 300);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`fixed top-16 z-[999] bg-yellow-400 shadow-lg transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ height: '30%', width: '74%' }}
      >
        <nav>
          <ul className="py-10 pl-5 flex justify-center flex-col gap-5">
            <Link to="/" className="font-nunito font-bold text-[20px]">
              Home
            </Link>
            <Link to="/onboardingseller" className="font-nunito font-bold text-[20px]">
              About
            </Link>
            <Link className="font-nunito font-bold text-[20px]">
              Monetize Your Skill
            </Link>
          </ul>
        </nav>
      </div>
    </ClickAwayListener>
  );
}
