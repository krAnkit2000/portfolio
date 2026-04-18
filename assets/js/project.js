const slider = document.getElementById("project-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// 🛑 stop if slider not found
if (!slider) {
    console.error("Slider element not found");
} else {

    const projects = [
        {
            name: "Chat",
            description: "Developed a real-time chat web application .Enabling instant messaging without page reloads.Designed a fully responsive.",
            tech: "HTML5, CSS3, JavaScript, Firebase",
            img: "https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg",
            link: "https://chat-60.vercel.app/"
        },
        {
            name: "Music Web App",
            description: "Stream 30-sec Developed a music web application that streams 30-second song previews from Apple Music with seamless autoplay functionality.",
            tech: "HTML5, CSS3, JavaScript, API",
            img: "https://img.freepik.com/free-vector/music-note-with-wave-coming-out_1394-638.jpg",
            link: "https://music-gaana.vercel.app/"
        },
        {
            name: "My-Tools",
            description: "A clean and modern platform offering essential tools like image editing, PDF utilities, and QR code generation—all in one place.",
            tech: "React, CSS, Bootstrap",
            img: "https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-3785.jpg",
            link: "https://theeasyedit.vercel.app/"
        },
        {
            name: "Weather App",
            description: "Built a dynamic weather application that displays real-time data such as temperature, weather conditions, humidity, and wind speed using a Weather API.",
            tech: "HTML5, CSS3, JavaScript",
            img: "https://img.freepik.com/free-photo/sunny-cloud-3d-render_23-2152008837.jpg",
            link: "https://weathercurrentcheck.netlify.app/"
        },
         {
            name: "Random Password Generator",
            description: "Built a secure password generator that allows users to customize password strength by selecting parameters like length, uppercase/lowercase letters, numbers, and special characters.",
            tech: "HTML5, CSS3, JavaScript",
            img: "https://img.freepik.com/premium-vector/password-protected-icon-yellow-backround-security-sign-symbol-design-mobile-applications-website-concept-3d-vector-illustration-style_38364-225.jpg?w=1060",
            link: "https://password-generator-io.netlify.app/"
    },
    {
            name: "Color Picker",
            description: "Built an interactive color picker application that allows users to extract and identify colors from text or uploaded images, providing accurate HEX/RGB codes.",
            tech: "HTML5, CSS3, React",
            img: "https://img.freepik.com/free-vector/frame-with-colorful-shapes_1025-862.jpg?t=st=1755269847~exp=1755273447~hmac=26c54ce4564d4ce3e791bc842f97afbbee52ce3c5ccdf03616329e80ea6f32ea&w=1060",
            link: "https://color-identify.netlify.app/"
        
    },
     {
            name: "FashionHive",
            description: "FashionHive – A shopping workflow that lets users select items, add them to the cart, and place an order.",
            tech: "React ,  Firebase ,Js,CSS",
            img: "https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409467.jpg?t=st=1761567415~exp=1761571015~hmac=9649847bd6483828c869f5fa8f030d33f534d8b1bd11736cd7708362911e26a3&w=1480",
            link: "https://e-com-beta-five.vercel.app/login?mode=login"
    },
    ];


    const allProjects = [...projects, ...projects];

    // 🎯 render
    slider.innerHTML = allProjects.map(p => `
       <div class="Project">
    <a href="${p.link}" target="_blank" class="card-link">
        
        <div class="img-container">
            <img src="${p.img}" alt="${p.name}">
        </div>

        <div class="detail">
            <h3>${p.name}</h3>
            <small>${p.tech}</small>
            <p>${p.description}</p>

            <span class="view-btn">View Project</span>
        </div>

    </a>
</div>
    `).join("");
}


// ==========================
// 👉 BUTTONS (safe)
// ==========================
if (nextBtn && prevBtn && slider) {
    const scrollAmount = 320;

    nextBtn.addEventListener("click", () => {
        slider.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollLeft -= scrollAmount;
    });
}


// ==========================
// 👉 SWIPE (safe)
// ==========================
if (slider) {
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        slider.scrollLeft = scrollLeft + (startX - x);
    });
}

function updateActiveCard() {
  
    if (window.innerWidth > 768) return;

    const cards = document.querySelectorAll(".Project");
    const sliderRect = slider.getBoundingClientRect();
    const center = sliderRect.left + sliderRect.width / 2;

    cards.forEach(card => {
        const box = card.getBoundingClientRect();
        const cardCenter = box.left + box.width / 2;

        if (Math.abs(center - cardCenter) < 100) {
            card.style.transform = "scale(1.05)";
            card.style.opacity = "1";
        } else {
            card.style.transform = "scale(0.9)";
            card.style.opacity = "0.6";
        }
    });
}

// scroll par run
slider.addEventListener("scroll", updateActiveCard);

// first load par bhi run
updateActiveCard();
