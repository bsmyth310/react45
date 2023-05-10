import React, {useState} from 'react';
import Navigation from "./Navigation";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    //renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;

            default: 
                return<About />;
        }
    };

    return (
        <div> 
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/bsmyth310?tab=repositories">
                        <span className="content is-large">Benjamin Smyth</span>
                    </a>
                </div>
            </nav>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* Call the renderPage function passing in the currentPage */}
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;
