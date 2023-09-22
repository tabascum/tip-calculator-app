<template>
  <section class="tip-container">
    <article class="tip-wrapper">
      <div class="tip-content">
        <div class="text">
          <p>Tip Amount</p>
          <p><small>/ per person</small></p>
        </div>
        <p class="total">${{ resultTipStore.tipAmountPerPerson }}</p>
      </div>
      <div class="tip-content">
        <div class="text">
          <p>Total</p>
          <p><small>/ per person</small></p>
        </div>
        <p class="total">${{ resultTipStore.totalPerPerson }}</p>
      </div>
    </article>
    <button class="reset-button" @click="resetFields">RESET</button>
  </section>
</template>

<script setup>
import { useTipStore } from "~/stores/TipStore";

const resultTipStore = useTipStore();

const resetFields = () => {
  resultTipStore.setBillTotal(0);
  resultTipStore.setCustomTip(0);
  resultTipStore.setNumberOfPeople(0);
};
</script>

<style scoped>
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

.tip-wrapper {
  display: inherit;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.tip-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total {
  font-size: 2rem;
  color: var(--strong-cyan);
}

.reset-button {
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  border: none;
  opacity: 0.3;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: var(--strong-cyan);
  transition: all 0.5s;
}

.reset-button:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .tip-container {
    width: 100%;
  }

  .tip-wrapper {
    gap: 1rem;
    margin-block-end: 1.5rem;
  }
}
</style>
~/assets/images/stores/TipStore
