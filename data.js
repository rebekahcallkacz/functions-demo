const PITCHERS = [
    { id: 1, firstName: "Ranger", lastName: "Suarez", team: 1},
    { id: 2, firstName: "Aaron", lastName: "Nola", team: 1},
    { id: 3, firstName: "Shane", lastName: "Baz", team: 2},
    { id: 4, firstName: "Luis", lastName: "Patino", team: 2},
  ];
  
  const TEAMS = [
    { id: 1, name: "Philadelphia Phillies"},
    { id: 2, name: "Tampa Bay Rays"},
  ];
  
  const GAMES = [
    { id: 1, homeTeam: 1, awayTeam: 2, date: "2022-05-01", startingPitchers: [1, 3]},
    { id: 2, homeTeam: 1, awayTeam: 2, date: "2022-05-02", startingPitchers: [2, 4]},
    { id: 3, homeTeam: 2, awayTeam: 1, date: "2022-05-15", startingPitchers: [2, 3]},
  ];