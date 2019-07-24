var playlist = { jm: 'hello' }

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
   return playlist
}