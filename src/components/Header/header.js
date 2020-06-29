import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <div id="hero-container">
            <img className="hero" src="image/bgr1.jpg" />
            <h2 className="t0">
              <span><strong>I'm Duong ĐT</strong> </span>
            </h2>
            <p2 className="t1">
              And I'm a IT Student of NLU
            </p2>
            {/* <a href="#about" class="btn-get-started scrollto mid">
                    <i><img src="image/scroll.png"></i>
                </a> */}
            <a className="btn" href="#about">Hire me</a>
          </div>
    
        );
    }
}

export default header;