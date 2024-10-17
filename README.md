# Rat Game

Remote Association Test Game

## Instructions 

1. Download project locally
2. From two separate terminals, run: 
- `cd /rat-game-spa && npm run dev`
- `cd /rat-game-api && dotnet run`

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

# Sound Track

https://www.epidemicsound.com/track/nLjgqmqXtS/

# Rat Squeak Sound Effect

https://www.zapsplat.com/music/cartoon-mouse-squeak-cute-and-high-pitched-2/

# Button Sound Effect

https://www.zapsplat.com/music/car-suv-90s-dash-lock-windows-button-press-2/
