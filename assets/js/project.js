const projects = [
    {
        name: "Music Web App",
        description: "Stream 30-sec song previews from Apple Music with autoplay & download to local storage.",
        tech: "HTML5, CSS3, JavaScript, Apple Music API",
        img: "https://img.freepik.com/free-vector/music-note-with-wave-coming-out_1394-638.jpg?t=st=1755270104~exp=1755273704~hmac=c4e94e8b629c370b5409d3c0c4938636d519c33b444f0c372d8cc4c75ac64b8c&w=1060",
        link: "https://music-gaana.vercel.app/"
    },
    {
        name: "Weather App",
        description: "Shows temperature, current weather, humidity, and wind speed.",
        tech: "HTML5, CSS3, JavaScript, Weather API",
        img: "https://img.freepik.com/free-photo/sunny-cloud-3d-render_23-2152008837.jpg?ga=GA1.1.5696933.1737007306&semt=ais_hybrid&w=740&q=80",
        link: "https://weathercurrentcheck.netlify.app/"
    },
    {
        name: "Random Password Generator",
        description: "Generates secure passwords based on user-selected parameters.",
        tech: "HTML5, CSS3, JavaScript",
        img: "https://img.freepik.com/premium-vector/password-protected-icon-yellow-backround-security-sign-symbol-design-mobile-applications-website-concept-3d-vector-illustration-style_38364-225.jpg?w=1060",
        link: "https://password-generator-io.netlify.app/"
    },
    {
        name: "Color Picker",
        description: "Identify colors from text or images with accurate codes.",
        tech: "HTML5, CSS3, React",
        img: "https://img.freepik.com/free-vector/frame-with-colorful-shapes_1025-862.jpg?t=st=1755269847~exp=1755273447~hmac=26c54ce4564d4ce3e791bc842f97afbbee52ce3c5ccdf03616329e80ea6f32ea&w=1060",
        link: "https://color-identify.netlify.app/"
        
    }
];

const slider = document.getElementById("project-slider");

// Duplicate array to make infinite effect
const allProjects = [...projects, ...projects];

allProjects.forEach(p => {
    slider.innerHTML += `
        <div class="Project">
            <a href="${p.link}" target="_blank">
                <img src="${p.img}" alt="${p.name}">
                <p class="description">${p.description}</p>
                <div class="detail">
                    <h3 class="name">${p.name}</h3>
                    <small class="role">${p.tech}</small>
                </div>
            </a>
          
        </div>
    `;
});

// for mobile slider 

const sliderMobile = document.querySelector('.sliderMobile');
let isDown = false;
let startX;
let scrollLeft;

sliderMobile.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderMobile.classList.add('active');
  startX = e.pageX - sliderMobile.offsetLeft;
  scrollLeft = sliderMobile.scrollLeft;
});
sliderMobile.addEventListener('mouseleave', () => {
  isDown = false;
  sliderMobile.classList.remove('active');
});
sliderMobile.addEventListener('mouseup', () => {
  isDown = false;
  sliderMobile.classList.remove('active');
});
sliderMobile.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderMobile.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  sliderMobile.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
sliderMobile.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - sliderMobile.offsetLeft;
  scrollLeft = sliderMobile.scrollLeft;
});
sliderMobile.addEventListener('touchend', () => {
  isDown = false;
});
sliderMobile.addEventListener('touchmove', (e) => {
  if(!isDown) return;
  const x = e.touches[0].pageX - sliderMobile.offsetLeft;
  const walk = (x - startX) * 2;
  sliderMobile.scrollLeft = scrollLeft - walk;
});
