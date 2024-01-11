const goodLinks = [
  "https://dxc.udemy.com/organization/home/",
  "https://dxc.udemy.com/course/understand-javascript/learn/lecture/2237542#overview",
  "https://cloudnativebasecamp.com/courses/algo-01/",
  "https://www.typingclub.com/sportal/program-3.game",
  "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  "https://www.ted.com/",
];

// Function to get a random link from the array
function getRandomLink() {
  const randomIndex = Math.floor(Math.random() * goodLinks.length);
  return goodLinks[randomIndex];
}

const goodLink = getRandomLink();
// redirect to new link
window.location.replace(goodLink);
