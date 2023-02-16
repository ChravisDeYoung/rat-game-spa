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