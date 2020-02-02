import React from 'react'
import Collapsible from '../../Components/Collapsible'
import './index.scss'
const Dashboard = () => {
    return (
        <div className="container">
            <div className="image-container">
                <div className="overlay">
                    <p className="explanation">
                        Häufig gestellte Fragen
                    </p>
                    <div className="image-small">
                        <div className="part1" />
                        <div className="part2" />
                        <div className="part3" />
                    </div>
                </div>
            </div>
            <div className="info-container">
                <Collapsible title="1. Warum kann ich nicht direkt online buchen?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="2. Zahle ich mehr als bei einer Direktbuchung beim Hotel?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="3. Welche Vorteile bietet die Buchung über reisetopia Hotels?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="4. Warum bekomme ich bei reisetopia Hotels zusätzliche Vorteile ohne Aufpreis?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="5. Kann ich eine Buchung über reisetopia Hotels kostenfrei stornieren oder umbuchen?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="6. Kann ich eine Buchung über reisetopia Hotels kostenfrei stornieren oder umbuchen?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="7. Kann ich eine Buchung über reisetopia Hotels kostenfrei stornieren oder umbuchen?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
                 <Collapsible title="8. Kann ich eine Buchung über reisetopia Hotels kostenfrei stornieren oder umbuchen?">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                 </Collapsible>
            </div>
        </div>
    )
}

export default Dashboard