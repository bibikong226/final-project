// 👉 dynamic-text 있는 경우에만 실행하게 조건 추가
const dynamicText = document.querySelector('#dynamic-text span');  

if (dynamicText) {
  const messages = [
    { text: "👂 Grounding in user research and market insights", color: "#9b84f8" },
    { text: "👀 Capturing trends and emerging technologies", color: "#6ee7b7" },
    { text: "❤️ Designing with empathy to resonate with users", color: "#ff6eac" },
    { text: "🧠 Merging creativity with business strategy", color: "#fbbf24" },
    { text: "✋ Crafting aesthetic and accessible designs", color: "#60a5fa" }
  ];

  let currentIndex = 0;

  function cycleText() {
    dynamicText.style.opacity = 0;

    setTimeout(() => {
      dynamicText.textContent = messages[currentIndex].text;
      dynamicText.style.color = messages[currentIndex].color;
      dynamicText.style.opacity = 1;

      currentIndex = (currentIndex + 1) % messages.length;
    }, 300);
  }

  cycleText();
  setInterval(cycleText, 2500);
}

// 👉 IntersectionObserver는 항상 실행되게 유지
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200);  // 🔥 순차적으로 200ms 간격
      }
    });
  });
  
  document.querySelectorAll('.about-section').forEach(section => {
    observer.observe(section);
  });
  
