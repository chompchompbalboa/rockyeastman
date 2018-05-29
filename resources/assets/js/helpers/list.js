//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import move from 'lodash-move'

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------
const moveItemUp = (list, fromIndex) => {
  if(fromIndex > 0) {
    return move(list, fromIndex, fromIndex - 1)
  }
  return list
}

const moveItemDown = (list, fromIndex) => {
  return move(list, fromIndex, fromIndex + 1)
}

export default { moveItemUp, moveItemDown }