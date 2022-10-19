const Footer = () => {
    return (
      <>
        <div className="site-footer" style={{display: "flex", flexWrap: "wrap"}}>
          <div className="footer-dots"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h3>
                    About Launch<span className="text-primary">.</span>{" "}
                  </h3>
                  <p>
                   
                  </p>
                </div>
              </div>
  
              <div className="col-lg-2 ml-auto" style={{marginRight: "10vw"}}>
                <div className="widget">
                  {/* 깃허브 주소용 아이콘 코드 */}
                  <h3>Follow Us</h3>
                  <ul className="list-unstyled social">
                    <li>
                      <a href="https://github.com/swon95">
                        <span className="icon-instagram">
                          <img src="https://i0.wp.com/worldyogaforum.com/wp-content/uploads/2022/04/34a.png?resize=1024%2C845&ssl=1" alt="Image" className="img-fluid" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/goodsosbva">
                        <span className="icon-twitter">
                        <img src="https://avatars.githubusercontent.com/u/62534722?v=4" alt="Image" className="img-fluid"/>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/zkdk1241">
                        <span className="icon-facebook">
                        <img src="https://avatars.githubusercontent.com/u/47853679?v=4" alt="Image" className="img-fluid" />

                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jmahn1901">
                        <span className="icon-linkedin">
                        <img src="https://avatars.githubusercontent.com/u/72716200?v=4" alt="Image" className="img-fluid" />

                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/hidihi">
                        <span className="icon-pinterest">
                        <img src="https://avatars.githubusercontent.com/u/90600309?v=4" alt="Image" className="img-fluid" />

                        </span>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!">
                        <span className="icon-dribbble"></span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
  
              {/* <div className="col-lg-2">
                <div className="widget">
                  <h3>Services</h3>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#!">Built for Developers</a>
                    </li>
                    <li>
                      <a href="#!">Modern Design</a>
                    </li>
                    <li>
                      <a href="#!">Building Stunning Websites</a>
                    </li>
                    <li>
                      <a href="#!">Bring Ideas To Life</a>
                    </li>
                  </ul>
                </div>
              </div> */}
  
              <div className="col-lg-3">
                <div className="widget">
                  <h3>Quick Contact</h3>
                  <address>AI 양재 허브</address>
                  <ul className="list-unstyled links mb-4">
                    <li>
                      <a href="tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="row mt-5">
              <div className="col-12 text-center">
                {/* <!-- License information: https://untree.co/license/ --> */}
                <p className="copyright">
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2022.
                  All Rights Reserved. — Designed with love by{" "}
                  <a href="https://untree.co">Untree.co</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  