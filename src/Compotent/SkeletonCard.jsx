import React from "react";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-flag"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  );
}

export default SkeletonCard;
