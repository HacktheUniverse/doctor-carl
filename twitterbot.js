var Twit = require('twit');

var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
});

var stream = T.stream('user');

stream.on('tweet', function (tweet) {
  
   if (typeof tweet.text != 'undefined')

        if (tweet.text.toLowerCase().indexOf('@doctorcarlbot') > -1)
        {

            console.log('Tweeted @ by ' + tweet.user.screen_name);
            T.post('statuses/update', { status: '@' + tweet.user.screen_name + ' ' + carlquotes[Math.floor(Math.random() * 29)], in_reply_to_status_id: tweet.id_str} , function(err, data, response) {
  				      console.log(data);
			       });
        }

});


var carlquotes = [
  'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
  'If you wish to make an apple pie from scratch, you must first invent the universe.',
  'It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.',
  'Somewhere, something incredible is waiting to be known.',
  'For small creatures such as we the vastness is bearable only through love.',
  'Sooner or later this combustible mixture of ignorance and power is going to blow up in our faces.',
  'Extinction is the rule. Survival is the exception.',
  'The universe seems neither benign nor hostile, merely indifferent.',
  'A celibate clergy is an especially good idea, because it tends to suppress any hereditary propensity toward fanaticism.',
  'Absence of evidence is not evidence of absence.',
  "When you make the finding yourself - even if you're the last person on Earth to see the light - you'll never forget it.",
  'The universe is not required to be in perfect harmony with human ambition.',
  "Our preferences do not determine what's true.",
  "Science and democracy have very consonant values and approaches, and I don't think you can have one without the other.",
  'The size and age of the Cosmos are beyond ordinary human understanding.',
  'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
  "We are like butterflies who flutter for a day and think it's forever.",
  'Human beings have a demonstrated talent for self-deception when their emotions are stirred.',
  'Nobody listens to mathematicians.',
  'Books permit us to voyage through time, to tap the wisdom of our ancestors.',
  'Other things being equal, it is better to be smart than to be stupid.',
  'War is murder writ large.',
  'There are no sacred truths; all assumptions must be critically examined; arguments from authority are worthless.',
  'It’s hard to kill a creature once it lets you see its consciousness.',
  'Jingoistic rhetoric and puerile self-congratulatory nationalism.',
  'Skepticism is the chastity of the intellect, and it is shameful to surrender it too soon or to the first comer.',
  'Humans are very good at dreaming, although you’d never know it from your television.',
  'In the long run, the aggressive civilizations destroy themselves, almost always. It’s their nature. They can’t help it.',
  'That it will never come again is what makes life so sweet. Emily Dickinson',
  'We are the legacy of 15 billion years of cosmic evolution.'
];













