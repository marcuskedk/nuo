import React, { Fragment, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import data from "../assets/json/data.json";

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const Home = () => {

  const [ dimensions, setDimensions ] = useState(windowDims());

  useEffect(() => {
    
    const handleResize = () => {
      setDimensions(windowDims());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const breakpoint = 992;

  document.body.classList.remove('whatwedo');
  document.body.classList.remove('maintainable');
  document.body.classList.remove('getintouch');
  
  const DesktopView = (
    <Fragment>
      <main className="justify-content-around">
        {data.home.map((item, index) =>
          <Link to={'/' + data.home[index].key}>
            <Image key={data.home[index].key} src={data.home[index].desktopImages} className={"img-width " + data.home[index].class} fluid />
            <p className="overflow-text fs-6">{data.home[index].overflowtext}</p>
          </Link>
        )}
      </main>
    </Fragment>
  );

  const MobileView = (
    <Fragment>
      <main className="justify-content-around">
        {data.home.map((item, index) =>
          <Link to={'/' + data.home[index].key}>
            <Image key={data.home[index].key} src={data.home[index].mobileImages} className="img-width" fluid />
            <p className="overflow-text fs-6">{data.home[index].overflowtext}</p>
          </Link>
        )}
      </main>
    </Fragment>
  );

  return dimensions.width < breakpoint ? MobileView : DesktopView;
}

export default Home;
