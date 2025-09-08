// ✅ Donation type selector
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".donation-type");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

/**
 * 🌍 Language toggle function
 */
function setLanguage(lang) {
  const content = {
    en: {
      headline: "We’re changing the world.",
      subtext: "No matter the industry, we’re breaking down barriers that hold women back.",
      mission: "Haymimovement.org is ready to keep girls learning during and after the crisis."
    },
    am: {
      headline: "እኛ ዓለምን እንቀየራለን።",
      subtext: "በማንኛውም ኢንዱስትሪ ውስጥ ሴቶችን የሚያወርዱ እንቅስቃሴዎችን እንደመለስን።",
      mission: "Haymimovement.org በአሁኑና በኋላ ወቅት ልጆችን እንዲቀጥሉ ተዘጋጅቷል።"
    }
  };

  document.querySelector(".hero-text h1").textContent = content[lang].headline;
  document.querySelector(".hero-text p").textContent = content[lang].subtext;
  document.querySelector(".donation-form p:nth-of-type(2)").textContent = content[lang].mission;
}
