import React, { Component } from 'react';

class skill extends Component {
    render() {
        return (
            <section id="skills">
            <div className="container-fluid">
              <div className="selection-title">
                <h2 className="text-success"><u>Skill</u></h2>
              </div>
              <div id="skill1">
                <div className="row">
                  <div className="col-sm-6"><p>HTML</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                    </div>
                    <p>CSS</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>40%</div>
                    </div>
                    <p>JAVA</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>40%</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>English</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '20%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>20%</div>
                    </div>
                    <p>Communication Skills</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div></section>
        );
    }
}

export default skill;