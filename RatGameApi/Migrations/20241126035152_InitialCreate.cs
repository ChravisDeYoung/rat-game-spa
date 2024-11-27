#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RatGameApi.Migrations;

using Microsoft.EntityFrameworkCore.Migrations;

/// <inheritdoc />
public partial class InitialCreate : Migration
{
    private static readonly string[] columns = ["Id", "Difficulty", "Score", "UserId"];
    private static readonly string[] columnsArray = ["Id", "Difficulty", "Item1", "Item2", "Item3", "Solution"];

    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "HighScores",
            columns: table => new
            {
                Id = table.Column<int>(type: "int", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Score = table.Column<int>(type: "int", nullable: false),
                Difficulty = table.Column<int>(type: "int", nullable: false),
                UserId = table.Column<int>(type: "int", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_HighScores", x => x.Id));

        migrationBuilder.CreateTable(
            name: "Tests",
            columns: table => new
            {
                Id = table.Column<int>(type: "int", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Item1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Item2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Item3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Solution = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Difficulty = table.Column<int>(type: "int", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_Tests", x => x.Id));

        migrationBuilder.CreateTable(
            name: "Users",
            columns: table => new
            {
                Id = table.Column<int>(type: "int", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Username = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_Users", x => x.Id));

        migrationBuilder.InsertData(
            table: "HighScores",
            columns: columns,
            values: new object[,]
            {
                { 1, 1, 52, 1 },
                { 2, 2, 29, 1 }
            });

        migrationBuilder.InsertData(
            table: "Tests",
            columns: columnsArray,
            values: new object[,]
            {
                { 1, 1, "cottage", "swiss", "cake", "cheese" },
                { 2, 1, "cream", "skate", "water", "ice" },
                { 3, 1, "loser", "throat", "spot", "sore" },
                { 4, 1, "show", "life", "row", "boat" },
                { 5, 1, "night", "wrist", "stop", "watch" },
                { 6, 1, "duck", "fold", "dollar", "bill" },
                { 7, 1, "rocking", "wheel", "high", "chair" },
                { 8, 1, "dew", "comb", "bee", "honey" },
                { 9, 1, "fountain", "baking", "pop", "soda" },
                { 10, 1, "preserve", "ranger", "tropical", "forest" },
                { 11, 2, "aid", "rubber", "wagon", "band" },
                { 12, 2, "flake", "mobile", "cone", "snow" },
                { 13, 1, "cracker", "fly", "fighter", "fire" },
                { 14, 2, "safety", "cushion", "point", "pin" },
                { 15, 1, "cane", "daddy", "plum", "sugar" },
                { 16, 2, "dream", "break", "light", "day" },
                { 17, 2, "fish", "mine", "rush", "gold" },
                { 18, 1, "political", "surprise", "line", "party" },
                { 19, 1, "measure", "worm", "video", "tape" },
                { 20, 2, "high", "district", "house", "school/court" },
                { 21, 3, "sense", "courtesy", "place", "common" },
                { 22, 1, "worm", "shelf", "end", "book" },
                { 23, 4, "piece", "mind", "dating", "game" },
                { 24, 3, "flower", "friend", "scout", "girl" },
                { 25, 2, "river", "note", "account", "bank" },
                { 26, 2, "print", "berry", "bird", "blue" },
                { 27, 3, "pie", "luck", "belly", "pot" },
                { 28, 1, "date", "alley", "fold", "blind" },
                { 29, 3, "opera", "hand", "dish", "soap" },
                { 30, 2, "cadet", "capsule", "ship", "space" },
                { 31, 2, "fur", "rack", "tail", "coat" },
                { 32, 4, "stick", "maker", "point", "match" },
                { 33, 2, "hound", "pressure", "shot", "blood" },
                { 34, 3, "fox", "man", "peep", "hole" },
                { 35, 1, "sleeping", "bean", "trash", "bag" },
                { 36, 4, "dust", "cereal", "fish", "bowl" },
                { 37, 3, "light", "birthday", "stick", "candle" },
                { 38, 1, "food", "forward", "break", "fast" },
                { 39, 3, "shine", "beam", "struck", "moon" },
                { 40, 3, "peach", "arm", "tar", "pit" },
                { 41, 1, "water", "mine", "shaker", "salt" },
                { 42, 3, "palm", "shoe", "house", "tree" },
                { 43, 2, "basket", "eight", "snow", "ball" },
                { 44, 3, "wheel", "hand", "shopping", "cart" },
                { 45, 4, "right", "cat", "carbon", "copy" },
                { 46, 5, "home", "sea", "bed", "sick" },
                { 47, 1, "nuclear", "feud", "album", "family" },
                { 48, 1, "sandwich", "house", "golf", "club" },
                { 49, 4, "cross", "rain", "tie", "bow" },
                { 50, 3, "sage", "paint", "hair", "brush" },
                { 51, 3, "french", "car", "shoe", "horn" },
                { 52, 3, "boot", "summer", "ground", "camp" },
                { 53, 4, "chamber", "mask", "natural", "gas" },
                { 54, 3, "mill", "tooth", "dust", "saw" },
                { 55, 3, "main", "sweeper", "light", "street" },
                { 56, 3, "pike", "coat", "signal", "turn" },
                { 57, 4, "office", "mail", "hat", "box" },
                { 58, 3, "fly", "clip", "wall", "paper" },
                { 59, 4, "age", "mile", "sand", "stone" },
                { 60, 4, "catcher", "food", "hot", "dog" },
                { 61, 3, "wagon", "break", "radio", "station" },
                { 62, 4, "tank", "hill", "secret", "top" },
                { 63, 4, "health", "taker", "less", "care" },
                { 64, 4, "lift", "card", "mask", "face" },
                { 65, 3, "dress", "dial", "flower", "sun" },
                { 66, 4, "force", "line", "mail", "air" },
                { 67, 4, "guy", "rain", "down", "fall" },
                { 68, 3, "eight", "skate", "stick", "figure" },
                { 69, 3, "down", "question", "check", "mark" },
                { 70, 4, "animal", "back", "rat", "pack" },
                { 71, 4, "officer", "cash", "larceny", "petty" },
                { 72, 4, "pine", "crab", "sauce", "apple" },
                { 73, 4, "house", "thumb", "pepper", "green" },
                { 74, 3, "carpet", "alert", "ink", "red" },
                { 75, 3, "master", "toss", "finger", "ring" },
                { 76, 3, "hammer", "gear", "hunter", "head" },
                { 77, 3, "knife", "light", "pal", "pen" },
                { 78, 4, "foul", "ground", "mate", "play" },
                { 79, 4, "change", "circuit", "cake", "short" },
                { 80, 3, "way", "board", "sleep", "walk" },
                { 81, 3, "blank", "list", "mate", "check" },
                { 82, 4, "tail", "water", "flood", "gate" },
                { 83, 4, "marshal", "child", "piano", "grand" },
                { 84, 4, "cover", "arm", "wear", "under" },
                { 85, 4, "rain", "test", "stomach", "acid" },
                { 86, 4, "time", "blown", "nelson", "full" },
                { 87, 4, "pile", "market", "room", "stock" },
                { 88, 2, "mouse", "bear", "sand", "trap" },
                { 89, 3, "cat", "number", "phone", "call" },
                { 90, 3, "keg", "puff", "room", "powder" },
                { 91, 5, "trip", "house", "goal", "field" },
                { 92, 5, "fork", "dark", "man", "pitch" },
                { 93, 5, "fence", "card", "master", "post" },
                { 94, 4, "test", "runner", "map", "road" },
                { 95, 4, "dive", "light", "rocket", "sky" },
                { 96, 4, "man", "glue", "star", "super" },
                { 97, 4, "tooth", "potato", "heart", "sweet" },
                { 98, 5, "illness", "bus", "computer", "terminal" },
                { 99, 3, "type", "ghost", "screen", "writer" },
                { 100, 5, "mail", "board", "lung", "black" },
                { 101, 4, "teeth", "arrest", "start", "false" },
                { 102, 4, "iron", "shovel", "engine", "steam" },
                { 103, 3, "wet", "law", "business", "suit" },
                { 104, 4, "rope", "truck", "line", "tow" },
                { 105, 4, "off", "military", "first", "base" },
                { 106, 4, "spoon", "cloth", "card", "table" },
                { 107, 4, "cut", "cream", "war", "cold" },
                { 108, 4, "note", "chain", "master", "key" },
                { 109, 4, "shock", "shave", "taste", "after" },
                { 110, 5, "wise", "work", "tower", "clock" },
                { 111, 4, "grass", "king", "meat", "crab" },
                { 112, 4, "baby", "spring", "cap", "shower" },
                { 113, 4, "break", "bean", "cake", "coffee" },
                { 114, 5, "cry", "front", "ship", "battle" },
                { 115, 4, "hold", "print", "stool", "foot" },
                { 116, 4, "roll", "bean", "fish", "jelly" },
                { 117, 3, "horse", "human", "drag", "race" },
                { 118, 4, "oil", "bar", "tuna", "salad" },
                { 119, 4, "bottom", "curve", "hop", "bell" },
                { 120, 4, "tomato", "bomb", "picker", "cherry" },
                { 121, 4, "pea", "shell", "chest", "nut" },
                { 122, 5, "line", "fruit", "drunk", "punch" },
                { 123, 5, "bump", "egg", "step", "goose" },
                { 124, 4, "fight", "control", "machine", "gun" },
                { 125, 4, "home", "arm", "room", "rest" },
                { 126, 5, "child", "scan", "wash", "brain" },
                { 127, 4, "nose", "stone", "bear", "brown" },
                { 128, 5, "end", "line", "lock", "dead" },
                { 129, 5, "control", "place", "rate", "birth" },
                { 130, 5, "lounge", "hour", "napkin", "cocktail" },
                { 131, 5, "artist", "hatch", "route", "escape" },
                { 132, 5, "pet", "bottom", "garden", "rock" },
                { 133, 5, "mate", "shoes", "total", "running" },
                { 134, 5, "self", "attorney", "spending", "defense" },
                { 135, 4, "board", "blade", "back", "switch" },
                { 136, 5, "land", "hand", "house", "farm" },
                { 137, 5, "hungry", "order", "belt", "money" },
                { 138, 5, "forward", "flush", "razor", "straight" },
                { 139, 5, "shadow", "chart", "drop", "eye" },
                { 140, 5, "way", "ground", "weather", "fair" },
                { 141, 5, "cast", "side", "jump", "broad" },
                { 142, 4, "back", "step", "screen", "door" },
                { 143, 5, "reading", "service", "stick", "lip" },
                { 144, 5, "over", "plant", "horse", "power" },
                { 145, 1, "falling", "actor", "dust", "star" },
                { 146, 1, "broken", "clear", "eye", "glass" },
                { 147, 1, "skunk", "kings", "boiled", "cabbage" },
                { 148, 2, "widow", "bite", "monkey", "spider" },
                { 149, 2, "bass", "complex", "sleep", "deep" },
                { 150, 2, "coin", "quick", "spoon", "silver" },
                { 151, 2, "gold", "stool", "tender", "bar" },
                { 152, 2, "time", "hair", "stretch", "long" },
                { 153, 3, "cracker", "union", "rabbit", "jack" },
                { 154, 3, "bald", "screech", "emblem", "eagle" },
                { 155, 3, "blood", "music", "cheese", "blue" },
                { 156, 3, "manners", "round", "tennis", "table" },
                { 157, 3, "off", "trumpet", "atomic", "blast" },
                { 158, 3, "playing", "credit", "report", "card" },
                { 159, 3, "rabbit", "cloud", "house", "white" },
                { 160, 3, "room", "blood", "salts", "bath" },
                { 161, 3, "salt", "deep", "foam", "sea" },
                { 162, 3, "square", "cardboard", "open", "box" },
                { 163, 3, "water", "tobacco", "stove", "pipe" },
                { 164, 3, "ache", "hunter", "cabbage", "head" },
                { 165, 3, "chamber", "staff", "box", "music" },
                { 166, 3, "high", "book", "sour", "note" },
                { 167, 3, "lick", "sprinkle", "mines", "salt" },
                { 168, 3, "pure", "blue", "fall", "water" },
                { 169, 3, "snack", "line", "birthday", "party" },
                { 170, 3, "square", "telephone", "club", "book" },
                { 171, 3, "surprise", "wrap", "care", "gift" },
                { 172, 3, "ticket", "shop", "broker", "pawn" },
                { 173, 3, "barrel", "root", "belly", "beer" },
                { 174, 3, "blade", "witted", "weary", "dull" },
                { 175, 3, "cherry", "time", "smell", "blossom" },
                { 176, 3, "notch", "flight", "spin", "top" },
                { 177, 3, "strap", "pocket", "time", "watch" },
                { 178, 3, "walker", "main", "sweeper", "street" },
                { 179, 3, "wicked", "bustle", "slicker", "city" },
                { 180, 4, "chocolate", "fortune", "tin", "cookie" },
                { 181, 4, "color", "numbers", "oil", "paint" },
                { 182, 4, "mouse", "sharp", "blue", "cheese" },
                { 183, 4, "sandwich", "golf", "foot", "club" },
                { 184, 4, "silk", "cream", "even", "smooth" },
                { 185, 4, "speak", "money", "street", "easy" },
                { 186, 4, "big", "leaf", "shade", "tree" },
                { 187, 4, "envy", "golf", "beans", "green" },
                { 188, 4, "hall", "car", "swimming", "pool" },
                { 189, 4, "ink", "herring", "neck", "red" },
                { 190, 4, "measure", "desk", "scotch", "tape" },
                { 191, 4, "strike", "same", "tennis", "match" },
                { 192, 4, "athletes", "web", "rabbit", "foot" },
                { 193, 4, "board", "magic", "death", "black" },
                { 194, 4, "lapse", "vivid", "elephant", "memory" },
                { 195, 4, "puss", "tart", "spoiled", "sour" },
                { 196, 4, "rock", "times", "steel", "hard" },
                { 197, 4, "stop", "petty", "sneak", "thief" },
                { 198, 4, "thread", "pine", "pain", "needle" },
                { 199, 4, "zone", "still", "noise", "quiet" },
                { 200, 4, "cloth", "sad", "out", "sack" },
                { 201, 4, "cotton", "bathtub", "tonic", "gin" },
                { 202, 4, "foot", "collection", "out", "stamp" },
                { 203, 4, "inch", "deal", "peg", "square" },
                { 204, 4, "jump", "kill", "bliss", "joy" },
                { 205, 4, "magic", "plush", "floor", "carpet" },
                { 206, 4, "note", "dive", "chair", "high" },
                { 207, 4, "stalk", "trainer", "king", "lion" },
                { 208, 4, "bump", "throat", "sum", "lump" },
                { 209, 4, "shopping", "washer", "picture", "window" },
                { 210, 4, "blank", "white", "lines", "paper" },
                { 211, 4, "stick", "light", "birthday", "candle" },
                { 212, 5, "sore", "shoulder", "sweat", "cold" },
                { 213, 4, "house", "blanket", "ball", "beach" },
                { 214, 1, "trap", "polar", "claw", "bear" },
                { 215, 1, "cinder", "building", "buster", "block" },
                { 216, 4, "line", "patrol", "town", "border" },
                { 217, 1, "thorn", "whack", "rose", "bush" },
                { 218, 2, "garbage", "beer", "paint", "can" },
                { 219, 1, "scan", "nap", "burglar", "cat" },
                { 220, 2, "trap", "back", "screen", "door" },
                { 221, 4, "through", "disk", "way", "drive" },
                { 222, 4, "tax", "real", "fourth", "estate" },
                { 223, 4, "life", "color", "coast", "guard" },
                { 224, 4, "wave", "lamp", "dry", "heat" },
                { 225, 2, "glass", "rush", "happy", "hour" },
                { 226, 3, "waffle", "lung", "tire", "iron" },
                { 227, 3, "poison", "league", "creeping", "ivy" },
                { 228, 1, "pain", "serial", "whale", "killer" },
                { 229, 2, "floor", "shade", "heat", "lamp" },
                { 230, 2, "puppy", "TRUE", "letter", "love" },
                { 231, 4, "bedroom", "plan", "brew", "master" },
                { 232, 4, "mouth", "bike", "oil", "motor" },
                { 233, 2, "polish", "finger", "down", "nail" },
                { 234, 4, "sake", "pet", "nick", "name" },
                { 235, 5, "computer", "cable", "broadcast", "network" },
                { 236, 3, "skirts", "take", "put", "out" },
                { 237, 5, "jury", "door", "side", "panel" },
                { 238, 4, "due", "life", "tense", "past" },
                { 239, 4, "tomato", "cement", "tooth", "paste" },
                { 240, 1, "flag", "vault", "fishing", "pole" },
                { 241, 4, "release", "french", "secretary", "press" },
                { 242, 1, "dollar", "stop", "language", "sign" },
                { 243, 3, "quick", "spoon", "screen", "silver" },
                { 244, 5, "grand", "door", "bang", "slam" },
                { 245, 5, "dash", "happy", "stick", "slap" },
                { 246, 3, "ruby", "glass", "bunny", "slipper" },
                { 247, 3, "demon", "limit", "way", "speed" },
                { 248, 4, "gap", "door", "sign", "stop" },
                { 249, 3, "food", "front", "drug", "store" },
                { 250, 1, "set", "program", "cable", "television" },
                { 251, 5, "chest", "car", "store", "toy" },
                { 252, 4, "property", "moral", "price", "value" },
                { 253, 4, "rag", "milk", "out", "weed" },
                { 254, 3, "noise", "collar", "wash", "white" },
                { 255, 3, "bay", "picture", "washer", "window" },
                { 256, 2, "hard", "drift", "cutter", "wood" },
                { 257, 1, "cottage", "brick", "cake", "cheese" },
                { 258, 2, "shelf", "read", "end", "book" },
                { 259, 2, "sea", "home", "stomach", "sick" },
                { 260, 2, "car", "swimming", "cue", "pool" },
                { 261, 2, "cookies", "sixteen", "heart", "sweet" },
                { 262, 2, "lounge", "hour", "drink", "cocktail" },
                { 263, 2, "keel", "show", "row", "boat" },
                { 264, 4, "desert", "ice", "spell", "dry" },
                { 265, 4, "base", "show", "dance", "ball" },
                { 266, 4, "soap", "shoe", "tissue", "box" },
                { 267, 4, "hot", "butterflies", "pump", "stomach" },
                { 268, 2, "head", "street", "dark", "light" },
                { 269, 4, "room", "saturday", "salts", "bath" },
                { 270, 2, "surprise", "line", "birthday", "party" },
                { 271, 2, "red", "go", "car", "stop" }
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "HighScores");

        migrationBuilder.DropTable(
            name: "Tests");

        migrationBuilder.DropTable(
            name: "Users");
    }
}
