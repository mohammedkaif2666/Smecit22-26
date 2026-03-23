import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSy" + "C96wxUwUEb" + "vx0hMgqeQC" + "VaBlqY0JYvn5g",
    authDomain: "classof2025-4dcad.firebaseapp.com",
    projectId: "classof2025-4dcad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 2. ALLOW LIST (Same as admin.html - Normalized to lowercase)
const rawAllowedEmails = [
    "mohammedismail2600@gmail.com", "amanchijeevitha@gmail.com", "linscore777@gmail.com", "adepudivya27@gmail.com", "akitivarunreddy441@gmail.com", "alisamir8686@gmail.com",
    "bhukyapraveen044@gmail.com", "bijjarapushivapranav4760@gmail.com", "charanpaul156@gmail.com", "harshavardhanchekuri6333@gmail.com",
    "Varshita195@gmail.com", "ajay.devanaboyina26@gmail.com", "anushaedula01@gmail.com", "anushagaddam381@gmail.com", "rockygaddam0@gmail.com",
    "snehithagollagadda@gmail.com", "Chandu.gundavarapu@gmail.com", "juniaspaul222@gmail.com", "janampallysunilkumar@gmail.com", "ankithajadhav2107@gmail.com",
    "tanushk48@gmail.com", "saimanikallepaly11@gmail.com", "abhinavkaparaboina@gmail.com", "ramcharanreddykoli@gmail.com", "aswithakota@gmail.com",
    "jathinkothapally@gmail.com", "gouthamreddy7272@gmail.com", "yogendergoudm@gmail.com", "suryatejreddymamidi@gmail.com", "tarunrushikeshmanne@gmail.com",
    "vasuyadavmanuka@gmail.com", "mahathimaya54@gmail.com", "rishithamekala27@gmail.com", "wasay5127796@gmail.com", "mohammedkaif2666@gmail.com",
    "mohammadyousuf31672@gmail.com", "asifmohd8260@gmail.com", "jayasreemotati3@gmail.com", "divyamuthyala1512@gmail.com", "anunayrdy002@gmail.com",
    "harinireddy3719@gmail.com", "pannelasucharitha@gmail.com", "vaishnaviparshi01@gmail.com", "parthachaudhury15@gmail.com", "parthiv08goud@gmail.com",
    "rangaabhignagoud06@gmail.com", "arvindgoudrangu@gmail.com", "rikkalanikhithareddyrikkala@gmail.com", "pranavisambari@gmail.com", "asrath.smd@gmail.com",
    "sidha78@gmail.com", "sumayyatarannum810@gmail.com", "sunkojusathwin06@gmail.com", "tanoorkiran@gmail.com", "tippareddyshyam@gmail.com",
    "uthamprasanna@gmail.com", "vagvalaeshwararya@gmail.com", "shruthivittoli@gmail.com", "manishvuppala070@gmail.com", "bhavaneeth60@gmail.com",
    "saideepyellanki9@gmail.com", "yenugusanjana@gmail.com", "sahithimendu09@gmail.com", "sathwikshivannagari@gmail.com", "nenavathvenkat54@gmail.com",
    "ranjithemmadi9@gmail.com", "mangalishirisha10@gmail.com", "suchithrameesa@gmail.com", "poojameasa@gmail.com", "anjikumar1219@gmail.com"
];
const allowedEmails = rawAllowedEmails.map((email) => email.toLowerCase());

let currentUser = null;
let lastMeetupCount = null;
let chatUnsubscribe = null;
let meetupsUnsubscribe = null;

