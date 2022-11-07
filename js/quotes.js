const quoteArray = [
    {
        quote: "A strong person is someone who can protect their inner kindness.",
        action: "Stay strong",
    },
    {
        quote: "Recipe for happiness: Mature defense mech, stable long-term relationships, no drinking, no smoking, exercise, staying in shape.",
        action: "Be happy",
    },
    {
        quote: "You will know it's time to push to the next level when you start getting too comfortable.",
        action: "Don't burnout",
    },
    {
        quote: "You can't reach the top without going up hill.",
        action: "Keep climbing",
    },
    {
        quote: "Harder it is to get it, the longer it will stay.",
        action: "Give your everything",
    },
    {
        quote: "Success isn't made from a secret recipe, it comes from dedication.",
        action: "Forget regret",
    },
    {
        quote: "If I lose self-confidence, the whole world becomes my enemy.",
        action: "Love yourself first",
    },
    {
        quote: "Zero times anything is zero. No matter how small, find positive meaning and add it to your life's asset one by one.",
        action: "One is still greater than zero",
    },
    {
        quote: "You can interpret everything people say into one of two things: asking for favor (please) or showing appreciation (thank you).",
        action: "Make overcomplicate other people",
    },
    {
        quote: "Knowledge + Experience = Skill => ++ Confidence",
        action: "Formula for loving yourself",
    },
    {
        quote: "When in doubt, don't leave it to your imagination. Find solution through experience.",
        action: "Actions speak louder than words",
    },
    {
        quote: "You are the average of the 5 people you spend the most time with.",
        action: "Choose your birds of feather",
    },
    {
        quote: "Your internal qualities are your most valuable assets. All your expensive clothes can be taken away, but your own style and taste curated stays with you.",
        action: "Be authentic",
    },
]

const quoteElement = document.querySelector("#quote span:first-child");
const actionElement = document.querySelector("#quote span:last-child");

const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

quoteElement.innerText = randomQuote.quote;
actionElement.innerText = randomQuote.action;
