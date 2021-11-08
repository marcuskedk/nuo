import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import data from "../assets/json/data.json";

const Home = () => {
  document.body.classList.remove('whatwedo');
  document.body.classList.remove('maintainable');
  document.body.classList.remove('getintouch');
  const content = (
    <Fragment>
      <main className="justify-content-around">
        {data.home.map((item, index) =>
          <Link to={'/' + data.home[index].key}>
            <Image key={data.home[index].key} src={data.home[index].images} className={"img-width " + data.home[index].class} fluid />
            <p className="overflow-text fs-6">{data.home[index].overflowtext}</p>
          </Link>
        )}
      </main>
    </Fragment>
  );
  return (
    <Fragment>
      { content }
    </Fragment>
  );
}

export default Home;
