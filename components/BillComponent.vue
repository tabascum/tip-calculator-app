<template>
  <section class="bill-container">
    <article>
      <div class="content-container">
        <div class="input-container">
          <p>Bill</p>
          <span class="dollar-icon"></span>
          <input type="text" name="bill-total" id="bill-total" />
        </div>

        <div class="buttons-container">
          <p>Select tip %</p>
          <div class="buttons">
            <ButtonComponent class="button-5">5%</ButtonComponent>
            <ButtonComponent class="button-10">10%</ButtonComponent>
            <ButtonComponent class="button-15">15%</ButtonComponent>
            <ButtonComponent class="button-25">25%</ButtonComponent>
            <ButtonComponent class="button-50">50%</ButtonComponent>
            <input
              id="custom"
              class="custom"
              type="text"
              placeholder="Custom"
            />
          </div>
        </div>

        <div class="input-container">
          <p>Number of People</p>
          <span class="person-icon"></span>
          <input type="text" name="people-total" id="people-total" />
        </div>
      </div>
    </article>
  </section>
</template>

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

span {
  position: relative;
  height: 1rem;
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
  top: 2.5rem;
  left: 1.2rem;
  transform: translate(-50%, -50%);
}

.person-icon::before {
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  background: url("../assets/images/icon-person.svg") no-repeat;
  top: 2.4rem;
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
  padding: 0.6rem 1rem;
  background-color: var(--very-light-grayish-cyan);
  border-radius: 0.3rem;
  border: none;
  width: 100%;
  color: var(--very-dark-cyan);
  font-size: 1rem;
  direction: ltr;
  text-align: end;
  border: 0.15rem solid transparent;
}

input:focus-visible {
  outline: 0.15rem solid var(--strong-cyan);
}

::placeholder {
  text-align: center;
}
::-webkit-input-placeholder {
  text-align: center;
}
::-moz-placeholder {
  text-align: center;
}
</style>
