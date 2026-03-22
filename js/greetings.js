const BIRTHDAYS = [
  {
    name: "A. Jeevitha",
    dob: "11 Jan",
    photo: "assets/profile pics/C9-2.jpeg",
  },
  {
    name: "Adarsh Potunuri",
    dob: "30 Dec",
    photo: "assets/profile pics/D0-2.jpeg",
  },
  {
    name: "Adepu Divya",
    dob: "27 May",
    photo: "assets/profile pics/D1-2.jpeg",
  },
  {
    name: "Akitivarunreddy",
    dob: "04 Aug",
    photo: "assets/profile pics/D2-1.jpeg",
  },
  { name: "Ali Imam", dob: "18 Oct", photo: "assets/profile pics/D3-1.jpeg" },
  {
    name: "Bhukya Praveen",
    dob: "13 Feb",
    photo: "assets/profile pics/D4-1.jpg",
  },
  {
    name: "Bijjarapu ShivaPranav",
    dob: "12 Jan",
    photo: "assets/profile pics/D5-1.jpeg",
  },
  {
    name: "Billa Chris Charan Paul",
    dob: "26 Dec",
    photo: "assets/profile pics/D6-2.jpeg",
  },
  {
    name: "Chekuri Harsha Vardhan",
    dob: "07 Oct",
    photo: "assets/profile pics/D7.jpeg",
  },
  {
    name: "Daram Varshita",
    dob: "19 Jan",
    photo: "assets/profile pics/D8.jpeg",
  },
  {
    name: "Devanaboyina Ajay",
    dob: "26 Apr",
    photo: "assets/profile pics/D9-2.jpeg",
  },
  {
    name: "Edula Anusha",
    dob: "02 Dec",
    photo: "assets/profile pics/E0-1.jpeg",
  },
  {
    name: "Gaddam Anusha",
    dob: "04 Feb",
    photo: "assets/profile pics/E1-1.jpeg",
  },
  {
    name: "Gaddam Rakesh",
    dob: "22 Oct",
    photo: "assets/profile pics/E2.jpeg",
  },
  {
    name: "Gollagadda Snehitha Goud",
    dob: "02 Dec",
    photo: "assets/profile pics/E3-1.jpeg",
  },
  {
    name: "Gundavarapu Ayyanna Chowdary",
    dob: "14 Sep",
    photo: "assets/profile pics/E4-2.jpeg",
  },
  {
    name: "Joseph Junias Paul",
    dob: "06 Apr",
    photo: "assets/profile pics/E5-2.jpeg",
  },
  {
    name: "J Sunil Kumar",
    dob: "11 Sep",
    photo: "assets/profile pics/E6-2.jpeg",
  },
  {
    name: "Jadhav Ankitha",
    dob: "21 Jul",
    photo: "assets/profile pics/E7-1.jpeg",
  },
  { name: "K. Tanush", dob: "11 Jun", photo: "assets/profile pics/E8-1.jpeg" },
  {
    name: "Saimani Kallepally",
    dob: "05 Nov",
    photo: "assets/profile pics/E9-1&2.jpeg",
  },
  {
    name: "Kaparaboina Abhinav",
    dob: "04 Aug",
    photo: "assets/profile pics/F0-2.jpeg",
  },
  {
    name: "K. Ramcharan Reddy",
    dob: "07 Jul",
    photo: "assets/profile pics/F1-1.jpeg",
  },
  {
    name: "Kota Aswitha",
    dob: "29 Mar",
    photo: "assets/profile pics/F2-1.jpg",
  },
  {
    name: "Kothapally Jathin",
    dob: "27 May",
    photo: "assets/profile pics/F3-1.jpeg",
  },
  {
    name: "M. Goutham Reddy",
    dob: "20 Apr",
    photo: "assets/profile pics/F4-1&2.jpeg",
  },
  {
    name: "M Yogender Goud",
    dob: "19 Sep",
    photo: "assets/profile pics/F5-1.jpeg",
  },
  {
    name: "Mamidi Suryatej Reddy",
    dob: "20 Nov",
    photo: "assets/profile pics/F6-1.jpeg",
  },
  {
    name: "Manne Tarun Rushieksh",
    dob: "16 Jun",
    photo: "assets/profile pics/F7.jpeg",
  },
  {
    name: "Manuka Vasu Yadav",
    dob: "26 Mar",
    photo: "assets/profile pics/F8-2.jpeg",
  },
  {
    name: "Maya Mahathi",
    dob: "10 Jan",
    photo: "assets/profile pics/F9-2.jpeg",
  },
  {
    name: "Mekala Rishitha",
    dob: "27 Jul",
    photo: "assets/profile pics/G0-1.jpeg",
  },
  {
    name: "Mohammad Abdul Wasay",
    dob: "27 Jan",
    photo: "assets/profile pics/G1-1.jpeg",
  },
  {
    name: "Mohammed Kaif",
    dob: "31 Dec",
    photo: "assets/profile pics/G2-1.jpg",
  },
  {
    name: "Mohammed Yousuf",
    dob: "10 Jul",
    photo: "assets/profile pics/G3-1.jpeg",
  },
  { name: "Mohd Asif", dob: "08 Jul", photo: "assets/profile pics/G4-1.jpeg" },
  {
    name: "Motati Jayasree",
    dob: "13 Apr",
    photo: "assets/profile pics/G5-1.jpeg",
  },
  {
    name: "Muthyala Divya",
    dob: "08 Jul",
    photo: "assets/profile pics/G6-1.jpeg",
  },
  {
    name: "Nakkala Anunay Reddy",
    dob: "15 Sep",
    photo: "assets/profile pics/G7-1&2.jpeg",
  },
  {
    name: "Naredla Harini",
    dob: "06 Nov",
    photo: "assets/profile pics/G9-1.jpeg",
  },
  {
    name: "Pannela Sucharitha",
    dob: "24 May",
    photo: "assets/profile pics/H0-2.jpg",
  },
  {
    name: "Parshi Vaishnavi",
    dob: "01 Apr",
    photo: "assets/profile pics/H1-1.jpeg",
  },
  {
    name: "Partha Chaudhury",
    dob: "16 Jul",
    photo: "assets/profile pics/H2-1.jpeg",
  },
  {
    name: "Pottolla Parthiv Goud",
    dob: "08 Mar",
    photo: "assets/profile pics/H3-1.jpeg",
  },
  {
    name: "Ranga Abhigna",
    dob: "06 Jul",
    photo: "assets/profile pics/H4-1.jpeg",
  },
  {
    name: "Rangu Aravind Goud",
    dob: "24 Aug",
    photo: "assets/profile pics/H5-1&2.jpeg",
  },
  {
    name: "Rikkala Nikhitha Reddy",
    dob: "06 Oct",
    photo: "assets/profile pics/H6-2.jpeg",
  },
  {
    name: "Sambari Pranavi",
    dob: "09 Aug",
    photo: "assets/profile pics/H7-2.jpeg",
  },
  {
    name: "Shaik Mohammad Asrath",
    dob: "17 Sep",
    photo: "assets/profile pics/Asrath.jpg",
  },
  {
    name: "Sidha Meghana",
    dob: "16 Aug",
    photo: "assets/profile pics/H9-2.jpeg",
  },
  {
    name: "Sumayya Tarannum",
    dob: "30 Nov",
    photo: "assets/profile pics/J0.jpeg",
  },
  {
    name: "Sunkoju Sathwin",
    dob: "06 May",
    photo: "assets/profile pics/J1-2.jpeg",
  },
  {
    name: "Tanoor Kiran",
    dob: "25 Nov",
    photo: "assets/profile pics/J2-2.jpeg",
  },
  {
    name: "Tippareddy Shyam Sunder Reddy",
    dob: "30 Dec",
    photo: "assets/profile pics/J4-1&2.jpeg",
  },
  {
    name: "Utham Prasanna",
    dob: "23 Aug",
    photo: "assets/profile pics/J5-2.jpeg",
  },
  {
    name: "Vagvala Eshwar Arya",
    dob: "09 May",
    photo: "assets/profile pics/J6.jpeg",
  },
  {
    name: "Vittoli Sruthi",
    dob: "10 Jun",
    photo: "assets/profile pics/J7-2.jpeg",
  },
  {
    name: "Vuppala Manish",
    dob: "28 Jan",
    photo: "assets/profile pics/j8-2.jpeg",
  },
  {
    name: "Yeddula Bhavaneeth",
    dob: "29 Feb",
    photo: "assets/profile pics/J9-2.jpeg",
  },
  {
    name: "Yellanki Saideep",
    dob: "24 Jun",
    photo: "assets/profile pics/K0-2.jpeg",
  },
  {
    name: "Yenugu Sanjana",
    dob: "13 Jul",
    photo: "assets/profile pics/K1-2.jpeg",
  },
  {
    name: "Mendu Sahithi Sai",
    dob: "30 Dec",
    photo: "assets/profile pics/K2-1.jpeg",
  },
  { name: "Shivannagari Shivasathwik Goud", dob: "30 Aug", photo: "" },
  { name: "Nenavath Venkatesh", dob: "25 May", photo: "" },
  {
    name: "Emmadi Ranjith Kumar",
    dob: "06 Dec",
    photo: "assets/profile pics/LE15-1.jpeg",
  },
  {
    name: "Mangali Shirisha",
    dob: "10 Aug",
    photo: "assets/profile pics/LE16-1.jpeg",
  },
  {
    name: "Meesa Suchithra",
    dob: "22 Aug",
    photo: "assets/profile pics/LE17-1.jpeg",
  },
  {
    name: "Measa Pooja",
    dob: "30 Jun",
    photo: "assets/profile pics/LE18-1.jpg",
  },
  {
    name: "A. Anji Kumar",
    dob: "08 Dec",
    photo: "assets/profile pics/LE19.jpeg",
  },
];

