<template>
  <main>
    <img src="./assets/images/logo.svg" alt="" />
    <CalculatorComponent />
  </main>
</template>

<style>
main {
  height: 60vh;
  width: minmax(375px, 1440px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

main img {
  width: 5rem;
}
</style>
