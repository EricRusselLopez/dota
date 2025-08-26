(function () {
  const radiantNames = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"];
  const direNames = ["Enemy 1", "Enemy 2", "Enemy 3", "Enemy 4", "Enemy 5"];

  function setNames(containerId, names) {
    const container = document.getElementById(containerId);
    const slots = container.querySelectorAll(".hero-slot .hero-name");
    names.forEach((name, i) => {
      if (slots[i]) slots[i].textContent = name;
    });
  }

  setNames("radiant-picks", radiantNames);
  setNames("dire-picks", direNames);
})();
