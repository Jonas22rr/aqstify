import React from "react";
import PicCarousel from "./Carousel";
import TheBand from "./theBand";
import References from "./References";
import Contact from "./Contact";
import SozialMedia from "./SozialMedia";
import LegalNotice from "./LegalNotice";

class Homepage extends React.Component<{}, {}> {
    render() {
        return (
            <div id="App" className="App">
                <div className="App">
                    <PicCarousel />
                    <TheBand />
                    <References />
                    <Contact />
                    <SozialMedia />
                    <LegalNotice />
                </div>
            </div>
        );
    }
}

export default Homepage;
