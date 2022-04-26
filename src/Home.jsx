import React from "react";
import Logo from "./assets/img/Logo.png";
import Marketplace from "./assets/img/marketplaceimg.png";
import Tag from "./assets/img/tag.png";
import Roadmap from "./assets/img/roadmap.png";
import Gallery1 from "./assets/img/gallery1.png";
import Gallery2 from "./assets/img/gallery2.png";
import { MdCircle } from "react-icons/md";

const Home = () => {
  return (
    <div className="appmainbox">
      {/* HOME HEADER  */}
      <header>
        <div className="headerbox">
          <div className="headerleft">
            <img src={Logo} alt="" />
          </div>
          <div className="headerright">
            <a href="#">Medium</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION  */}
      <div className="box">
        <div className="herosection">
          <h6>
            Musée <span>is the next</span> <br /> WEB3 ART{" "}
            <span>marketplace.</span>
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
                <img src={Tag} alt="" />
              </div>
            </div>
          </div>
          <div className="marketplaceright">
            <img src={Marketplace} alt="" />
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
            <img src={Roadmap} alt="" />
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
              <h5>Meta-Galleries.</h5>
            </div>
            <p>
              Create and share your own Meta-Gallery - our first step towards
              the Musée Art City.
            </p>
            <div className="pointsbox">
              <div className="mainpoint">
                <MdCircle />
                <h6>Partners</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Artists</h6>
              </div>
              <div className="mainpoint">
                <MdCircle />
                <h6>Collector’s exclusive builds</h6>
              </div>
            </div>
          </div>
          <div className="metagalleriesimg">
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
