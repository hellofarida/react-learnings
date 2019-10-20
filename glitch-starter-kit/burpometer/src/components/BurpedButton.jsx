const React = require('react');

/* takes a prop 'label' and gets the other props from store via VoteContainer
  and returns a div containing the label, vote buttons, and vote summary */
const BurpedButton = function({ label, onBurpedClick, voteScore, burpCount }) {
  return (
    <div>

      <h2>{label}</h2>

      <button alt="burp +1" onClick={onBurpedClick}>&uarr;</button> &nbsp;

      <p>I've burped {burpCount || 0 } time(s) today</p>

    </div>
  );
}

module.exports = BurpedButton;
