import decks from '../decks'
import shuffle from 'array-shuffle'

export const landingPageSubmit = (formData) => {
  return (dispatch, getState) => {
    const rawdeck = decks[formData.deck]

    const deckCards = rawdeck.map((cardData, i) => {
      return {
        cardData: cardData,
        tapped: false,
        index: i,
        counters: {
          power: 0,
          toughness: 0
        },
        modifiers: {
          power: 0,
          toughness: 0
        }
      }
    })

    const deck = shuffle(deckCards)

    dispatch({
      type: 'IMPORT_DECK',
      deck
    })

    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: formData
    })
  }
}
