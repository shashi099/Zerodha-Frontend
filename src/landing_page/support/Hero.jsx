import React from 'react'


const Hero = () => {
    return (
        <section className="container-fluid" id="supportHero">
          <div className="p-5" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>
          <div className="row m-5 d-flex justify-content-around">
            <div className="col-4 p-1 my-3">
              <h1 className="fs-4">
                Search for an answer or browse help topics to create a ticket
              </h1>
              <input placeholder="Eg. how do I activate F&O" />
              <br />
              <a href="">Track account opening</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <a href="">Track segment activation</a> &nbsp; &nbsp; &nbsp; &nbsp;
              <a href="">Intraday margins</a> &nbsp; &nbsp; &nbsp;
              <a href="">Kite user manual</a>
            </div>
            <div className="col-4 p-3 my-5 ml-5 ">
              <h1 className="fs-3">Featured</h1>
              <ol>
                <li>
                  <a href="">Current Takeovers and Delisting - January 2024</a>
                </li>
                <li>
                  <a href="">Latest Intraday leverages - MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
      );
}

export default Hero
