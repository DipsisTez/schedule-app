// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
  	    <div>
      <h3 style={{ fontSize: '20px', marginTop: '20px', marginBottom: '20px' }}>Дневной прогресс</h3>
      <div className="stat-container">
        <div className="progress-container">
          <div className="progress-bar income" style={{ width: `${percentage}%` }}></div>
        	</div>
          </div>
       </div>

  );
};

export default ProgressBar;
