import React, { Component } from 'react'
import { connect } from "react-redux"
import './style.css'

import Deck from "../../components/Deck"
import Graveyard from "../../components/Graveyard"
import CreatureZone from "../../components/CreatureZone"
import PhaseTracker from "../../components/PhaseTracker"

import { discardCards } from "../../actions/deckActions"
import { exileCards } from "../../actions/graveyardActions"
import { toggleTapped } from "../../actions/cardActions"
import { nextPhase } from "../../actions/phaseActions"

import phases from '../../constants/phases.js'

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <PhaseTracker currentPhaseText={this.props.phaseText} onNextPhase={this.props.nextPhase}/>
        <Graveyard cards={this.props.graveyard} onExile={this.props.exileCards}/>
        <Deck cards={this.props.deck} onDiscard={this.props.discardCards}/>
        <CreatureZone cards={this.props.creatures} onTap={this.props.toggleTapped} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      deck: state.get("deck"),
      graveyard: state.get("graveyard"),
      creatures: state.get("creatures"),
      phaseText: phases[state.get("phase")]
    }
  },
  {
    discardCards,
    exileCards,
    toggleTapped,
    nextPhase
  })(GamePage)
