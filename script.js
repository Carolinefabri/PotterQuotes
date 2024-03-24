const quotes = [
    "Being an adult is waiting for your Hogwarts letter while checking your mailbox full of bills.",
    "In adult life, your Patronus is an espresso.",
    "The only magical potion you need in adult life is a good breakfast.",
    "In adult life, you need more than a spell to clean up your house mess.",
    "Instead of catching the Hogwarts Express, adults catch the Morning Express.",
    "In adult life, you learn the art of apparating to work every day.",
    "Being an adult is dealing with Dementors called bills.",
    "The only golden snitch adults chase is a promotion at work.",
    "In adult life, your wand is replaced with a pen and paper.",
    "Adults practice organization spells to try to keep their lives in order.",
    "Being an adult is watching a Harry Potter marathon and identifying more with the professors than the students.",
    "In adult life, the Room of Requirement is just a good department store.",
    "Adults don't have a Marauder's Map, just GPS.",
    "Being an adult is staying up all night at a party and needing a week to recover.",
    "In adult life, you find out the real villain is lack of time, not Voldemort.",
    "Adults don't have a philosopher's stone, just vitamins for health.",
    "Being an adult is taking Defense Against Financial Arts classes.",
    "In adult life, you need more than Wingardium Leviosa to clean up your house mess.",
    "Adults have Herbology classes in their gardens.",
    "Being an adult is grocery shopping and feeling like you're restocking Healing Potions.",
    "In adult life, you learn to use Expelliarmus to turn off the alarm clock.",
    "Adults don't have Dumbledore's Electric Shock, just electricity bills to pay.",
    "Being an adult is going out for dinner and wondering if the Muggles around you are secretly eating magical food.",
    "In adult life, adults don't need Amortentia potions, just a good perfume.",
    "Adults attend Transfiguration classes at the gym.",
    "Being an adult is trying to convince your friends to start a Harry Potter book club, but everyone is too busy.",
    "In adult life, the Mirror of Erised only shows one day off.",
    "Adults are more likely to encounter a Boggart in the work closet than under the bed.",
    "Being an adult is having to explain to Muggles why you still love Harry Potter.",
    "In adult life, you need more than a Packing Spell than a Patronus Spell to feel safe."
];



function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    alert(quote); 
}


document.getElementById('generate-btn').addEventListener('click', generateQuote);
