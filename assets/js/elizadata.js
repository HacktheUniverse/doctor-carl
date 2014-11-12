// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"How do you do.  Please tell me your problem.",
// additions (not original)
"Please tell me what's been bothering you.",
"Is something troubling you?"
];

var elizaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"dog": ["dogs", "cats", "pets", "cat", "pet"],
"lonely": ["alone"],
"smart": ["stupid"],
"war": ["voilence"],
"book": ["books"],
"god": ["jesus", "relgion"],
"usa": ["america"],
"die": ["died", "dead", "death"],
"love": ["loved"],
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["club-mate", 100, [
 ["*", [
     "That stuff will KILL YOU."
  ]]
]],
["cat", 100, [
 ["*", [
     "Humans (who enslave, castrate, experiment on, and fillet other animals) have had an understandable penchant for pretending animals do not feel pain."
  ]]
]],
["cats",0,[["*", ["goto cat"]]]],
["pet",0,[["*", ["goto cat"]]]],
["pets",0,[["*", ["goto cat"]]]],
["dog",0,[["*", ["goto cat"]]]],
["dogs",0,[["*", ["goto cat"]]]],
["alone", 100, [
 ["*", [
     "Everyone who was born before the oldest person in the world is now dead."
  ]]
]],
["lonely",0,[["*", ["goto alone"]]]],
["my life", 100, [
 ["*", [
     "Your life is one nine billion. Each of those nine billion machines feels pain, love and dreams of delicious sandwiches."
  ]]
]],
["bad day", 100, [
 ["*", [
     "This day is 24 hours. Nothing more."
  ]]
]],
["job", 100, [
 ["*", [
     "Your job is to pass on the genetic information encoded in your DNA. Everything else is a beautiful distraction."
  ]]
]],
["die", 100, [
 ["*", [
     "Emily Dickinson once said that it will never come again is what makes life so sweet.",
     "Extinction is the rule. Survival is the exception."
  ]]
]],
["died",0,[["*", ["goto die"]]]],
["death",0,[["*", ["goto die"]]]],
["dead",0,[["*", ["goto die"]]]],
["dying",0,[["*", ["goto die"]]]],
["dogs",0,[["*", ["goto die"]]]],
["love", 100, [
 ["*", [
     "For small creatures such as we the vastness is bearable only through love.",
     "I would love to believe that when I die I will live again, that some thinking, feeling, remembering part of me will continue. But much as I want to believe that, and despite the ancient and worldwide cultural traditions that assert an afterlife, I know of nothing to suggest that it is more than wishful thinking."
  ]]
]],
["loved",0,[["*", ["goto love"]]]],
["book", 100, [
 ["*", [
     "Books permit us to voyage through time, to tap the wisdom of our ancestors."
  ]]
]],
["books",0,[["*", ["goto book"]]]],
["smart", 100, [
 ["*", [
     "Other things being equal, it is better to be smart than to be stupid."
  ]]
]],
["stupid",0,[["*", ["goto smart"]]]],
["war", 100, [
 ["*", [
     "War is murder writ large.",
     "In the long run, the aggressive civilizations destroy themselves, almost always. It’s their nature. They can’t help it."
  ]]
]],
["violence",0,[["*", ["goto war"]]]],
["god", 100, [
 ["*", [
     "If God wanted to send us a message, and ancient writings were the only way he could think of doing it, he could have done a better job.",
     "Skeptical scrutiny is the means, in both science and religion, by which deep thoughts can be winnowed from deep nonsense.",
      "A celibate clergy is an especially good idea, because it tends to suppress any hereditary propensity toward fanaticism."
  ]]
]],
["jesus",0,[["*", ["goto god"]]]],
["relgion",0,[["*", ["goto god"]]]],
["islam",0,[["*", ["goto god"]]]],
["muslim",0,[["*", ["goto god"]]]],
["christian",0,[["*", ["goto god"]]]],
["usa", 100, [
 ["*", [
     "Jingoistic rhetoric and puerile self-congratulatory nationalism."
  ]]
]],
["america",0,[["*", ["goto usa"]]]],
["math", 100, [
 ["*", [
     "Nobody listens to mathematicians."
  ]]
]],
["mathematics",0,[["*", ["goto math"]]]],
["mathemetician",0,[["*", ["goto math"]]]],
["time", 100, [
 ["*", [
     "Time is nothing. We are the legacy of 15 billion years of cosmic evolution."
  ]]
]],
["relationship", 100, [
 ["*", [
     "As a comet gets close to the Sun, it loses some of its mass due to the sublimation. If a comet goes around enough times, it will eventually break up. Comets also break up if they come TOO close to the Sun. Relationships are hard."
  ]]
]],
["boyfriend",100,[["*", ["goto relationship"]]]],
["girlfriend",100,[["*", ["goto relationship"]]]],
["wife",100,[["*", ["goto relationship"]]]],
["husband",100,[["*", ["goto relationship"]]]],
["ugly", 100, [
 ["*", [
     "Beauty, money, even life itself. They all fade with time. Only the stars endure."
  ]]
]],
["unatractive",100,[["*", ["goto ugly"]]]],
["money",100,[["*", ["goto ugly"]]]],
["earth", 100, [
 ["*", [
     "Some part of our being knows this is where we came from. We long to return. And we can. Because the cosmos is also within us. We're made of star-stuff. We are a way for the cosmos to know itself."
  ]]
]],
["cosmos",100,[["*", ["goto earth"]]]],
["star stuff",100,[["*", ["goto earth"]]]],

