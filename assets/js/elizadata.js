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
     "As a comet gets close to the Sun, it loses some of its mass due to the sublimation. If a comet goes around enough times, it will eventually break up. Comets also break up if they come TOO close to the Sun. Relationships are hard. "
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
     "The universe seems neither benign nor hostile, merely indifferent.  Does talking about this bother you?"
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
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2)?",
     "Would you want to be (2)?",
     "Do you wish I would tell you you are (2)?",
     "What would it mean if you were (2)?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am'?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not?",
     "Would you prefer if I weren't (2)?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2)?",
     "goto what",
     "Would it matter to you?",
     "What if I were (2)?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2)?",
     "Would you like it if they were not (2)?",
     "What if they were not (2)?",
     "Are they always (2)?",
     "Possibly they are (2).",
     "Are you positive they are (2)?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2)?",
     "What about your own (2)?",
     "Are you worried about someone else's (2)?",
     "Really, my (2)?",
     "What makes you think of my (2)?",
     "Do you want my (2)?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2)?",
     "Do you think you were (2)?",
     "Were you (2)?",
     "What would it mean if you were (2)?",
     "What does ' (2) ' suggest to you?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really?",
     "Why do you tell me you were (2) now?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2)?",
     "What suggests that I was (2)?",
     "What do you think?",
     "Perhaps I was (2).",
     "What if I had been (2)?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3)?",
     "Why do you want (3)?",
     "Suppose you got (3) soon.",
     "What if you never got (3)?",
     "What would getting (3) mean to you?",
     "What does wanting (3) have to do with this discussion?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3). Eighty or so quick trips around the Sun and all will be silence.",
     "I'm sure it's not pleasant to be (3) but eighty or so quick trips around the Sun and all will be silence."
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3)?",
     "Has your treatment made you (3)?",
     "What makes you (3) just now?",
     "Can you explain why you are suddenly (3)?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so?",
     "But you are not sure you (3).",
     "Do you really doubt you (3)?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me?",
     "How long have you been (2)?",
     "Do you believe it is normal to be (2)?",
     "Do you enjoy being (2)?",
     "Do you know anyone else who is (2)?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3)?",
     "Have you tried?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3)?",
     "What if you could (3)?"
  ]],
 ["* i don't *", [
     "Don't you really (2)?",
     "Why don't you (2)?",
     "Do you wish to be able to (2)?",
     "Does that trouble you?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2)?",
     "Do you enjoy feeling (2)?",
     "Of what does feeling (2) remind you?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else?"
  ]],
 ["*", [
     "You say (1)?",
     "Can you elaborate on that?",
     "Do you say (1) for some special reason?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2)?",
     "Does it please you to believe I am (2)?",
     "Do you sometimes wish you were (2)?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you?",
     "You like to think I (2) you -- don't you?",
     "What makes you think I (2) you?",
     "Really, I (2) you?",
     "Do you wish to believe I (2) you?",
     "Suppose I did (2) you -- what would that mean?",
     "Does someone else believe I (2) you?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2)?",
     "You're not really talking about me -- are you?",
     "What are your feelings now?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2)?",
     "Surely someone (2) .",
     "Can you think of anyone at all?",
     "Are you thinking of a very special person?",
     "Who, may I ask?",
     "You have a particular person in mind, don't you?",
     "Who do you think you are talking about?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not?",
     "Why 'no'?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2)?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4)?",
     "Your (3)?",
     "What else comes to your mind when you think of your (3)?"
  ]],
 ["* my *", [
     "Your (2)?",
     "Why do you say your (2)?",
     "Does that suggest anything else which belongs to you?",
     "Is it important to you that your (2)?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2)?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask?",
     "Does that question interest you?",
     "What is it you really want to know?",
     "Are such questions much on your mind?",
     "What answer would please you most?",
     "What do you think?",
     "What comes to mind when you ask that?",
     "Have you asked such questions before?",
     "Have you asked anyone else?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason?",
     "Don't any other reasons come to mind?",
     "Does that reason seem to explain anything else?",
     "What other reasons might there be?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2)?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself?",
     "You want me to (2)?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2)?",
     "Do you want to be able to (2)?",
     "Do you believe this will help you to (2)?",
     "Have you any idea why you can't (2)?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2)?",
     "Surely not (2).",
     "Can you think of anyone in particular?",
     "Who, for example?",
     "Are you thinking of a very special person?",
     "Who, may I ask?",
     "Someone special perhaps?",
     "You have a particular person in mind, don't you?",
     "Who do you think you're talking about?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example?",
     "When?",
     "What incident are you thinking of?",
     "Really, always?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way?",
     "What resemblence do you see?",
     "What does that similarity suggest to you?",
     "What other connections do you see?",
     "What do you suppose that resemblence means?",
     "What is the connection, do you suppose?",
     "Could there really be some connection?",
     "How?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different?",
     "What differences do you see?",
     "What does that difference suggest to you?",
     "What other distinctions do you see?",
     "What do you suppose that disparity means?",
     "Could there be some connection, do you suppose?",
     "How?"
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