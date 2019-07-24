var playlist = { jm: 'hello' }

function updatePlaylist(playlist, artistName, songTitle) {
  return objectAssign({}, playlist, { [artistName]: songTitle})
}