### NOTES:

#### Game States:

```
- start:
    EACH(Player):
        Execute: Draw starting tile
        Execute: Mark starting tile as excluded on board
        Execute: Draw 6 tiles
        Execute: Give $6000
    STATE: RANDOM(Player).turn_state

- merger(starting_player: Player)
    EACH(Player)
        Execute: majority/minority bonus
    EACH(Player)
        Execute: Player.merger
```

#### Player States:

```
- turn_start
    Action(N): Discard unplaceable tile
    Action(1): Play tile
        IF(tile_is_merger)
            IF (hotel_tie)
                Action(1): Choose merging hotels
            State: Game.merger(starting_player: this)
        ELSE IF(tile_creates_new_hotel)
            Action(1): Pick Hotel
                Execute: Get Founding Share
        ACTION(3): Buy shares
            Execute: draw tile
            Execute: done

- merger
    Action(*): Convert 2 to 1
    Action(*): Sell shares
    Execute: done
```
