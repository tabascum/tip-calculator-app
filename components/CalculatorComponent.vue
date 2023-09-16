<template>
  <section class="calculator-container">
    <BillComponent />
    <TipComponent />
  </section>
</template>

<style scoped>
.calculator-container {
  height: 50vh;
  width: min(840px, 100%);
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 0.2rem 0.2rem 0.7rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .calculator-container {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 1rem;
  }
}
</style>
