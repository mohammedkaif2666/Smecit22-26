document.addEventListener("DOMContentLoaded", () => {
    function escapeHTML(value = "") {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function sanitizeImageSrc(value, fallbackSeed) {
        if (typeof value === "string") {
            const src = value.trim();
            if (/^(data:image\/|https?:\/\/|assets\/)/i.test(src)) {
                return src;
            }
        }
        return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fallbackSeed || "User")}`;
    }

    // 1. GET DATA
    let studentData = null;
    try {
        studentData = JSON.parse(localStorage.getItem("selectedStudent") || "null");
    } catch {
        studentData = null;
    }

    if (!studentData || typeof studentData !== "object") {
        window.location.href = "directory.html";
        return;
    }

    const safeName = typeof studentData.name === "string" && studentData.name.trim() ? studentData.name.trim() : "Unknown Student";

    // 2. FILL IDENTITY (Header)
    document.title = `${safeName} | Class of 2025`;
    document.getElementById("profile-name").textContent = safeName;
    document.getElementById("profile-role").textContent = studentData.role || "Student";
    document.getElementById("profile-quote").textContent = `"${studentData.quote || "Ready for the world."}"`;
    document.getElementById("profile-img").src = sanitizeImageSrc(studentData.photoURL, safeName);

    // 3. RENDER DYNAMIC SECTIONS
    const storyContainer = document.getElementById("profile-story-container");
    if (!storyContainer) return;

    storyContainer.innerHTML = "";

    if (Array.isArray(studentData.customSections) && studentData.customSections.length > 0) {
        studentData.customSections.forEach((sec, index) => {
            const sectionDiv = document.createElement("div");
            sectionDiv.className = "mb-20";
            sectionDiv.setAttribute("data-aos", "fade-up");

            const safeTitle = escapeHTML(sec?.title || `Section ${index + 1}`);
            const rawContent = typeof sec?.content === "string" ? sec.content : "";
            const formattedContent = escapeHTML(rawContent).replace(/\n/g, "<br>");
            const safeImage = sanitizeImageSrc(sec?.image, safeTitle);

            // Only render section image for explicit uploads or URL-based images.
            const shouldShowImage = typeof sec?.image === "string" && sec.image.trim() !== "";
            const imageHTML = shouldShowImage
                ? `
                    <div class="mt-10 mb-6" data-aos="zoom-in" data-aos-delay="100">
                        <img src="${safeImage}" class="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl border-4 border-white ring-1 ring-slate-100 object-cover max-h-[600px] hover:scale-[1.02] transition-transform duration-500">
                    </div>
                `
                : "";

            sectionDiv.innerHTML = `
                <div class="flex items-center gap-6 mb-8 justify-center">
                    <div class="h-px bg-slate-200 w-16 md:w-32"></div>
                    <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-900 uppercase tracking-widest text-center px-4 border-2 border-gold/20 py-2 rounded-full bg-white shadow-soft text-gold">${safeTitle}</h2>
                    <div class="h-px bg-slate-200 w-16 md:w-32"></div>
                </div>
                
                <div class="prose prose-lg text-slate-600 leading-relaxed text-center md:text-left mx-auto max-w-3xl font-medium">
                    <p>${formattedContent}</p>
                </div>
                
                ${imageHTML}
            `;
            storyContainer.appendChild(sectionDiv);
        });

        // Refresh AOS to detect newly added elements
        setTimeout(() => {
            if (window.AOS) window.AOS.refresh();
        }, 100);

    } else {
        storyContainer.innerHTML = `
            <div data-aos="fade-up" class="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                <p class="text-slate-400 font-serif text-xl italic">No detailed story added yet.</p>
                <div class="w-16 h-1 bg-gold mx-auto mt-4 rounded-full opacity-30"></div>
            </div>`;
    }
});
