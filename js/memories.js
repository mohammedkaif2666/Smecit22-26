import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. CONFIGURATION
const firebaseConfig = {
  apiKey: [0x48, 0x50, 0x81, 0x68, 0x5a, 0x80, 0x4a, 0x40, 0x3d, 0x7e, 0x7f, 0x5c, 0x7e, 0x5c, 0x4c, 0x69, 0x7d, 0x7f, 0x37, 0x6f, 0x54, 0x6e, 0x78, 0x6c, 0x58, 0x4a, 0x5d, 0x68, 0x49, 0x73, 0x78, 0x60, 0x37, 0x51, 0x60, 0x7d, 0x75, 0x3c, 0x6e].map(x => String.fromCharCode(x - 7)).join(''),
  authDomain: "classof2025-4dcad.firebaseapp.com",
  projectId: "classof2025-4dcad",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. DOM ELEMENTS
const galleryContainer = document.getElementById("gallery-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightbox-media-container");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxUploader = document.getElementById("lightbox-uploader");
const closeBtn = document.getElementById("lightbox-close");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function escapeHTML(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ======================================================
// 📂 DATA MANAGEMENT
// ======================================================

// 1. LOCAL MEMORIES (Your predefined files)
const localMemories = [
  {
    type: "image",
    url: "assets/memories/pic1.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic2.jpeg",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/memories/video1.mp4",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic3.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic4.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic5.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic6.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic7.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic8.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic9.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic11.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic12.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic13.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic14.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic15.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic17.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic18.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic19.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic20.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic21.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic22.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic23.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic24.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic25.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic26.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic27.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic28.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic29.jpeg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/memories/pic30.jpeg",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250927-WA0012.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0001.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0002.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0003.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0004.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0005.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0006.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0007.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0008.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0009.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0010.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0011.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0012.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0013.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0014.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0015.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0016.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0017.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0018.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0019.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0020.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0021.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0022.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0023.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0024.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0025.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0026.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0027.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0028.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0029.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0030.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0031.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0032.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0033.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0034.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0035.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0036.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0037.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0038.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0039.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0040.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0041.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0042.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0043.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0044.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0045.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0046.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0047.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0048.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0049.mp4",
    uploader: "Admin",
  },
  {
    type: "video",
    url: "assets/traditional day 2024 IT4C/VID-20250928-WA0050.mp4",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0020.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0019.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0018.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0017.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0016.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0015.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250930-WA0014.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250929-WA0017.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250929-WA0016.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250929-WA0013.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250929-WA0012.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250929-WA0011.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0116.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0114.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0113.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0017.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0016.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0015.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0014.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0013.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0012.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0011.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0010.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0009.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0008.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0007.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0006.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0005.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0004.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0003.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0002.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250928-WA0001.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250927-WA0017.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250927-WA0016.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250927-WA0013.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250927-WA0011.jpg",
    uploader: "Admin",
  },
  {
    type: "image",
    url: "assets/traditional day 2024 IT4C/IMG-20250927-WA0010.jpg",
    uploader: "Admin",
  },

  // ... Add your 15-20 items here ...
];

// Global Arrays to manage navigation
let allMemories = []; // Holds Local + Cloud
let currentFiltered = []; // Holds currently visible items (e.g., only videos)
let currentIndex = 0; // Tracks where we are in the gallery

// ======================================================
// 🚀 LOAD & RENDER LOGIC
// ======================================================

async function loadMemories() {
  allMemories = [...localMemories]; // Start with local

  try {
    const q = query(
      collection(db, "class_memories"),
      orderBy("timestamp", "desc"),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      allMemories.push({
        type: data.type,
        url: data.type === "image" ? data.image : data.url,
        caption: data.caption,
        uploader: data.uploader,
        timestamp: data.timestamp,
      });
    });
  } catch (error) {
    console.error("Error loading cloud memories:", error);
  }
  // Default: Show All
  filterMemories("all");
}
// Filter Logic
function filterMemories(filterType) {
  if (filterType === "all") {
    currentFiltered = allMemories;
  } else {
    currentFiltered = allMemories.filter((m) => m.type === filterType);
  }
  renderGallery();
}

let renderedCount = 0;
const BATCH_SIZE = 15;
let observer = null;

// Render the Grid
function renderGallery() {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = "";
  renderedCount = 0;

  if (currentFiltered.length === 0) {
    galleryContainer.innerHTML =
      '<p class="text-center text-gray-500 col-span-full">No memories found in this category.</p>';
    return;
  }

  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMoreItems();
    }
  }, { rootMargin: '500px' });

  loadMoreItems();
}

