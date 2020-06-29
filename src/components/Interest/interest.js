import React, { Component } from 'react';

class interest extends Component {
    render() {
        return (
            <section id="interest">
        <div className="container-fluid">
          <div className="selection-title">
            <h2 className="text-success"><u>Favorites</u></h2>
            <h5>Sở thích của mình là giải trí sau những giờ học căng thẳng bằng cách đi chơi, chơi game ,..... và đặc biệt mình rất thích ngắm mèo, chó,.... <br />
              Và rảnh rỗi mình thường xem phim, hoạt hình như:
            </h5>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2"><img src="image/7.png" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/tsubasa.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/phieuluu.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/anime.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/anime2.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/doremon.jpg" width={200} height={200} /></div>
            </div>
            <div className="row">
              <div className="col-lg-2"><img src="image/hd1.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/hd2.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/hd3.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/trando.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/lytieulong.jpg" width={200} height={200} /></div>
              <div className="col-lg-2"><img src="image/chungtudon.jpg" width={200} height={200} /></div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <br />
              <br />
              <p>Xem full tại:</p>
              <div className="col-sm-6">
                <a href="http://www.youtube.com/playlist?list=PLkeM1RSzqJFL1HYYxw8o6Txn-c3uRVZuO">Link phim</a>
              </div>
              <div className="col-sm-6">
                <a href="http://www.youtube.com/watch?v=v0Z5gZPqH8w&list=PLtEl90MQeMy9v0T3lmgI1pr6B2J7JNP6X">Link hoạt hình tbs</a> 
              </div>
              <div className="col-sm-6">
                <a href="http://www.youtube.com/watch?v=qdwBUUbSGKI&list=PLT07o_OrzJXEISoy5RrGhdLJ4seoDo4Eu">Link doremon</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default interest;