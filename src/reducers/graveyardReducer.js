const graveyardReducer = (graveyard = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_GRAVEYARD':
      const untapped = action.cards.map((card) => {
        return card.set('tapped', false);
      })
      return graveyard.concat(untapped)
    case 'REMOVE_CARDS_FROM_GRAVEYARD':
      if (action.cards) {
        return graveyard.filterNot((card) => {
          return action.cards.includes(card)
        })
      } else {
        return graveyard.slice(0, -action.number)
      }
    case 'REMOVE_CARD':
      if (action.cardLocation === 'graveyard') {
        return graveyard.delete(action.i)
      } else {
        return graveyard
      }
    default:
      return graveyard
  }
}

export default graveyardReducer;