function escapeHTML(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function cleanupListeners() {
    if (typeof chatUnsubscribe === "function") {
        chatUnsubscribe();
        chatUnsubscribe = null;
    }
    if (typeof meetupsUnsubscribe === "function") {
        meetupsUnsubscribe();
        meetupsUnsubscribe = null;
    }
}

function setCommunityVisibility(isAuthed) {
    document.getElementById("auth-overlay")?.classList.toggle("hidden", isAuthed);
    document.getElementById("community-main")?.classList.toggle("hidden", !isAuthed);
}

// --- AUTH MONITORING ---
onAuthStateChanged(auth, (user) => {
    console.log("Auth State Changed:", user ? user.email : "No User");

    if (user && allowedEmails.includes(user.email.toLowerCase())) {
        cleanupListeners();
        currentUser = user;
        setCommunityVisibility(true);
        initChat();
        initMeetups();
        return;
    }

    cleanupListeners();
    currentUser = null;
    lastMeetupCount = null;
    setCommunityVisibility(false);

    if (user) {
        console.warn("Access Denied for:", user.email);
        alert("Access Denied: Your email is not in the allowed list.");
        signOut(auth);
    }
});

// --- CHAT LOGIC ---
function initChat() {
    console.log("Initializing Chat...");
    const q = query(collection(db, "community_chat"), orderBy("timestamp", "desc"), limit(50));
    const container = document.getElementById("chat-messages");
    if (!container) {
        console.error("CRITICAL: #chat-messages not found.");
        return;
    }

    chatUnsubscribe = onSnapshot(q, (snapshot) => {
        container.innerHTML = "";
        const messages = [];
        snapshot.forEach((doc) => messages.push(doc.data()));
        const currentEmail = currentUser?.email ? currentUser.email.toLowerCase() : "";

        messages.reverse().forEach((msg) => {
            const msgEmail = typeof msg.email === "string" ? msg.email.toLowerCase() : "";
            if (!msgEmail) return;

            const isMe = msgEmail === currentEmail;
            const messageDiv = document.createElement("div");
            messageDiv.className = `flex flex-col ${isMe ? "items-end" : "items-start"} mb-4 w-full`;

            const msgName = typeof msg.name === "string" && msg.name.trim() ? msg.name.trim() : "Anonymous";
            const senderTag = msgEmail.includes("@") ? msgEmail.split("@")[0] : msgEmail;
            const detailText = escapeHTML(isMe ? "You" : `${msgName} (${senderTag})`);
            const safeText = escapeHTML(typeof msg.text === "string" ? msg.text : "").replace(/\n/g, "<br>");

            messageDiv.innerHTML = `
                <div class="flex items-center gap-2 mb-1 px-2">
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">${detailText}</span>
                </div>
                <div class="px-5 py-3 rounded-2xl text-sm font-medium shadow-sm max-w-[85%] break-words ${isMe ? "bg-slate-900 text-white rounded-tr-none ml-12" : "bg-white text-slate-800 border border-slate-100 rounded-tl-none mr-12"}">
                    ${safeText}
                </div>
            `;
            container.appendChild(messageDiv);
        });

        container.scrollTop = container.scrollHeight;
    }, (error) => {
        console.error("Chat Snapshot Error:", error);
    });

    const input = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    if (!input || !sendBtn) {
        console.error("CRITICAL: chat input/send button not found.");
        return;
    }

    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        if (text.length > 500) {
            alert("Message is too long. Please keep it under 500 characters.");
            return;
        }
        if (!currentUser) {
            alert("You must be logged in to send messages.");
            return;
        }

        const originalText = input.value;
        input.value = "";
        console.log("Sending message as:", currentUser.email, text);

        try {
            await addDoc(collection(db, "community_chat"), {
                text,
                name: currentUser.displayName || "Anonymous",
                email: currentUser.email,
                photo: currentUser.photoURL,
                timestamp: serverTimestamp()
            });
            console.log("Message sent successfully!");
        } catch (e) {
            console.error("CRITICAL: Firestore send error:", e);
            input.value = originalText;
            alert(`Failed to send message: ${e.message}\n\nPlease check if your Firebase Firestore rules allow writing to the 'community_chat' collection.`);
        }
    }

    // Replace handlers instead of stacking listeners on repeated auth cycles.
    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => {
        if (e.key === "Enter") sendMessage();
    };
}

