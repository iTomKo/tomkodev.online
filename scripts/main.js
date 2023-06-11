document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    document.querySelector(".whoami").onmouseover = event => {
      let iteration = 0;
  
      const interval = setInterval(() => {
        const target = event.target;
  
        if (
          (target.tagName === "H1" && target.id !== "highlight") ||
          (target.tagName === "SPAN" && target.parentNode != null && target.parentNode.tagName === "H1" && target.parentNode.id !== "highlight")
        ) {
          const value = target.dataset.value || "";
          const length = value.length;
  
          target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration || value[index] === "TomKo") {
                return value[index];
              }
  
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
  
          if (iteration >= length) {
            clearInterval(interval);
          }
  
          iteration += 2;
        }
      }, 30);
    };
  });
  