const FESTIVALS = [
  {
    name: "New Year",
    date: "01 Jan",
    wish: "Happy New Year 2026! 🎆",
    colors: ["#0f172a", "#334155"],
  },
  {
    name: "Lohri",
    date: "13 Jan",
    wish: "Happy Lohri! 🔥",
    colors: ["#d97706", "#f59e0b"],
  },
  {
    name: "Makar Sankranti / Pongal",
    date: "14 Jan",
    wish: "Happy Makar Sankranti & Pongal! 🪁🌾",
    colors: ["#f59e0b", "#fbbf24"],
  },
  {
    name: "Vasant Panchami",
    date: "23 Jan",
    wish: "Happy Vasant Panchami! 🌼",
    colors: ["#fbbf24", "#fef08a"],
  },
  {
    name: "Republic Day",
    date: "26 Jan",
    wish: "Happy Republic Day! 🇮🇳",
    colors: ["#f97316", "#ffffff", "#22c55e"],
  },
  {
    name: "Thaipusam",
    date: "01 Feb",
    wish: "Happy Thaipusam! ✨",
    colors: ["#7c3aed", "#8b5cf6"],
  },
  {
    name: "Maha Shivaratri",
    date: "15 Feb",
    wish: "Happy Maha Shivaratri! 🕉️",
    colors: ["#4b5563", "#1f2937"],
  },
  {
    name: "Holika Dahan",
    date: "03 Mar",
    wish: "Happy Holika Dahan! 🔥",
    colors: ["#ea580c", "#fb923c"],
  },
  {
    name: "Holi",
    date: "04 Mar",
    wish: "Happy Holi! 🎨",
    colors: ["#ec4899", "#ef4444", "#eab308", "#22c55e", "#3b82f6"],
  },
  {
    name: "Ugadi / Gudi Padwa",
    date: "19 Mar",
    wish: "Happy Ugadi & Gudi Padwa! 🌿",
    colors: ["#16a34a", "#22c55e"],
  },
  {
    name: "Cheti Chand",
    date: "20 Mar",
    wish: "Happy Cheti Chand! ✨",
    colors: ["#2563eb", "#3b82f6"],
  },
  {
    name: "Eid al-Fitr / Ramzan Eid",
    date: "21 Mar",
    wish: "Eid Mubarak! 🌙⭐",
    colors: ["#059669", "#10b981"],
  },
  {
    name: "Ram Navami",
    date: "26 Mar",
    wish: "Happy Ram Navami! 🏹",
    colors: ["#f97316", "#fb923c"],
  },
  {
    name: "Mahavir Jayanti",
    date: "31 Mar",
    wish: "Happy Mahavir Jayanti! 🙏",
    colors: ["#fbbf24", "#fcd34d"],
  },
  {
    name: "Hanuman Jayanti",
    date: "02 Apr",
    wish: "Happy Hanuman Jayanti! 🚩",
    colors: ["#f97316", "#ea580c"],
  },
  {
    name: "Good Friday",
    date: "03 Apr",
    wish: "Good Friday Observance. 🙏",
    colors: ["#475569", "#1e293b"],
  },
  {
    name: "Easter Sunday",
    date: "05 Apr",
    wish: "Happy Easter! 🥚🐇",
    colors: ["#f472b6", "#fb7185"],
  },
  {
    name: "Baisakhi / Ambedkar Jayanti",
    date: "14 Apr",
    wish: "Happy Baisakhi & Ambedkar Jayanti! 🌾⚖️",
    colors: ["#0369a1", "#0284c7"],
  },
  {
    name: "Akshaya Tritiya",
    date: "19 Apr",
    wish: "Happy Akshaya Tritiya! 🪙",
    colors: ["#d4af37", "#f3e5ab"],
  },
  {
    name: "Labour Day / Buddha Purnima",
    date: "01 May",
    wish: "Happy Labour Day & Buddha Purnima! 🛠️🌕",
    colors: ["#991b1b", "#7c2d12"],
  },
  {
    name: "Eid al-Adha / Bakrid",
    date: "27 May",
    wish: "Eid-ul-Adha Mubarak! 🐑",
    colors: ["#065f46", "#047857"],
  },
  {
    name: "Muharram",
    date: "26 Jun",
    wish: "Islamic New Year Hijri 1448. ✨",
    colors: ["#1e293b", "#0f172a"],
  },
  {
    name: "Bonalu",
    date: "19 Jul",
    wish: "Happy Bonalu! 🥘🌺",
    colors: ["#be123c", "#e11d48"],
  },
  {
    name: "Bonalu (Sunday)",
    date: "26 Jul",
    wish: "Happy Bonalu! 🥘🌺",
    colors: ["#be123c", "#e11d48"],
  },
  {
    name: "Bonalu (Sunday)",
    date: "02 Aug",
    wish: "Happy Bonalu! 🥘🌺",
    colors: ["#be123c", "#e11d48"],
  },
  {
    name: "Bonalu (Sunday)",
    date: "09 Aug",
    wish: "Happy Bonalu! 🥘🌺",
    colors: ["#be123c", "#e11d48"],
  },
  {
    name: "Independence Day",
    date: "15 Aug",
    wish: "Happy Independence Day! 🇮🇳",
    colors: ["#f97316", "#ffffff", "#22c55e"],
  },
  {
    name: "Milad un Nabi",
    date: "26 Aug",
    wish: "Milad un Nabi Mubarak! 🌙",
    colors: ["#047857", "#059669"],
  },
  {
    name: "Janmashtami",
    date: "04 Sep",
    wish: "Happy Janmashtami! 🏺🐄",
    colors: ["#1d4ed8", "#2563eb"],
  },
  {
    name: "Ganesh Chaturthi",
    date: "14 Sep",
    wish: "Ganesh Chaturthi Mubarak! 🐘🌺",
    colors: ["#b91c1c", "#dc2626"],
  },
  {
    name: "Gandhi Jayanti",
    date: "02 Oct",
    wish: "Happy Gandhi Jayanti! 👓",
    colors: ["#475569", "#64748b"],
  },
  {
    name: "Bathukamma Begins",
    date: "11 Oct",
    wish: "Happy Bathukamma Festival! 🌸🌺",
    colors: ["#db2777", "#f43f5e"],
  },
  {
    name: "Dasara / Vijayadashami",
    date: "20 Oct",
    wish: "Happy Dasara! 🏹🔥",
    colors: ["#c2410c", "#ea580c"],
  },
  {
    name: "Diwali",
    date: "08 Nov",
    wish: "Happy Diwali! 🪔✨",
    colors: ["#d4af37", "#800000"],
  },
  {
    name: "Govardhan Puja",
    date: "09 Nov",
    wish: "Happy Govardhan Puja! 🐄",
    colors: ["#15803d", "#16a34a"],
  },
  {
    name: "Bhai Dooj",
    date: "10 Nov",
    wish: "Happy Bhai Dooj! 👫",
    colors: ["#b91c1c", "#e11d48"],
  },
  {
    name: "Feast of St Francis Xavier",
    date: "03 Dec",
    wish: "Happy Feast of St Francis Xavier! 🙏",
    colors: ["#1e3a8a", "#1e40af"],
  },
  {
    name: "Christmas Eve",
    date: "24 Dec",
    wish: "Merry Christmas Eve! 🎄",
    colors: ["#b91c1c", "#166534"],
  },
  {
    name: "Christmas",
    date: "25 Dec",
    wish: "Merry Christmas! 🎅🎄",
    colors: ["#dc2626", "#15803d"],
  },
];

