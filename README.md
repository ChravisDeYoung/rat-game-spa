# rat-game-spa

Remote Association Test Game

## Tests Data

Retrieved from https://www.remote-associates-test.com/ using the following script:

```
let tests = [];
$(".table tr").each(function(x) {
    tests.push({
        items: $(this).find('a').text().split(' / '),
        solution: $(this).find('.solution').text(),
        difficulty: $(this).find('.label').text()
    });
});
JSON.stringify(tests);
```

## TODO

- give different values to different tests
  - Easy = 1, Hard = 3
- show the score on the home screen after a game

# Sound Track

https://www.epidemicsound.com/track/nLjgqmqXtS/

# Rat Squeak Sound Effect

https://www.zapsplat.com/music/cartoon-mouse-squeak-cute-and-high-pitched-2/