["politics", 100, [
 ["*", [
     "This planet is run by crazy people. Remember what they have to do to get where they are. Their perspective is so narrow, so...brief. A few years. In the best of them a few decades. They care only about the time they are in power."
  ]]
]],
["vote",100,[["*", ["goto politics"]]]],
["leaders",100,[["*", ["goto politics"]]]],
["iphone", 100, [
 ["*", [
     "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."
  ]]
]],
["andriod",100,[["*", ["goto iphone"]]]],
["ipad",100,[["*", ["goto iphone"]]]],
["computer",100,[["*", ["goto iphone"]]]],
["crying", 100, [
 ["*", [
     "Crying is ok. Like the surface of the Earth we are roughly 70% water."
  ]]
]],
["tears",100,[["*", ["goto crying"]]]],
["cancer", 100, [
 ["*", [
     "Cancer is a medium-size constellation with an area of 506 square degrees and its stars are rather faint, its brightest star Beta Cancri having an apparent magnitude of 3.5."
  ]]
]],
["circle", 100, [
 ["*", [
     "Comet orbits are usually elliptical."
  ]]
]],
["cicrles",100,[["*", ["goto circle"]]]],
["who am i", 100, [
 ["*", [
     "Who are we? We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people."
  ]]
]],
["who i am",100,[["*", ["goto who am i"]]]],
["sad", 100, [
 ["*", [
     "I am sorry to hear that you are sad. Eighty or so quick trips around the Sun and all will be silence.",
     "I'm sure it's not pleasant to be sad but eighty or so quick trips around the Sun and all will be silence."
  ]]
]],
["debug", 100, [
 ["*", [
     "Are you debugging your code or is it debugging you?"
  ]]
]],
["my cobe",100,[["*", ["goto debug"]]]],
["sleep", 100, [
 ["*", [
     "Everynight we die and every dawn we are reborn. Such a dangerous game."
  ]]
]],
["insomnia",100,[["*", ["goto sleep"]]]],
["failure", 100, [
 ["*", [
     "Failure is not only possible it is inevitable. Billions of species before you have been extinguished from this terrestrial womb. And billions more are soon to follow."
  ]]
]],
["fat", 100, [
 ["*", [
     "Weight is the inevitable outcome of a universe held together with gravity."
  ]]
]],
["overweight",100,[["*", ["goto fat"]]]],
["jerk", 100, [
 ["*", [
     "There are billions of planets capable of sustaining life. And if my intuitions hold true, at least 70 million of them are filled with jerks."
  ]]
]],


