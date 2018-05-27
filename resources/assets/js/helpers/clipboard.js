//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------
const copyInputContents = (ref) => {
  ref.select()
  document.execCommand('copy')
}

export default { copyInputContents }