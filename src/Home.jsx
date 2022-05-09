import React from "react";
import Logo from "./assets/img/Logo.png";
import Video1 from "./assets/video/Video1.mp4";
import Video2 from "./assets/video/Video2.mp4";
import Tag from "./assets/img/tag.gif";
import Roadmap from "./assets/img/roadmap.png";
import Gallery1 from "./assets/img/gallery1.png";
import Gallery2 from "./assets/img/gallery2.png";
import FutureImg2 from "./assets/img/futureimg2.png";
import FutureImg3 from "./assets/img/futureimg3.png";
import FutureImg4 from "./assets/img/futureimg4.png";
import FutureImg5 from "./assets/img/futureimg5.png";
import { MdCircle } from "react-icons/md";

const Home = () => {
  return (
    <div className="appmainbox">
      {/* HOME HEADER  */}
      <header>
        <div className="headerbox">
          <div className="headerleft">
            <img src={Logo} alt="" loading="lazy" />
          </div>
          <div className="headerright">
            <a href="https://musee.medium.com/">Medium</a>
            <a href="https://www.twitter.com/musee_nft">Twitter</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION  */}
      <div className="box">
        <div className="herosection">
          <p>Coming Summer 2022</p>
          <h6>
            <span>Musée, -</span>
            <br />
            The<span> hub </span> of<span> Web3 art.</span>
          </h6>
          <div className="heroinputbtn">
            <input type="text" placeholder="Enter email address..." />
            <button>Get notified</button>
          </div>
        </div>
      </div>

      {/* MARKETPLACE SECTION  */}
      <div className="box">
        <div className="marketplacebox">
          <div className="marketplaceleft">
            <div className="marketplaceheading">
              <h6>01</h6>
              <h5>
                The web3 art <br /> marketplace
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              fringilla feugiat morbi vestibulum. Consequat elit, mi magna
              tempus donec diam dia.
            </p>
            <div className="pointsbox">
              <div className="mainpoint">
                <MdCircle />
                <h6>
                  A complete NFT art marketplace and social platform built for
                  creators and collectors
                </h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Open for all, truly community curated</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>
                  Low 5% commission fee for everyone / 2.5% for curated creators
                </h6>
              </div>
            </div>
            <div className="marketleftbottom">
              <div className="marketbottomtext">
                <h5>This is curated web3</h5>
                <div className="pointsbox">
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>
                      Earn your Musée curated creator or art connoiseur badge
                      and join an exclusive group of web3 curators.
                    </h6>
                  </div>
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>Low commission fee of 2.5%</h6>
                  </div>
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>Exclusive NFT Airdrops</h6>
                  </div>
                </div>
              </div>
              <div className="marketbottomimg">
                <img src={Tag} alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="marketplaceright">
            <div className="p-bottom-box">
              <video loop muted autoPlay src={Video1} alt="Video1" />
              <p>@MARCEL/A</p>
            </div>
            <h6>
              We re-invest in art; promoting crerators and growing the Musée
              collection
            </h6>
          </div>
        </div>
      </div>

      {/* ROADMAP SECTION  */}
      <div className="box">
        <div className="roadmapsection">
          <div className="marketplaceright">
            <div className="p-bottom-box">
              <img src={Roadmap} alt="" loading="lazy" />
              <p>@HyunHur</p>
            </div>
          </div>
          <div className="marketplaceleft">
            <div className="marketplaceheading">
              <h6>02</h6>
              <h5>
                The Musée NFT,
                <br /> utility at launch,
                <br /> a roadmap to envy.
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              fringilla feugiat morbi vestibulum. Consequat elit, mi magna
              tempus donec diam dia.
            </p>
            <div className="pointsbox">
              <div className="mainpoint">
                <MdCircle />
                <h6>Your own plot of land to curate.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>0% commission fee for holders.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Front page visibility.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Premium Meta-Galleries.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Exclusive listings.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Exclusive airdrops.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Shared ownership of the Musée collection.</h6>
              </div>
            </div>
            <div className="marketleftbottom">
              <div className="marketbottomtext">
                <h5>Future</h5>
                <div className="pointsbox">
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>
                      Metaverse ready avatar designed and created by a
                      collaboration of curated creators; a PFP you can be
                      excited about.
                    </h6>
                  </div>
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>Platform profit redistribution and $MUSEE rewards.</h6>
                  </div>
                  <div className="mainpoint">
                    <MdCircle />
                    <h6>Musée Art City metaverse ownership.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* META-GALLERIES SECTION  */}
      <div className="box">
        <div className="metagalleriesbox">
          <div className="metagalleriestext">
            <div className="marketplaceheading">
              <h6>03</h6>
              <h5>
                Meta-Galleries, your <br /> art on the otherside.
              </h5>
            </div>
            <p>
              Create and share your own Meta-Gallery - our first step towards
              the Musée Art City.
            </p>
            <div className="pointsbox">
              <div className="mainpoint">
                <MdCircle />
                <h6>Free for everyone.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Premium custom galleries available.</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Drops (NFT) unlocking limited rooms.</h6>
              </div>
            </div>
          </div>
          <div className="metagalleriesimg">
            <img src={Gallery1} alt="" loading="lazy" />
            <img src={Gallery2} alt="" loading="lazy" />
          </div>
        </div>
      </div>

      {/* FUTURE SECTION  */}
      <div className="fsimgbox">
        <div className="box ">
          <div className="futuresection">
            <div className="futuresectionleft">
              <div className="marketplaceheading">
                <h6>04</h6>
                <h5>The future of Musée.</h5>
              </div>
              <p>
                Nulla purus dui bibendum cursus pulvinar amet nulla. Nunc
                gravida in ut fermentum tristique molestie. Risus venenatis,
                ullamcorper orci, sit ultrices neque.
              </p>
              <div className="pointsbox">
                <div className="mainpoint">
                  <MdCircle />
                  <h6>Musée Art City: The hub of art in the metaverse.</h6>
                </div>
                <div className="mainpoint">
                  <MdCircle />
                  <h6>
                    $MUSEE Rewards: Distributed to land owners and platform
                    users.
                  </h6>
                </div>
                <div className="mainpoint">
                  <MdCircle />
                  <h6>Musée DAO</h6>
                </div>
              </div>
              <div className="p-bottom-box">
                <video loop muted autoPlay src={Video2} alt="Video2" />
                <p>@yossik</p>
              </div>
              <div className="createdwantedbox">
                <h6>Creators wanted!</h6>
                <button>Apply here</button>
              </div>
            </div>
            <div className="futuresectionright">
              <div className="p-bottom-box">
                <img src={FutureImg2} alt="" loading="lazy" />
                <p>@Lindale</p>
              </div>
              <div className="joinbox">
                <h6>
                  <span>Join the waitlist </span> <br />& get early access.
                </h6>
                <div className="heroinputbtn">
                  <input type="text" placeholder="Enter email address..." />
                  <button>Get notified</button>
                </div>
              </div>
              <div className="frlastimgbox">
                <div className="p-bottom-box-frleft">
                  <img
                    src={FutureImg3}
                    className="frleft"
                    alt=""
                    loading="lazy"
                  />
                  <p>@Fullzbelly</p>
                </div>
                <div className="p-bottom-box-frright">
                  <img
                    src={FutureImg4}
                    className="frright"
                    alt=""
                    loading="lazy"
                  />
                  <p>@Kilsypix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-bottom-box-fsimg">
          <img
            src={FutureImg5}
            className="futuresideimg"
            alt=""
            loading="lazy"
          />
          <p>@Penn</p>
        </div>
      </div>

      {/* FOOTER SECTION  */}
      <footer>
        <div className="box">
          <div className="footerbox">
            <div className="footerright">
              <p>© 2022 Inverted Studios Inc. All rights reserved.</p>
            </div>
            <div className="footerleft">
              <a href="https://musee.medium.com/">Medium</a>
              <a href="https://www.twitter.com/musee_nft">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
