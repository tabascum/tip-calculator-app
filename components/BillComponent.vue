<template>
  <section class="bill-container">
    <article>
      <div class="content-container">
        <div class="input-container">
          <p for="bill-total">Bill</p>
          <input type="text" name="bill-total" />
        </div>

        <div class="buttons-container">
          <p>Select tip %</p>
          <div class="buttons">
            <ButtonComponent class="button-5">5%</ButtonComponent>
            <ButtonComponent class="button-10">10%</ButtonComponent>
            <ButtonComponent class="button-15">15%</ButtonComponent>
            <ButtonComponent class="button-25">25%</ButtonComponent>
            <ButtonComponent class="button-50">50%</ButtonComponent>
            <input class="custom" type="text" placeholder="Custom" />
          </div>
        </div>

        <div class="input-container">
          <p for="people-total">Number of People</p>
          <input type="text" name="people-total" />
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.bill-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: 35vw;
  padding: 1rem;
  color: var(--dark-grayish-cyan);
}

article {
  height: 100%;
  justify-content: space-between;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.content-container {
  height: 100%;
  display: flex;
  padding-inline: 1rem;
  flex-direction: column;
  justify-content: space-between;
}

.buttons {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.8rem 0.8rem;
  grid-template-areas:
    "button-5 button-10 button-15"
    "button-25 button-50 custom";
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
  background-color: var(--light-grayish-cyan);
  border-radius: 0.3rem;
  border: none;
  width: 100%;
}
</style>
