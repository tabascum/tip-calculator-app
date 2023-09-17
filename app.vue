<template>
  <main>
    <img src="./assets/images/logo.svg" alt="" />
    <CalculatorComponent />
  </main>
</template>

<style>
main {
  height: 70vh;
  width: minmax(375px, 1440px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

main img {
  width: 5rem;
}

@media (max-width: 768px) {
  main {
    height: 80vh;
    gap: 2rem;
  }
}
</style>
