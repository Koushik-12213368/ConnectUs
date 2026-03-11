import React from 'react';

const StatsCard = ({ title, value, icon, color, suffix = '' }) => {
  return (
    <div className={`card border-start border-${color} border-4`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className={`bg-${color} bg-opacity-10 p-3 rounded-circle me-3`}>
            <i className={`fas fa-${icon} text-${color} fs-4`}></i>
          </div>
          <div>
            <h6 className="text-muted mb-1">{title}</h6>
            <h4 className="mb-0">{value}{suffix}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;