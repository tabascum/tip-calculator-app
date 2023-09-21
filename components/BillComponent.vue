<template>
  <section class="bill-container">
    <article>
      <div class="content-container">
        <div class="input-container">
          <p>Bill</p>
          <span class="dollar-icon"></span>
          <input
            type="text"
            name="bill-total"
            id="bill-total"
            placeholder="0"
            v-model="myTipStore.billTotal"
            @input="setBillTotal"
          />
        </div>

        <div class="buttons-container">
          <p>Select tip %</p>
          <div class="buttons">
            <ButtonComponent
              v-for="percentage in myTipStore.tipPercentages"
              :key="percentage"
              @click="setCustomTip(percentage)"
            >
              {{ percentage }}%
            </ButtonComponent>
            <input
              id="custom"
              class="custom"
              type="text"
              placeholder="Custom"
              v-model="myTipStore.customTip"
              @input="setCustomTip"
            />
          </div>
        </div>

        <div class="input-container">
          <div class="input-container-header">
            <p>Number of People</p>
            <p>Can't be zero</p>
          </div>
          <span class="person-icon"></span>
          <input
            type="text"
            name="people-total"
            id="people-total"
            placeholder="0"
            v-model="myTipStore.numberOfPeople"
            @input="setNumberOfPeople"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useTipStore } from "~/stores/TipStore";

const myTipStore = useTipStore();

const setBillTotal = () => {
  myTipStore.calculateTip();
};

const setCustomTip = (percentage) => {
  myTipStore.setCustomTip(percentage);
  myTipStore.calculateTip();
};

const setNumberOfPeople = () => {
  myTipStore.calculateTip();
};
</script>

<style scoped>
.bill-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 35vw;
  color: var(--dark-grayish-cyan);
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container-header {
  display: flex;
  justify-content: space-between;
}

.input-container-header p:nth-child(2) {
  display: none;
  color: var(--error);
}

span {
  position: relative;
  height: 1.1rem;
  width: 0.8rem;
}

img {
  height: 100%;
  width: 100%;
}

.dollar-icon::before {
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  background: url("../assets/images/icon-dollar.svg") no-repeat;
  top: 2.55rem;
  left: 1.2rem;
  transform: translate(-50%, -50%);
}

.person-icon::before {
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  background: url("../assets/images/icon-person.svg") no-repeat;
  top: 2.55rem;
  left: 1.2rem;
  transform: translate(-50%, -50%);
}

.content-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.buttons-container p {
  margin-block-end: 1rem;
}

.buttons {
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.8rem 0.8rem;
  grid-template-areas:
    "button-5 button-10 button-15"
    "button-25 button-50 custom";
}

@media (max-width: 768px) {
  .bill-container {
    width: 100%;
  }
  .content-container {
    padding: 0.5rem;
  }
  .buttons {
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.8rem 0.8rem;
    grid-template-areas:
      "button-5 button-10"
      "button-15 button-25"
      "button-50 custom";
  }
}

.button-5 {
  grid-area: button-5;
}
.button-10 {
  grid-area: button-10;
}
.button-15 {
  grid-area: button-15;
}
.button-25 {
  grid-area: button-25;
}
.button-50 {
  grid-area: button-50;
}
.custom {
  grid-area: custom;
}

input {
  padding: 0.5rem 1rem;
  background-color: var(--very-light-grayish-cyan);
  border-radius: 0.3rem;
  border: none;
  width: 100%;
  color: var(--very-dark-cyan);
  font-size: 1.2rem;
  direction: ltr;
  text-align: end;
  outline: 0.1rem solid transparent;
}

input:focus-visible {
  outline: 0.1rem solid var(--strong-cyan);
}

input.error {
  outline: 0.1rem solid var(--error);
}

#custom::placeholder {
  text-align: center;
}

::placeholder {
  text-align: end;
}
::-webkit-input-placeholder {
  text-align: end;
}
::-moz-placeholder {
  text-align: end;
}
</style>
~/assets/images/stores/TipStore
