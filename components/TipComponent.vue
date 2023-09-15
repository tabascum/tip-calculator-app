<template>
  <section class="tip-container">
    <div class="tip-content">
      <div class="text">
        <p>Tip Amout</p>
        <p>/ per person</p>
      </div>
      <p class="total">Total</p>
    </div>
    <div class="tip-content">
      <div class="text">
        <p>Tip Amout</p>
        <p>/ per person</p>
      </div>
      <p class="total">Total</p>
    </div>
    <button class="reset-button">RESET</button>
  </section>
</template>

<style>
.tip-container {
  width: 35vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--very-dark-cyan);
  color: var(--very-light-grayish-cyan);
  border-radius: 0.5rem;
  padding: 2rem;
}

.tip-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.reset-button {
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  border: none;
  opacity: 0.3;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--strong-cyan);
  transition: all 0.5s;
}

.reset-button:hover {
  opacity: 1;
}
</style>
