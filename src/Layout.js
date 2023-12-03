import React from 'react';
import './layout.css';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children, back = false, listenNow = false, currentPage, cal = false }) => {
    const navigate = useNavigate();

    const buttonArr = [
        'Listen Now',
        'Donate',
        'Get Involved',
        'Shop',
        'Become a DJ',
    ];
    const linkArr = [
        '/listenNow',
        '/donate',
        '/getInvolved',
        '/teeShirts',
        '/becomeadj',
    ];

    return (
        <div className="layout-container">
            <div className="side_buttons">
                {back && (
                    <button
                        className="button-wood-plank back"
                        onClick={() => navigate(-1)}
                        id="back"
                    ></button>
                )}
                {listenNow && (
                    <button
                        className="button-wood-plank back"
                        onClick={() => navigate('/')}
                        id="home"
                    ></button>
                )}
                {[0, 1, 2, 3].map((index) => {
                    if (linkArr[index] === currentPage) {
                        return null;
                    } else
                        return (
                            <div key={index}>
                                <a href={linkArr[index]}>
                                    <button id={`id-${index}`} className="button-wood-plank"></button>
                                </a>
                            </div>
                        );
                })}
                {cal && (
                    <button
                        id="id-4"
                        className="button-wood-plank"
                        onClick={() =>
                            window.open('https://www.illinoisvalleyweb.org/calendar', '_blank')
                        }
                    ></button>
                )}
            </div>
            <div className="main-content">
                {children}
            </div>
            <div className="footer">
                <p>Footer content</p>
            </div>
        </div>
    );
};

export default Layout;