import React from 'react'
import { FaHandHoldingUsd, FaLock, FaRegCreditCard } from 'react-icons/fa';
import './ThreeColGrid.css';

export default function ThreeColGrid() {
    return (
      <section className="row">
      
        <div className="column">
          <div className="icons">
            <FaRegCreditCard />
          </div>
          <h3>Easy to use</h3>
          <p>Record your expenses and track progress with ease</p>
        </div>

        <div className="column">
          <div className="icons">
            <FaHandHoldingUsd />
          </div>
          <h3>Rewarding Experience</h3>
          <p>Understand your spending habits better than ever before</p>
        </div>

        <div className="column">
          <div className="icons">
            <FaLock />
          </div>
          <h3>Security</h3>
          <p>Rest assured knowing your records are kept confidential</p>
        </div>
      </section>
    );
}
