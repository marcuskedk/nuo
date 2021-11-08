import React, { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import data from "../assets/json/data.json";

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const Page = () => { 

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

  const DesktopView = (
    <Fragment>
      {data[file].map((item, index) => 
      <main>
        <section>
          <Image src={data[file][index].desktopImages} />
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

  const MobileView = (
    <Fragment>
      {data[file].map((item, index) => 
      <main>
        <section>
          <Image className="w-100" src={data[file][index].mobileImages} />
        </section>
        <section className="pt-2">
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
            <img className="w-25" src={data.logo}/>
          </footer>
        </section>
      </main>
      )}
    </Fragment>
  );

  return dimensions.width < breakpoint ? MobileView : DesktopView;
  
}

export default Page;
