import * as React from 'react';
import "./Header.css"

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
      <div className='Header'>
          <div className='leftContainer'>
              <h3 className='name-1'>Quiz App</h3>
          </div>
          <div className='rightContainer'>
              <h5>0/20, 20sec</h5>
          </div>
      </div>
  ) ;
};

export default Header;
