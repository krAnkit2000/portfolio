const projects = [

    {
        name: "Chat",
        description: "Developed a real-time chat web application .Enabling instant messaging without page reloads.Designed a fully responsive and modern user interface from scratch, ensuring a seamless experience across desktop and mobile devices.",
        tech: "HTML5, CSS3, JavaScript, Firebase",
        img: "https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?t=st=1774963091~exp=1774966691~hmac=894aa5b9c6b4a49a1faac6a1e8ea693917fff15dd600ca86ab7713c90caf2a9c&w=1480",
        link: "https://chat-60.vercel.app/"
        
    },

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
        name: "FashionHive",
        description: "FashionHive – A shopping workflow that lets users select items, add them to the cart, and place an order.",
        tech: "React ,  Firebase ,Js,CSS",
        img: "https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409467.jpg?t=st=1761567415~exp=1761571015~hmac=9649847bd6483828c869f5fa8f030d33f534d8b1bd11736cd7708362911e26a3&w=1480",
        link: "https://e-com-beta-five.vercel.app/login?mode=login"
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
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="detail">
                <h3 class="name">${p.name}</h3>
                <small class="role">${p.tech}</small>
                <p class="description">${p.description}</p>
            </div>
        </a>
    </div>
`;
});

// for mobile slider 
const sliderMobile = document.getElementById('project-slider-mobile');

allProjects.forEach(p => {
    slider.innerHTML += `
    <div class="Project">
        <a href="${p.link}" target="_blank">
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="detail">
                <h3 class="name">${p.name}</h3>
                <small class="role">${p.tech}</small>
                <p class="description">${p.description}</p>
            </div>
        </a>
    </div>
`;
});

// Infinite scroll effect
sliderMobile.innerHTML += sliderMobile.innerHTML;
