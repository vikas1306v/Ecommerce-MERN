// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbsTest = () => {
  const location = useLocation();
  var pathnames = location.pathname.split('/').filter((x)=>x);  
  console.log(pathnames)


  return (
    <div>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={index}>
            {' / '}
            {isLast ? (
              <span>{name}</span>
            ) : (
              <Link to={routeTo}>Product</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadcrumbsTest;
