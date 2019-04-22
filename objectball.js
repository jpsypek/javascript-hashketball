let gameObject = require('./game-object.js')
let allPlayers = Object.assign({}, gameObject.home.players, gameObject.away.players)

function numPointsScored (player) {
  return allPlayers[player].points
}

function shoeSize (player) {
  return allPlayers[player].shoe
}

function teamColors (teamName) {
  for (let attribute in gameObject) {
    if (gameObject[attribute].team_name === teamName) {
      return gameObject[attribute].colors
    }
  }
}

function teamNames() {
  let teams = []
  for (let attribute in gameObject) {
    teams.push(gameObject[attribute].team_name)
  }
  return teams
}

function playerNumbers(team) {
  // let teamHash = players(team)
  let numbers = []
  for (let attribute in players(team)) {
    numbers.push(players(team)[attribute].number)
  }
  return numbers
}

function players (team) {
  for (let attribute in gameObject) {
    if (gameObject[attribute].team_name === team) {
      return gameObject[attribute].players
    }
  }
}

function playerStats (player) {
  return allPlayers[player]
}

function bigShoeRebounds() {
  let biggestShoe = 0
  let reboundOfBigShoe = 0
  for (let player in allPlayers) {
    if (allPlayers[player].shoe > biggestShoe) {
      reboundOfBigShoe = allPlayers[player].rebounds
    }
  }
  return reboundOfBigShoe
}

function mostPointsScored () {
  let mostPoints = 0
  let playerWithMostPoints = null
  for (let player in allPlayers) {
    if (allPlayers[player].points > mostPoints) {
      mostPoints = allPlayers[player].points
      playerWithMostPoints = player
    }
  }
  return playerWithMostPoints
}

function winningTeam () {
  homeTeamPoints = teamPoints("home")
  awayTeamPoints = teamPoints("away")
  return homeTeamPoints > awayTeamPoints ? gameObject["home"].team_name : gameObject["away"].team_name
}

function teamPoints (team) {
  points = 0
  for (let individual in gameObject[team].players){
    points += gameObject[team].players[individual].points
  }
  return points
}
