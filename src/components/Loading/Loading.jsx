import React, { useEffect } from 'react';
import './Loading.css';

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [setLoading]);

  const name = "Akshay "; 
  return (
    <div className="loading-container">
      <div className="loading-text">
        {name.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
