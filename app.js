async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  const days = Array.from(document.querySelectorAll(".bottom .bars span"));

  for (let i = 0; i < data.length; i++) {
    days.forEach((day) => {
      if (day.getAttribute("data-day") === data[i].day) {
        day.setAttribute("data-amount", `${data[i].amount} $`);
        day.style.height = `${data[i].amount + 20}px`;
      } else {
        return false;
      }
      day.onclick = () => {
        day.classList.toggle("current-day");
      };
    });
  }
}
fetchData();
