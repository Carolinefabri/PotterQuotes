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
    
    // Ícone SVG como string (ou substitua por um link de SVG externo)
    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#263238" d="M29,31H19l-2,13h14L29,31z"></path><path fill="#64b5f6" d="M24,35l-5-4v-6h10v6L24,35z"></path><path fill="#263238" d="M8,44h11V31C19,31,8,32.986,8,44z M29,31v13h11C40,33.025,29,31,29,31z"></path><path fill="#37474f" d="M24,43l-0.001-0.002"></path><path fill="#263238" d="M29,30l-2.904,1.742C24.796,32.523,24,33.928,24,35.445V36h5V30z"></path><path fill="#263238" d="M19,30l2.904,1.742C23.204,32.523,24,33.928,24,35.445V36h-5V30z"></path><path fill="#90caf9" d="M17,18c0-1.105-0.219-1.219-1-2c-1-1-3-1.105-3,0s0.894,4,2,4C16.104,20,17,19.105,17,18"></path><path fill="#90caf9" d="M31,18c0,1.105,0.896,2,2,2c1.106,0,2-2.895,2-4s-2-1-3,0C31.219,16.781,31,16.895,31,18"></path><path fill="#bbdefb" d="M32.993,12c0-4.187-3.618-7.618-8.224-7.965c-0.243-0.021-0.489-0.032-0.737-0.033 C24.021,4.001,24.011,4,24,4C24,4,23.999,4,23.999,4c-0.001,0-0.001,0-0.002,0c-0.007,0-0.013,0.001-0.019,0.001 c-3.316,0.008-6.203,1.615-7.755,3.998C15.457,8.994,15,10.047,15,11c0,2,0,7,0,7v2c0,3.854,2.425,7.132,5.828,8.415 C21.558,29.372,22.7,30,23.996,30c1.297,0,2.438-0.628,3.169-1.585c3.403-1.284,5.828-4.562,5.828-8.415v-2c0,0,0-1.434-0.024-3 h0.024V12z"></path><polygon fill="#64b5f6" points="23,22 23,23 21,22"></polygon><polygon fill="#64b5f6" points="25,22 25,23 27,22"></polygon><path fill="#0d47a1" d="M18.021,16.289C18.011,16.358,18,16.428,18,16.5c0,0.828,0.672,1.5,1.5,1.5 c0.756,0,1.375-0.561,1.479-1.289L18.021,16.289z"></path><path fill="#0d47a1" d="M29.957,16.289c0.01,0.07,0.021,0.139,0.021,0.211c0,0.828-0.672,1.5-1.5,1.5 c-0.756,0-1.375-0.561-1.479-1.289L29.957,16.289z"></path>
    </svg>
    `;
    
    Swal.fire({
        title: 'Quotes to Keep You Going ',
        text: quote,
        iconHtml: svgIcon,
        confirmButtonText: 'OK',
        customClass: {
            container: 'harry-potter-theme',
        }
    });
}



document.getElementById('generate-btn').addEventListener('click', generateQuote);