// --- Confetti Integration ---
const CONFETTI_SCRIPT_URL =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
function loadConfetti(callback) {
  if (window.confetti) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = CONFETTI_SCRIPT_URL;
  script.onload = callback;
  document.head.appendChild(script);
}

function checkEvents() {
  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = today.getDate();
  const month = monthNames[today.getMonth()];
  const todayString = `${day < 10 ? "0" + day : day} ${month}`;

  // Check for Birthdays
  const celebrants = BIRTHDAYS.filter((person) =>
    person.dob.includes(todayString),
  );

  // Check for Festivals
  const todayFestival = FESTIVALS.find((f) => f.date === todayString);

  if (celebrants.length > 0 || todayFestival) {
    // Handle Notifications
    handleNotifications(celebrants, todayFestival);

    // Show Greeting Modal (High Impact - Once per session)
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const targetPages = [
      "index.html",
      "directory.html",
      "about.html",
      "faculty.html",
      "memories.html",
      "developer.html",
      "view-profile.html",
      "profile.html",
      "admin.html",
    ];
    const sessionKey = `greeting_shown_${todayString.replace(" ", "_")}`;

    if (
      targetPages.includes(currentPage) &&
      !sessionStorage.getItem(sessionKey)
    ) {
      loadConfetti(() => {
        showGreetingModal(celebrants, todayFestival);
        sessionStorage.setItem(sessionKey, "true");
      });
    }
  }
}

