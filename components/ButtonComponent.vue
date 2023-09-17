<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.3rem;
  color: var(--white);
  background-color: var(--very-dark-cyan);
  font-size: 1.2rem;
  transition: all 0.5s;
  cursor: pointer;
}

button:hover {
  color: var(--very-dark-cyan);
  background-color: var(--strong-cyan);
}
</style>
