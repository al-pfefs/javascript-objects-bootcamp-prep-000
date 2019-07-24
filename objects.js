var playlist = { jm: 'hello' }

function updatePlaylist(playlist, artistName, songTitle) {
   objectAssign(playlist, { [artistName]: songTitle})
}