function loadMoreItems() {
  const triggerDiv = document.getElementById("scroll-trigger");
  if (triggerDiv) {
    galleryContainer.removeChild(triggerDiv);
  }

  const end = Math.min(renderedCount + BATCH_SIZE, currentFiltered.length);
  const frag = document.createDocumentFragment();

  for (let i = renderedCount; i < end; i++) {
    const item = createGridItem(currentFiltered[i], i);
    frag.appendChild(item);
  }

  galleryContainer.appendChild(frag);
  renderedCount = end;

  if (renderedCount < currentFiltered.length) {
    const newTrigger = document.createElement("div");
    newTrigger.id = "scroll-trigger";
    newTrigger.className = "col-span-full h-10 w-full";
    galleryContainer.appendChild(newTrigger);
    observer.observe(newTrigger);
  }

  // Refresh AOS to detect new elements
  setTimeout(() => {
    if (window.AOS) window.AOS.refresh();
  }, 100);
}

// Create HTML for Grid Item
function createGridItem(data, index) {
  const div = document.createElement("div");
  // Added active:scale-95 for tactile click effect
  div.className =
    "masonry-item relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-out cursor-pointer active:scale-95";
  div.onclick = () => openLightbox(index); // Click triggers lightbox

  // Add AOS Animation
  div.setAttribute("data-aos", "fade-up");
  div.setAttribute("data-aos-duration", "800");
  // Stagger delay slightly for a nice flowing effect (reset every 10 items to avoid huge delays)
  div.setAttribute("data-aos-delay", (index % 10) * 50);

  let mediaHTML = "";
  const safeCaption = escapeHTML(data.caption || "Memory");
  const safeUploader = escapeHTML(data.uploader || "Unknown");

  if (data.type === "video") {
    // Check if Local Video or YouTube
    const ytId = getYouTubeID(data.url);
    if (ytId) {
      // YouTube Thumbnail
      mediaHTML = `
                <div class="relative w-full">
                    <img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-red-600 text-white p-2 rounded-full shadow-xl"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </div>
                </div>`;
    } else {
      // Local Video (Loop, Muted, Autoplay in Grid)
      mediaHTML = `
                <video class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" preload="metadata" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()">
                    <source src="${data.url}" type="video/mp4">
                </video>
                <div class="absolute top-2 right-2 bg-black/50 p-1 rounded-full"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
            `;
    }
  } else {
    // Image
    mediaHTML = `<img src="${data.url}" loading="lazy" decoding="async" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">`;
  }

  div.innerHTML = `
        ${mediaHTML}
        <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="text-sm font-bold text-white truncate drop-shadow-md">${safeCaption}</p>
            <p class="text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">By ${safeUploader}</p>
        </div>
    `;
  return div;
}

// ======================================================
// 🎥 LIGHTBOX LOGIC
// ======================================================

function openLightbox(index) {
  if (!lightbox) return;
  currentIndex = index;
  updateLightboxContent();
  lightbox.classList.add("active");
  document.body.classList.add("no-scroll"); // Stop background scrolling
}

function closeLightbox() {
  if (!lightbox || !lightboxMedia) return;
  lightbox.classList.remove("active");
  document.body.classList.remove("no-scroll");
  lightboxMedia.innerHTML = ""; // Stop video playback
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentFiltered.length; // Loop to start
  updateLightboxContent();
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentFiltered.length) % currentFiltered.length; // Loop to end
  updateLightboxContent();
}

function updateLightboxContent() {
  if (!lightboxMedia || !lightboxCaption || !lightboxUploader) return;
  const data = currentFiltered[currentIndex];
  if (!data) return;

  // Clear previous
  lightboxMedia.innerHTML = "";

  // Set Text
  lightboxCaption.textContent = data.caption || "Memory";
  lightboxUploader.textContent = `By ${data.uploader || "Unknown"}`;

  // Render Media
  if (data.type === "video") {
    const ytId = getYouTubeID(data.url);
    if (ytId) {
      // YouTube (Autoplay enable)
      lightboxMedia.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0" class="w-full h-full aspect-video rounded-lg shadow-2xl" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
    } else {
      // Local Video (Autoplay, With Sound)
      lightboxMedia.innerHTML = `
                <video controls autoplay class="max-w-full max-h-[80vh] rounded-lg shadow-2xl outline-none">
                    <source src="${data.url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
    }
  } else {
    // Image
    lightboxMedia.innerHTML = `<img src="${data.url}" class="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain">`;
  }
}

// ======================================================
// 🎮 CONTROLS & EVENTS
// ======================================================

// Filter Buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // UI Toggle
    filterBtns.forEach((b) => {
      b.classList.remove("bg-white", "text-black");
      b.classList.add("bg-gray-800", "text-gray-300");
    });
    btn.classList.remove("bg-gray-800", "text-gray-300");
    btn.classList.add("bg-white", "text-black");

    // Logic
    filterMemories(btn.dataset.filter);
  });
});

// Lightbox Controls
closeBtn?.addEventListener("click", closeLightbox);
nextBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  showNext();
});
prevBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  showPrev();
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// Helper
function getYouTubeID(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Start
loadMemories();
