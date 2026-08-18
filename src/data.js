//EDIT THIS

export const isTransitionEnabled = true; // for enabling view transitions

export const myName = 'Stephen Donlin'; // For name in main intro text

export const navLogoText = 'SD'; // navbar left-most logo text
// bio for main section

export const myBio = `Welcome to my corner of the internet! Please bare with me as I work to build build out the site.`;

// about me text for about section

export const aboutMe =
  'Computer science student at University of Colorado Boulder, graduating December 2026, after 10+ years leading global marketing programs at like Microsoft, 2K, and Dentsu.';

// A sub text for writing/blog section
export const writingText = 'More is on the way.';
//
// A sub text for contact section

export const contactText = `Feel free to reach out, I'd love to hear from you!`;

// Links to put in the navigation bar as well as footer at bottom of the page

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

// Selected projects (side box) for main section of page

export const selectedProjects = [
  //{ name: '2 Player Battleship', link: '#' },
  //{ name: 'Project 2', link: '#' }, add Go game
  //{ name: 'Project 3', link: '#' }, add cybersecurity project
  //{ name: 'Project 4', link: '#' },
];

// Skills section for about section of the page

export const skills = [
  'C++',
  'Python',
  'Go',
  'SQL',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'GitLab',
  'Bash',
  'Scala',
];

// work experience box for about section of the page
export const workExperiences = [
  {
    organisationName: 'Assembly Global',
    position: 'Media Consultant',
    date: '2021 - 2023',
    info: ['American Heart Association'],
  },
  {
    organisationName: '2K Games',
    position: 'Sr. Global Go-to-Market Manager',
    date: '2019 - 2021',
    info: ['WWE2K', 'PGA Tour2K', 'Paid Media', 'Strategic Partnerships', 'Civilization IV'],
  },
  {
    organisationName: 'Microsoft',
    position: 'Senior Marketing Manager',
    date: '2017 - 2019',
    info: ['Xbox', 'Windows', 'Skype', 'Microsoft Store'],
  },
  {
    organisationName: 'Dentsu',
    position: 'Director, Search - Microsoft',
    date: '2014 - 2017',
    info: ['Surface', 'Xbox', 'Windows', 'Windows PCs'],
  },
];

// contact box for contact section of the page

export const contactOptions = [
  { name: 'Email', link: 'stephen@stephendonlin.com' },
  { name: 'Github', link: 'https://github.com' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/stephendonlin' },
  //{ name: 'X', link: 'https://x.com' },
];

// for enabling/disabling maintained by text in footer, if you want.
//export const showDeveloperText = true;
