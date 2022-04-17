const threeWords = [
    "aba",
    "abs",
    "ace",
    "act",
    "add",
    "ado",
    "aft",
    "age",
    "ago",
    "aha",
    "aid",
    "aim",
    "air",
    "all",
    "alt",
    "and",
    "ant",
    "any",
    "ape",
    "app",
    "arc",
    "are",
    "ark",
    "arm",
    "art",
    "ash",
    "ask",
    "ate",
    "bad",
    "bag",
    "ban",
    "bat",
    "bed",
    "bee",
    "beg",
    "ben",
    "bet",
    "bid",
    "big",
    "bin",
    "bit",
    "box",
    "boy",
    "bud",
    "Bug",
    "bun",
    "bus",
    "but",
    "buy",
    "bye",
    "cab",
    "cam",
    "can",
    "cap",
    "car",
    "cat",
    "cop",
    "cow",
    "cry",
    "cup",
    "cut",
    "dad",
    "day",
    "did",
    "die",
    "dig",
    "dip",
    "dog",
    "dot",
    "dry",
    "dub",
    "due",
    "duo",
    "ear",
    "eat",
    "egg",
    "ego",
    "end",
    "era",
    "eve",
    "eye",
    "fan",
    "far",
    "fat",
    "fed",
    "few",
    "fig",
    "fit",
    "fix",
    "flu",
    "fly",
    "fog",
    "for",
    "fox",
    "fry",
    "fun",
    "gap",
    "gas",
    "gem",
    "get",
    "god",
    "got",
    "gum",
    "gun",
    "guy",
    "gym",
    "had",
    "has",
    "hat",
    "her",
    "hey",
    "hid",
    "him",
    "hip",
    "his",
    "hit",
    "hog",
    "hon",
    "hop",
    "hot",
    "how",
    "hug",
    "ice",
    "ill",
    "ink",
    "ion",
    "its",
    "jam",
    "jar",
    "jaw",
    "jet",
    "job",
    "jog",
    "joy",
    "key",
    "kid",
    "kit",
    "lab",
    "lad",
    "lag",
    "lap",
    "law",
    "led",
    "leg",
    "let",
    "lie",
    "lit",
    "log",
    "lot",
    "low",
    "mad",
    "man",
    "map",
    "max",
    "may",
    "men",
    "Met",
    "mid",
    "mix",
    "mom",
    "mud",
    "mug",
    "mum",
    "nap",
    "net",
    "new",
    "nod",
    "nor",
    "not",
    "now",
    "nut",
    "oak",
    "odd",
    "off",
    "oil",
    "old",
    "one",
    "our",
    "out",
    "owe",
    "owl",
    "own",
    "pad",
    "pal",
    "pan",
    "pap",
    "pay",
    "pea",
    "pen",
    "per",
    "pet",
    "pie",
    "pig",
    "pin",
    "pod",
    "pop",
    "pot",
    "pro",
    "pub",
    "put",
    "ram",
    "ran",
    "rat",
    "raw",
    "ray",
    "red",
    "ref",
    "rid",
    "rob",
    "row",
    "rub",
    "run",
    "sad",
    "sat",
    "saw",
    "say",
    "sea",
    "sec",
    "see",
    "set",
    "she",
    "shy",
    "sin",
    "sir",
    "sis",
    "sit",
    "six",
    "ski",
    "sky",
    "son",
    "spy",
    "sub",
    "sum",
    "sun",
    "sup",
    "tab",
    "tag",
    "tan",
    "tap",
    "tax",
    "tea",
    "ten",
    "the",
    "tie",
    "tip",
    "tod",
    "toe",
    "ton",
    "too",
    "top",
    "toy",
    "try",
    "tub",
    "two",
    "use",
    "van",
    "vat",
    "via",
    "war",
    "was",
    "wax",
    "way",
    "web",
    "wet",
    "who",
    "why",
    "win",
    "won",
    "wow",
    "yep",
    "yes",
    "yet",
    "you",
    "zip",
    "zoo",
];