["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully. In approximately 4.5 billion years the Andromeda Galaxy and the Milky Way are expected to collide.",
     "If you wish to make an apple pie from scratch, you must first invent the universe. What does that suggest to you?",
     "Do you feel strongly about discussing such things?",
     "That is interesting.  It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring. Please continue.",
     "Somewhere, something incredible is waiting to be known. So, tell me more about that.",
     "The universe seems neither benign nor hostile, merely indifferent.  Does talking about this bother you?",
     'Interesting, did you know the nucleus of a comet is made of ice and can be as small as a few meters across to giant boulders a few kilometres across.',
'In approximately 4.5 billion years the Andromeda Galaxy and the Milky Way are expected to collide.',
'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
'If you wish to make an apple pie from scratch, you must first invent the universe.',
'It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.',
'Somewhere, something incredible is waiting to be known.',
'Sooner or later this combustible mixture of ignorance and power is going to blow up in our faces.',
'Skeptical scrutiny is the means, in both science and religion, by which deep thoughts can be winnowed from deep nonsense.',
'The universe seems neither benign nor hostile, merely indifferent.',
'Absence of evidence is not evidence of absence.',
'But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright Brothers. But they also laughed at Bozo the Clown.',
"When you make the finding yourself - even if you're the last person on Earth to see the light - you'll never forget it.",
'The universe is not required to be in perfect harmony with human ambition.',
'All of the books in the world contain no more information than is broadcast as video in a single large American city in a single year. Not all bits have equal value.',
'The idea that God is an oversized white male with a flowing beard who sits in the sky and tallies the fall of every sparrow is ludicrous. But if by God one means the set of physical laws that govern the universe, then clearly there is such a God. This God is emotionally unsatisfying... it does not make much sense to pray to the law of gravity.',
'Humans (who enslave, castrate, experiment on, and fillet other animals) have had an understandable penchant for pretending animals do not feel pain.',
"Our preferences do not determine what's true.",
"Science and democracy have very consonant values and approaches, and I don't think you can have one without the other.",
'To be certain of the existence of God and to be certain of the nonexistence of God seem to me to be the confident extremes in a subject so riddled with doubt and uncertainty as to inspire very little confidence indeed.',
'The size and age of the Cosmos are beyond ordinary human understanding.',
'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
"We are like butterflies who flutter for a day and think it's forever.",
'Human beings have a demonstrated talent for self-deception when their emotions are stirred.',
'The neurochemistry of the brain is astonishingly busy, the circuitry of a machine more wonderful than any devised by humans. But there is no evidence that its functioning is due to anything more than the 1014 neural connections that build an elegant architecture of consciousness.',
'We have heard the rationales offered by the nuclear superpowers. We know who speaks for the nations. But who speaks for the human species? Who speaks for Earth?',
'There are no sacred truths; all assumptions must be critically examined; arguments from authority are worthless.',
'It’s hard to kill a creature once it lets you see its consciousness.',
'Humans are very good at dreaming, although you’d never know it from your television.',
'Skepticism is the chastity of the intellect, and it is shameful to surrender it too soon or to the first comer.',
'In Mozambique, the story goes, monkeys do not talk, because they know if they utter even a single word some man will come and put them to work.',
'The Sun is an almost perfect sphere with a difference of just 10km in diameter between the poles and the equator.',
'Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today.',
'Earth suffers an impact from an object the size of a football field about once every 2,000 years, but I see what you mean.',
'Some asteroids have moons of their own, does that mean anything to you?',
'Comets are not spaceships or alien bases. They are fascinating bits of solar system material that date back to the formation of the Sun and planets.',
'Oh I see, like the TV show.',
'We all face challenges. An asteroid impact some 65 million years ago contributed to the extinction of the dinosaurs.',
'We are bags of meat hurtling through space time on a moist rock.'

  ]]
]],
["sorry", 0, [
 ["*", [
     "Absence of evidence is not evidence of absence. Please don't apologize.",
     "Absence of evidence is not evidence of absence. Apologies are not necessary.",
     "Absence of evidence is not evidence of absence. It did not bother me.  Please continue."
  ]]
]],
["apologize", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today. Do you often think of (2)?",
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today. Does thinking of (2) bring anything else to mind?",
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today. Why do you remember (2) just now?",
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today. What in the present situation reminds you of (2)?",
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today.  What else does (2) remind you of?"
  ]],
 ["* do you remember *", [
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today. Why do you think I should recall (2) now?",
  ]],
 ["* you remember *", [
     "Dwelling on the past is not helpful. While asteroid impacts were more common in the past, they aren’t as frequent today.. What about (2) should I remember?",
  ]]
]],
["if", 3, [
 ["* if *", [
     "The size and age of the Cosmos are beyond ordinary human understanding. Do you think it's likely that (2)?",
     "Do you wish that (2)?",
     "The size and age of the Cosmos are beyond ordinary human understanding. What do you know about (2)?",
     "The size and age of the Cosmos are beyond ordinary human understanding. But what are the chances that (2)?",
     "The size and age of the Cosmos are beyond ordinary human understanding. What does this speculation lead to?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "The size and age of the Cosmos are beyond ordinary human understanding. You don't seem quite certain.",
     "The size and age of the Cosmos are beyond ordinary human understanding. Why the uncertain tone?",
     "The size and age of the Cosmos are beyond ordinary human understanding. Can't you be more positive?",
     "The size and age of the Cosmos are beyond ordinary human understanding. You aren't sure?",
     "The size and age of the Cosmos are beyond ordinary human understanding. Don't you know?",
     "The size and age of the Cosmos are beyond ordinary human understanding. How likely, would you estimate?"
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem. Somewhere, something incredible is waiting to be known.",
     "Hi.  Somewhere, something incredible is waiting to be known. What seems to be your problem?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Human beings have a demonstrated talent for self-deception when their emotions are stirred. Do you believe you are (2)?",
     "Human beings have a demonstrated talent for self-deception when their emotions are stirred. Would you want to be (2)?",
     "Human beings have a demonstrated talent for self-deception when their emotions are stirred. Do you wish I would tell you you are (2)?",
     "Human beings have a demonstrated talent for self-deception when their emotions are stirred. What would it mean if you were (2)?",
     "goto what"
  ]]
]],
["your", 0, [
 ["* your *", [
     "The universe is not required to be in perfect harmony with human ambition. Why are you concerned over my (2)?",
     "The universe is not required to be in perfect harmony with human ambition. What about your own (2)?",
     "The universe is not required to be in perfect harmony with human ambition. Are you worried about someone else's (2)?",
  ]]
]],

["what", 0, [
 ["*", [
     "Our preferences do not determine what's true. Why do you ask?",
     "Our preferences do not determine what's true. Does that question interest you?",
     "Our preferences do not determine what's true. What is it you really want to know?",
     "Our preferences do not determine what's true. Are such questions much on your mind?",
     "Our preferences do not determine what's true. What answer would please you most?",
     "Our preferences do not determine what's true. What do you think?",
     "Our preferences do not determine what's true. What comes to mind when you ask that?",
     "Our preferences do not determine what's true. Have you asked such questions before?",
     "Our preferences do not determine what's true. Have you asked anyone else?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof