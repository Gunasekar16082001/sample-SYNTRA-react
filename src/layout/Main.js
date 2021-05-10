import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';


import { Container, Row, Col, Card } from 'react-bootstrap';


function Main() {
  return (

    <React.Fragment>
                  {/* header */}
                  <header className="hedder-1">
            <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SYNTRA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
              <a class="nav-link" href="#Main">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ways">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section">Services</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">Contact</a>
            </li>
           
          </ul>
    </div>
  </div>
</nav>
   
    <div class="container text-center">
      <div class="row">
        <div class="About ">
      
          <h1 className="About-us">About Us</h1>
          <p className="about-p">
            Home  <img src="https://img.icons8.com/material-outlined/24/000000/back.png"/>  About us
          </p>
        
        </div>
       
      </div>
    </div>
  </header>
<div class="custom-shape-divider-top-1620537624">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      {/* Syntra Digital Agency */}

      <div className="Main" id="Main">
        <Container>
          <Row>
            <Col sm className="blue-p"><h1>Syntra Digital Agency</h1>
              <p>sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium,tattam ram oporiom ooque dict sunt explaba accusantium dolonammqua laudantium,tattam ram oporiom ooque dict sunt explaba.</p>
              <Container>
                <Row>
                  <Col sm><h4>Export Team</h4>
                    <p>Danea poda justo tringles vet acquet vulputate eget.</p></Col>
                  <Col sm><h4>Export Team</h4>
                    <p>Danea poda justo tringles vet acquet vulputate eget.</p></Col>
                </Row>
              </Container>
              <Card body className="card-p">"We built throughtfull identities and experinces to elevate and empower organizations.</Card>

            </Col>
            <Col sm><div>
              <img className="image" src={require('../images/undraw_Social_media_re_w12q.png').default} />
            </div></Col>
          </Row>

        </Container>

      </div>

      {/* Why Choose Us */}

      <div className="ways" id="ways">
        <div class="custom-shape-divider-top-1620547541">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="container">
          <div className="choose">
            <h1 className="choose-1">Why Choose Us</h1>
            <p className="prag"
            >sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua <br></br>laudantiumvoluptaterm accusantium dolonammqua laudantium.</p>
          </div>
          <Container>
            <Row>
              <Col sm><ul>
                <li><h5>High Quality Services</h5>
                  <p className="prag">sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.</p>
                </li>
                <li><h5>High Quality Services</h5>
                  <p className="prag">sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.</p>
                </li>
              </ul>
              </Col>
              <Col sm> <img className="image" src={require('../images/undraw_Social_media_re_w12q.png').default} />
              </Col>
              <Col sm><ul>
                <li><h5>High Quality Services</h5>
                  <p className="prag">sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.</p>
                </li>
                <li><h5>High Quality Services</h5>
                  <p className="prag">sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.</p>
                </li>
              </ul></Col>

            </Row>
          </Container>
        </div>

      </div>

      <div class="custom-shape-divider-top-1620537624">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>


{/* What Client Say */}
     

        <div class="section-4" id="section">
          <div class="container text-center">
            <h1 className="blue-p">What Client Say</h1>
            <p className="blue-p">sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium, explaba.</p>
          </div>
          <div class="team row ">
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">

                  <p class="card-text">
                    sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.
                  </p>
                  <div class="card-img-top">
                    <img className="img-fluid rounded-circle w-50 p-4" src={require('../images/2588.jpg').default} />
                  </div>
                  <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">

                  <p class="card-text">
                    sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.
                  </p>
                  <div class="card-img-top">
                    <img className="img-fluid rounded-circle w-50 p-4" src={require('../images/2588.jpg').default} />
                  </div>
                  <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">

                  <p class="card-text">
                    sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.
                  </p>
                  <div class="card-img-top">
                    <img className="img-fluid rounded-circle w-50 p-4" src={require('../images/2588.jpg').default} />
                  </div>
                  <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     

{/* waves-2 */}

      <div className="waves-2">
        <div class="custom-shape-divider-top-1620559402">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
        <div class="container-fluid text-center">
          <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
            <div class="rect">
              <h1><img src="https://img.icons8.com/dusk/64/000000/spiral-bound-booklet.png" /></h1>
              <span  className="span-icon">100%</span>
              <p className="icon-p">Projects completed</p>
            </div>
            <div class="rect">
              <h1><img src="https://img.icons8.com/clouds/100/000000/user-group-woman-woman.png" /></h1>
              <span  className="span-icon">100+</span>
              <p className="icon-p">Cups Coffee</p>
            </div>
            <div class="rect">
            <h1><img src="https://img.icons8.com/color/48/000000/man-winner.png" /></h1>
            <span  className="span-icon">100+</span>
              <p className="icon-p">Tickets Submitted</p>
            </div>
            <div class="rect">
              <h1><img src="https://img.icons8.com/bubbles/50/000000/conference-call.png" /></h1>
              <span  className="span-icon">50+</span>
              <p className="icon-p">Total Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1620559305">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
   

{/* Latest Blog */}
     

        <div class="section-4" id="blog">
          <div class="container text-center">
            <h1 class="blue-p">Latest Blog</h1>
            <p class="blue-p">                    sod ut porspicaiatis undo omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium omins iste naturs error sit voluptaterm accusantium dolonammqua laudantium.</p>
          </div>
          <div class="team row ">
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">
                <div class="card-img-top">
                    <img className="img-fluid " src={require('../images/undraw_Development_re_g5hq.png').default} />
                  </div>
                  <h4 className="blue-p">Why DigitalMarketing is importent? </h4>
                  <p class="blue-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda

                  </p>
                 
                  <button type="button" class="btn-btn">Read more....!</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">
                <div class="card-img-top">
                  <img className="img-fluid " src={require('../images/undraw_Development_re_g5hq.png').default} />
                  </div>
                  <h4 className="blue-p">Why DigitalMarketing is importent? </h4>
                  <p class="blue-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda

                  </p>
                  <button type="button" class="btn-btn">Read more....!</button>

                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">

                <div class="card-body">
                <div class="card-img-top">
                  <img className="img-fluid " src={require('../images/undraw_Development_re_g5hq.png').default} />
                  </div>
                  <h4 className="blue-p">Why DigitalMarketing is importent? </h4>
                  <p class="blue-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda

                  </p>
                  <button type="button" class="btn-btn">Read more....!</button>

                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* footer */}
      <div className="footer" id="footer">
        <div class="custom-shape-divider-top-1620547541">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
        <Container>
          <Row>
            <Col sm>
              <h2 >SYNTRA</h2>

              <p className="footer-p">            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
              </p>


              <div class="column text-light">
                <img className="footer-icon" src={require('../images/you.png.png').default}  />
                <img className="footer-icon" src={require('../images/in.png.png').default}  />
                <img className="footer-icon" src={require('../images/twit.png.png').default}  />
                <img className="footer-icon" src={require('../images/fb.png.png').default}  />

                   </div>

            </Col>
            <Col sm><h3>Information</h3>
              <span>About us</span><br></br>
              <span>Services</span><br></br>
              <span>Our Team</span><br></br>
              <span>Our price</span><br></br>
              <span>Contact</span></Col>
            <Col sm><h3>Contact Us</h3>
              <span> <img className="footer-img" src="https://img.icons8.com/android/16/000000/marker.png" />200 jefferson street port charlattr
                fl 33952</span><br></br>
              <span><img className="footer-img" src="https://img.icons8.com/android/24/000000/phone.png" />+012 3456 564</span><br></br>
              <span><img className="footer-img" src="https://img.icons8.com/material/24/000000/email-open.png" />syntro@support.com</span>
            </Col>
            <Col sm><h3>News Latter</h3>
              <p className="footer-p">            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
              </p>
              <div class="input-group pr-5">
                <input type="text" class="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email" />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <img src="https://img.icons8.com/officexs/16/000000/email.png" />
                  </div>
                </div>
              </div>


            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  );
}

export default Main;