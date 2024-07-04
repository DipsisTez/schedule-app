import React from 'react';

interface FinanceStatsProps {
  income: number;
  exp: number;
  dd: number;
  formatMoney: (amount: number) => string;
}

const FinanceStats: React.FC<FinanceStatsProps> = ({ income, exp, dd, formatMoney }) => {
  return (
    <div>
      <h3 style={{ fontSize: '20px', marginTop: '20px', marginBottom: '20px' }}>Текущая карма</h3>
      <div className="stat-container">
        <h4>Доход</h4>
        <h5 id="money-in">{formatMoney(income)}</h5>
        <div className="progress-container">
          <div className="progress-bar income" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div className="stat-container">
        <h4>Расход</h4>
        <h5 id="money-ex">{formatMoney(exp)}</h5>
        <div className="progress-container">
          <div className="progress-bar expenditure" style={{ width: `${(exp / income) * 100}%` }}></div>
        </div>
      </div>
      <div className="stat-container">
        <h4>Вычет</h4>
        <h5 id="money-de">{formatMoney(dd)}</h5>
        <div className="progress-container">
          <div className="progress-bar deduction" style={{ width: `${(dd / income) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default FinanceStats;