function handleNotifications(celebrants, festival) {
  if (!window.Notification) return;

  if (Notification.permission === "granted") {
    // Birthday Notifications
    celebrants.forEach((person) => {
      new Notification("Birthday Celebration! 🥳", {
        body: `Today is ${person.name}'s birthday! Wishing them a very happy birthday from the whole class and team! 🎉`,
        icon: "assets/logo.jpeg",
      });
    });

    // Festival Notification
    if (festival) {
      new Notification("Festival Greetings! ✨", {
        body: `${festival.wish} Best wishes to you and your family from the whole class and team!`,
        icon: "assets/logo.jpeg",
      });
    }
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        handleNotifications(celebrants, festival);
      }
    });
  }
}

function showGreetingModal(celebrants, festival) {
  // Prevent multiple modals
  if (document.getElementById("greeting-modal")) return;

  let title = "Celebration Time!";
  let message = "";
  let icon = "🎉";
  let themeColor = "#d4af37"; // Gold
  let profileImagesHtml = "";

  if (festival) {
    title = festival.name;
    message = festival.wish;
    icon = festival.wish.split(" ").pop(); // Try to grab last emoji
    if (festival.colors) themeColor = festival.colors[0];
  }

  if (celebrants.length > 0) {
    const names = celebrants.map((p) => p.name).join(" & ");

    // Build Profile Images Section
    profileImagesHtml = `
            <div class="flex justify-center -space-x-6 mb-8 mt-2 animate-profile-pop">
                ${celebrants
                  .map(
                    (p) => `
                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-tr from-gold via-yellow-200 to-gold rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>
                        <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-slate-100">
                            <img src="${p.photo || "https://api.dicebear.com/7.x/initials/svg?seed=" + p.name}" 
                                 class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
                                 alt="${p.name}"
                                 onerror="this.src='https://api.dicebear.com/7.x/initials/svg?seed=${p.name}'">
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `;

    if (festival) {
      message += `<br><br>And a very <span style="color: #d4af37; font-weight: 800;">Happy Birthday</span> to ${names}! 🎂`;
    } else {
      title = "Birthday Wishes!";
      message = `Wishing a marvelous birthday to <br><span style="text-shadow: 0 0 10px rgba(212,175,55,0.3); font-size: 1.25em;">${names}</span><br> from the whole class and team! Stay blessed! 🎂✨`;
      icon = "🎈";
    }
  }

  const modal = document.createElement("div");
  modal.id = "greeting-modal";
  modal.className =
    "fixed inset-0 z-[1000] flex items-center justify-center p-4 antialiased overflow-hidden";
  modal.innerHTML = `
        <div id="greeting-backdrop" class="absolute inset-0 bg-slate-950/80 backdrop-blur-md opacity-0 transition-opacity duration-500"></div>
        <div id="greeting-card" class="relative bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] max-w-lg w-full p-10 text-center scale-90 opacity-0 transform transition-all duration-500 border border-slate-100 overflow-visible">
            <!-- Decorative Header -->
            <div class="absolute top-0 left-0 w-full h-3 rounded-t-[2.5rem]" style="background: ${themeColor}"></div>
            
            ${
              profileImagesHtml
                ? profileImagesHtml
                : `
                <div class="mb-8 inline-block p-6 bg-slate-50 rounded-3xl shadow-inner relative">
                    <span class="text-6xl animate-bounce inline-block">${icon}</span>
                </div>
            `
            }

            <h2 class="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">${title}</h2>
            
            <div class="w-16 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8"></div>

            <p class="text-xl md:text-2xl text-slate-600 font-serif italic leading-relaxed mb-10 px-4">
                ${message}
            </p>

            <button id="close-greeting" class="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all text-lg tracking-widest uppercase">
                Celebrate & Continue
            </button>
        </div>

        <style>
            @keyframes float-modal {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes profile-pop {
                0% { transform: scale(0.5); opacity: 0; }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); opacity: 1; }
            }
            .animate-profile-pop {
                animation: profile-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
            #greeting-card.show {
                animation: float-modal 4s ease-in-out infinite;
            }
        </style>
    `;

  document.body.appendChild(modal);

  // Initial Confetti Burst
  fireConfetti();

  // Show animations
  setTimeout(() => {
    document
      .getElementById("greeting-backdrop")
      .classList.replace("opacity-0", "opacity-100");
    const card = document.getElementById("greeting-card");
    card.classList.replace("scale-90", "scale-100");
    card.classList.replace("opacity-0", "opacity-100");
    card.classList.add("show");
  }, 10);

  // Close Logic
  document.getElementById("close-greeting").addEventListener("click", () => {
    const card = document.getElementById("greeting-card");
    card.classList.replace("scale-100", "scale-90");
    card.classList.replace("opacity-100", "opacity-0");
    document
      .getElementById("greeting-backdrop")
      .classList.replace("opacity-100", "opacity-0");
    setTimeout(() => modal.remove(), 500);
  });
}

function fireConfetti() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1100 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    );
  }, 250);
}

// Run check on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkEvents);
} else {
  checkEvents();
}
