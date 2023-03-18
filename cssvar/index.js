const inputs = document.querySelectorAll("input");

// console.log(inputs);

function handleChange(e) {
  const units = this.dataset.sizing || "";

  console.log(`--${this.name}: ${this.value + units}`);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + units
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", handleChange);
  input.addEventListener("mousemove", handleChange);
});
