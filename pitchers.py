from data import PITCHERS

# Format the players full name
def get_player_name(first_name, last_name):
    name = f"{first_name} {last_name}"
    return name


# Return the first player whose id matches the id passed in
def get_player_by_id(id):
    for player in PITCHERS:
        if player["id"] == id:
            return player


# Return a player's name based on an id passed in
def get_player_name_by_id(id):
    player = get_player_by_id(id)
    if player:
        name = get_player_name(player["first_name"], player["last_name"])
        return name
    return None


if __name__ == "__main__":
    print(get_player_name("Rebekah", "Callari"))
    print(get_player_by_id(3))
    print(get_player_name_by_id(3))