const fourWords = [
    "able",
    "acid",
    "aged",
    "also",
    "area",
    "army",
    "away",
    "baby",
    "back",
    "ball",
    "band",
    "bank",
    "base",
    "bath",
    "bear",
    "beat",
    "been",
    "beer",
    "bell",
    "belt",
    "best",
    "bill",
    "bird",
    "blow",
    "blue",
    "boat",
    "body",
    "bomb",
    "bond",
    "bone",
    "book",
    "boom",
    "born",
    "boss",
    "both",
    "bowl",
    "bulk",
    "burn",
    "bush",
    "busy",
    "call",
    "calm",
    "came",
    "camp",
    "card",
    "care",
    "case",
    "cash",
    "cast",
    "cell",
    "chat",
    "chip",
    "city",
    "club",
    "coal",
    "coat",
    "code",
    "cold",
    "come",
    "cook",
    "cool",
    "cope",
    "copy",
    "CORE",
    "cost",
    "crew",
    "crop",
    "dark",
    "data",
    "date",
    "dawn",
    "days",
    "dead",
    "deal",
    "dean",
    "dear",
    "debt",
    "deep",
    "deny",
    "desk",
    "dial",
    "dick",
    "diet",
    "disc",
    "disk",
    "does",
    "done",
    "door",
    "dose",
    "down",
    "draw",
    "drew",
    "drop",
    "drug",
    "dual",
    "duke",
    "dust",
    "duty",
    "each",
    "earn",
    "ease",
    "east",
    "easy",
    "edge",
    "else",
    "even",
    "ever",
    "evil",
    "exit",
    "face",
    "fact",
    "fail",
    "fair",
    "fall",
    "farm",
    "fast",
    "fate",
    "fear",
    "feed",
    "feel",
    "feet",
    "fell",
    "felt",
    "file",
    "fill",
    "film",
    "find",
    "fine",
    "fire",
    "firm",
    "fish",
    "five",
    "flat",
    "flow",
    "food",
    "foot",
    "ford",
    "form",
    "fort",
    "four",
    "free",
    "from",
    "fuel",
    "full",
    "fund",
    "gain",
    "game",
    "gate",
    "gave",
    "gear",
    "gene",
    "gift",
    "girl",
    "give",
    "glad",
    "goal",
    "goes",
    "gold",
    "Golf",
    "gone",
    "good",
    "gray",
    "grew",
    "grey",
    "grow",
    "gulf",
    "hair",
    "half",
    "hall",
    "hand",
    "hang",
    "hard",
    "harm",
    "hate",
    "have",
    "head",
    "hear",
    "heat",
    "held",
    "hell",
    "help",
    "here",
    "hero",
    "high",
    "hill",
    "hire",
    "hold",
    "hole",
    "holy",
    "home",
    "hope",
    "host",
    "hour",
    "huge",
    "hung",
    "hunt",
    "hurt",
    "idea",
    "inch",
    "into",
    "iron",
    "item",
    "jack",
    "jane",
    "jean",
    "john",
    "join",
    "jump",
    "jury",
    "just",
    "keen",
    "keep",
    "kent",
    "kept",
    "kick",
    "kill",
    "kind",
    "king",
    "knee",
    "knew",
    "know",
    "lack",
    "lady",
    "laid",
    "lake",
    "land",
    "lane",
    "last",
    "late",
    "lead",
    "left",
    "less",
    "life",
    "lift",
    "like",
    "line",
    "link",
    "list",
    "live",
    "load",
    "loan",
    "lock",
    "logo",
    "long",
    "look",
    "lord",
    "lose",
    "loss",
    "lost",
    "love",
    "luck",
    "made",
    "mail",
    "main",
    "make",
    "male",
    "many",
    "Mark",
    "mass",
    "matt",
    "meal",
    "mean",
    "meat",
    "meet",
    "menu",
    "mere",
    "mike",
    "mile",
    "milk",
    "mill",
    "mind",
    "mine",
    "miss",
    "mode",
    "mood",
    "moon",
    "more",
    "most",
    "move",
    "much",
    "must",
    "name",
    "navy",
    "near",
    "neck",
    "need",
    "news",
    "next",
    "nice",
    "nick",
    "nine",
    "none",
    "nose",
    "note",
    "okay",
    "once",
    "only",
    "onto",
    "open",
    "oral",
    "over",
    "pace",
    "pack",
    "page",
    "paid",
    "pain",
    "pair",
    "palm",
    "park",
    "part",
    "pass",
    "past",
    "path",
    "peak",
    "pick",
    "pink",
    "pipe",
    "plan",
    "play",
    "plot",
    "plug",
    "plus",
    "poll",
    "pool",
    "poor",
    "port",
    "post",
    "pull",
    "pure",
    "push",
    "race",
    "rail",
    "rain",
    "rank",
    "rare",
    "rate",
    "read",
    "real",
    "rear",
    "rely",
    "rent",
    "rest",
    "rice",
    "rich",
    "ride",
    "ring",
    "rise",
    "risk",
    "road",
    "rock",
    "role",
    "roll",
    "roof",
    "room",
    "root",
    "rose",
    "rule",
    "rush",
    "ruth",
    "safe",
    "said",
    "sake",
    "sale",
    "salt",
    "same",
    "sand",
    "save",
    "seat",
    "seed",
    "seek",
    "seem",
    "seen",
    "self",
    "sell",
    "send",
    "sent",
    "sept",
    "ship",
    "shop",
    "shot",
    "show",
    "shut",
    "sick",
    "side",
    "sign",
    "site",
    "size",
    "skin",
    "slip",
    "slow",
    "snow",
    "soft",
    "soil",
    "sold",
    "sole",
    "some",
    "song",
    "soon",
    "sort",
    "soul",
    "spot",
    "star",
    "stay",
    "step",
    "stop",
    "such",
    "suit",
    "sure",
    "take",
    "talk",
    "tall",
    "tank",
    "tape",
    "task",
    "team",
    "tech",
    "tell",
    "tend",
    "term",
    "test",
    "text",
    "than",
    "that",
    "them",
    "then",
    "they",
    "thin",
    "this",
    "thus",
    "till",
    "time",
    "tiny",
    "told",
    "toll",
    "tone",
    "tony",
    "took",
    "tool",
    "tour",
    "town",
    "tree",
    "trip",
    "true",
    "tune",
    "turn",
    "twin",
    "type",
    "unit",
    "upon",
    "used",
    "user",
    "vary",
    "vast",
    "very",
    "vice",
    "view",
    "vote",
    "wage",
    "wait",
    "wake",
    "walk",
    "wall",
    "want",
    "ward",
    "warm",
    "wash",
    "wave",
    "ways",
    "weak",
    "wear",
    "week",
    "well",
    "went",
    "were",
    "west",
    "what",
    "when",
    "whom",
    "wide",
    "wife",
    "wild",
    "will",
    "wind",
    "wine",
    "wing",
    "wire",
    "wise",
    "wish",
    "with",
    "wood",
    "word",
    "wore",
    "work",
    "yard",
    "yeah",
    "year",
    "your",
    "zero",
    "zone",
];