// --- MEETUPS LOGIC ---
function initMeetups() {
    console.log("Initializing Meetups...");
    const q = query(collection(db, "meetups"), orderBy("timestamp", "desc"));
    const list = document.getElementById("meetups-list");
    if (!list) {
        console.error("CRITICAL: #meetups-list not found.");
        return;
    }

    meetupsUnsubscribe = onSnapshot(q, (snapshot) => {
        console.log("Meetups Snapshot received, size:", snapshot.size);
        list.innerHTML = "";

        const currentCount = snapshot.size;
        if (lastMeetupCount !== null && currentCount > lastMeetupCount) {
            const newDoc = snapshot.docs[0].data();
            const place = typeof newDoc.place === "string" && newDoc.place.trim() ? newDoc.place.trim() : "the selected place";
            showToast(`New Meetup at ${place}!`);
        }
        lastMeetupCount = currentCount;

        if (snapshot.empty) {
            list.innerHTML = `
                <div class="text-center py-10">
                    <p class="text-slate-400 font-serif italic text-sm">No meetups raised yet.</p>
                </div>
            `;
            return;
        }

        snapshot.forEach((doc) => {
            const m = doc.data();
            const place = typeof m.place === "string" && m.place.trim() ? m.place.trim() : "Unknown Place";
            const raisedBy = typeof m.raisedBy === "string" && m.raisedBy.trim() ? m.raisedBy.trim() : "Anonymous";

            let dateStr = "TBD";
            if (m.time) {
                const date = new Date(m.time);
                dateStr = date.toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                });
            }

            const safePlace = escapeHTML(place);
            const safeDate = escapeHTML(dateStr);
            const safeRaisedBy = escapeHTML(raisedBy);
            const safeInitial = escapeHTML((raisedBy.charAt(0) || "U").toUpperCase());

            const item = document.createElement("div");
            item.className = "bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group mb-3";
            item.innerHTML = `
                <div class="flex items-start justify-between mb-3">
                    <div class="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-lg">&#x1F4CD;</div>
                    <span class="text-[10px] font-bold text-gold bg-gold/5 px-2 py-1 rounded-full border border-gold/10">ACTIVE</span>
                </div>
                <h4 class="font-serif font-bold text-slate-900 mb-1">${safePlace}</h4>
                <p class="text-[11px] font-bold text-slate-500 mb-4">${safeDate}</p>
                <div class="flex items-center gap-2 pt-3 border-t border-slate-50">
                    <div class="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold uppercase">${safeInitial}</div>
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">By ${safeRaisedBy}</span>
                </div>
            `;
            list.appendChild(item);
        });
    }, (error) => {
        console.error("Meetups Snapshot Error:", error);
    });

    const formContainer = document.getElementById("meetup-form-container");
    const toggleBtn = document.getElementById("show-meetup-form");
    let formVisible = false;

    if (toggleBtn && formContainer) {
        toggleBtn.addEventListener("click", () => {
            console.log("Toggle Meetup Form clicked, current state:", formVisible);
            formVisible = !formVisible;

            if (formVisible) {
                formContainer.classList.remove("hidden");
                toggleBtn.querySelector("svg")?.classList.add("rotate-45");
            } else {
                formContainer.classList.add("hidden");
                toggleBtn.querySelector("svg")?.classList.remove("rotate-45");
            }
        });
    } else {
        console.error("CRITICAL: #show-meetup-form or #meetup-form-container not found!");
    }

    const submitBtn = document.getElementById("submit-meetup");
    if (submitBtn) {
        submitBtn.addEventListener("click", async () => {
            const timeInput = document.getElementById("meetup-time");
            const placeInput = document.getElementById("meetup-place");
            if (!timeInput || !placeInput) {
                console.error("CRITICAL: Meetup form inputs not found.");
                return;
            }

            const time = timeInput.value;
            const place = placeInput.value.trim();

            if (!time || !place) {
                alert("Please fill in both time and place.");
                return;
            }

            if (!currentUser) {
                alert("You must be logged in.");
                return;
            }

            console.log("Submitting meetup:", { time, place });
            try {
                await addDoc(collection(db, "meetups"), {
                    time,
                    place,
                    raisedBy: currentUser.displayName || "Anonymous",
                    email: currentUser.email,
                    timestamp: serverTimestamp()
                });

                console.log("Meetup broadcasted successfully!");
                timeInput.value = "";
                placeInput.value = "";
                formVisible = false;
                formContainer?.classList.add("hidden");
                toggleBtn?.querySelector("svg")?.classList.remove("rotate-45");
            } catch (e) {
                console.error("Error raising meetup:", e);
                alert(`Error raising meetup: ${e.message}\n\nPlease check if your Firebase Firestore rules allow writing to the 'meetups' collection.`);
            }
        });
    } else {
        console.error("CRITICAL: #submit-meetup button not found!");
    }
}

// --- TOAST NOTIFICATION ---
function showToast(text) {
    const toast = document.getElementById("meetup-toast");
    const toastText = document.getElementById("toast-text");
    if (!toast || !toastText) return;

    toastText.innerText = text;
    toast.classList.remove("translate-y-32");
    toast.classList.add("translate-y-0");

    setTimeout(() => {
        toast.classList.remove("translate-y-0");
        toast.classList.add("translate-y-32");
    }, 5000);
}
