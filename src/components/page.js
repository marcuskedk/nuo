import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import data from "../assets/json/data.json";

const Page = () => { 
    var location = useLocation();
    var slocation = location.pathname;
    var file = slocation.replace('/','');
    if ('/'+data.navigation[0].link == location.pathname) {
        document.body.classList.add(data.navigation[0].link);
        document.body.classList.remove(data.navigation[1].link);
        document.body.classList.remove(data.navigation[2].link);
    }
    if ('/'+data.navigation[1].link == location.pathname) {
        document.body.classList.remove(data.navigation[0].link);
        document.body.classList.add(data.navigation[1].link);
        document.body.classList.remove(data.navigation[2].link);
    }
    if ('/'+data.navigation[2].link == location.pathname) {
        document.body.classList.remove(data.navigation[0].link);
        document.body.classList.remove(data.navigation[1].link);
        document.body.classList.add(data.navigation[2].link);
    }
    const content = (
    <Fragment>
      {data[file].map((item, index) => 
      <main>
        <section>
          <Image src={data[file][index].images} />
        </section>
        <section className="px-5">
          <article className="article-one">
            <div>
              <h3>{data[file][index].title}<span className={file}>{data[file][index].span}</span>{data[file][index].dots}</h3>
            </div>
            <div>
              <p>{data[file][index].text}</p>
              <p>{data[file][index].text2}</p>
              <p>{data[file][index].text3}</p>
            </div>
          </article>
          <article className="article-two">
            <div>
              <Image src={data[file][index].logo1} />
              <p>{data[file][index].logotext1}</p>
            </div>
            <div>
              <Image src={data[file][index].logo2} />
              <p>{data[file][index].logotext2}</p>
            </div>
            <div>
              <Image src={data[file][index].logo3} />
              <p>{data[file][index].logotext3}</p>
            </div>
          </article>
          <footer>
            <p className="overflow-text fs-4">{data[file][index].overflowtext}</p>
          </footer>
        </section>
      </main>
      )}
    </Fragment>
  );
  return (
    <Fragment>
      { content }
    </Fragment>
  );
}

export default Page;