const fiveWords = [
    "Aargh",
    "About",
    "Above",
    "Abuse",
    "Adieu",
    "Adios",
    "Admit",
    "Adopt",
    "Adult",
    "After",
    "Again",
    "Agent",
    "Agree",
    "Ahead",
    "Alack",
    "Alive",
    "Allow",
    "Aloha",
    "Alone",
    "Along",
    "Alter",
    "Among",
    "Anger",
    "Angry",
    "Apple",
    "Apply",
    "Argue",
    "Aside",
    "Avast",
    "Avoid",
    "Award",
    "Aware",
    "Awful",
    "Badly",
    "Basic",
    "Basis",
    "Beach",
    "Begin",
    "Below",
    "Birth",
    "Black",
    "Blame",
    "Bless",
    "Blind",
    "Block",
    "Blood",
    "Board",
    "Brain",
    "Brave",
    "Bread",
    "Break",
    "Brief",
    "Bring",
    "Broad",
    "Brown",
    "Build",
    "Burst",
    "Buyer",
    "Carry",
    "Catch",
    "Cause",
    "Chain",
    "Chair",
    "Cheap",
    "Check",
    "Chest",
    "Chief",
    "Child",
    "China",
    "Civil",
    "Claim",
    "Class",
    "Clean",
    "Clear",
    "Climb",
    "Clock",
    "Close",
    "Coach",
    "Coast",
    "Count",
    "Court",
    "Cover",
    "Crazy",
    "Cream",
    "Crime",
    "Cross",
    "Cycle",
    "Daily",
    "Dance",
    "Death",
    "Depth",
    "Dirty",
    "Doubt",
    "Draft",
    "Drama",
    "Dream",
    "Dress",
    "Drink",
    "Drive",
    "Early",
    "Earth",
    "Empty",
    "Enemy",
    "Enjoy",
    "Enter",
    "Entry",
    "Equal",
    "Error",
    "Event",
    "Exact",
    "Exist",
    "Extra",
    "Faint",
    "Faith",
    "False",
    "Fault",
    "Field",
    "Fifth",
    "Fight",
    "Final",
    "First",
    "Floor",
    "Focus",
    "Force",
    "Forth",
    "Frame",
    "Frank",
    "Fresh",
    "Front",
    "Fruit",
    "Fully",
    "Funny",
    "Furth",
    "Giant",
    "Glass",
    "Grand",
    "Grant",
    "Grass",
    "Great",
    "Green",
    "Gross",
    "Group",
    "Guess",
    "Guide",
    "Happy",
    "Harsh",
    "Heart",
    "Heavy",
    "Hello",
    "Henry",
    "Horse",
    "Hotel",
    "House",
    "Human",
    "Ideal",
    "Image",
    "Imply",
    "Index",
    "Inner",
    "Input",
    "Issue",
    "Japan",
    "Joint",
    "Jones",
    "Judge",
    "Knife",
    "Large",
    "Laugh",
    "Laura",
    "Layer",
    "Learn",
    "Leave",
    "Legal",
    "Level",
    "Lewis",
    "Light",
    "Limit",
    "Local",
    "Loose",
    "Lucky",
    "Lunch",
    "Magic",
    "Major",
    "March",
    "Marry",
    "Match",
    "Mercy",
    "Metal",
    "Minor",
    "Minus",
    "Model",
    "Money",
    "Month",
    "Moral",
    "Motor",
    "Mouth",
    "Music",
    "Naked",
    "Nasty",
    "Neath",
    "Night",
    "Noise",
    "North",
    "Novel",
    "Nurse",
    "Occur",
    "Offer",
    "Often",
    "Order",
    "Other",
    "Outer",
    "Owner",
    "Paper",
    "Party",
    "Peace",
    "Peter",
    "Phase",
    "Phone",
    "Piano",
    "Piece",
    "Pilot",
    "Pitch",
    "Place",
    "Plain",
    "Plane",
    "Plant",
    "Plate",
    "Point",
    "Pound",
    "Power",
    "Press",
    "Price",
    "Pride",
    "Prime",
    "Prior",
    "Prize",
    "Proof",
    "Proud",
    "Prove",
    "Queen",
    "Quick",
    "Quiet",
    "Quite",
    "Radio",
    "Range",
    "Rapid",
    "Ratio",
    "Reach",
    "Ready",
    "Refer",
    "Relax",
    "Reply",
    "Right",
    "River",
    "Roman",
    "Rough",
    "Round",
    "Route",
    "Royal",
    "Rural",
    "Sadly",
    "Scale",
    "Scene",
    "Scope",
    "Score",
    "Sense",
    "Serve",
    "Shape",
    "Share",
    "Sharp",
    "Sheep",
    "Sheer",
    "Sheet",
    "Shift",
    "Shirt",
    "Shoot",
    "Short",
    "Silly",
    "Since",
    "Sixth",
    "Skill",
    "Slash",
    "Sleep",
    "Small",
    "Smart",
    "Smile",
    "Smith",
    "Smoke",
    "Sniff",
    "Solid",
    "Solve",
    "Sorry",
    "Sound",
    "South",
    "Space",
    "Spare",
    "Speak",
    "Speed",
    "Spend",
    "Spite",
    "Split",
    "Sport",
    "Squad",
    "Staff",
    "Stage",
    "Stand",
    "Start",
    "State",
    "Steam",
    "Steel",
    "Steep",
    "Stick",
    "Still",
    "Stock",
    "Stone",
    "Store",
    "Study",
    "Stuff",
    "Style",
    "Sugar",
    "Super",
    "Sweet",
    "Table",
    "Taste",
    "Teach",
    "Terry",
    "Thank",
    "Theme",
    "There",
    "Thick",
    "Thing",
    "Think",
    "Third",
    "Throw",
    "Tight",
    "Title",
    "Today",
    "Total",
    "Touch",
    "Tough",
    "Tower",
    "Track",
    "Trade",
    "Train",
    "Trend",
    "Trial",
    "Truly",
    "Trust",
    "Truth",
    "Twice",
    "Uncle",
    "Under",
    "Union",
    "Unity",
    "Until",
    "Upper",
    "Upset",
    "Usual",
    "Utter",
    "Valid",
    "Value",
    "Video",
    "Visit",
    "Voice",
    "Waste",
    "Watch",
    "Water",
    "Where",
    "Which",
    "While",
    "White",
    "Whole",
    "Whose",
    "Woman",
    "World",
    "Worry",
    "Would",
    "Write",
    "Wrong",
    "Young",
    "Yours",
];

export { threeWords, fourWords, fiveWords };
