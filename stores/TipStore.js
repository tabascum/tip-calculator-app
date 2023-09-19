// store/tipStore.js
import { defineStore } from "pinia";

export const useTipStore = defineStore("tip", {
  state: () => ({
    billTotal: null,
    customTip: null,
    numberOfPeople: null,
    tipAmountPerson: 0,
    totalPerson: 0,
  }),
  actions: {
    setBillTotal(value) {
      this.billTotal = Number(value);
    },
    setCustomTip(value) {
      this.customTip = Number(value);
    },
    setNumberOfPeople(value) {
      this.numberOfPeople = Number(value);
    },
  },
  getters: {
    tipAmountPerPerson(state) {
      const tipAmount =
        state.customTip > 0
          ? (state.billTotal * state.customTip) / 100
          : (state.billTotal * this.tipPercentages[state.customTip]) / 100;

      return tipAmount / state.numberOfPeople;
    },

    totalPerPerson(state) {
      const tipAmount =
        state.customTip > 0
          ? (state.billTotal * state.customTip) / 100
          : (state.billTotal * this.tipPercentages[state.customTip]) / 100;

      return (
        state.billTotal / state.numberOfPeople +
        tipAmount / state.numberOfPeople
      );
    },
    tipPercentages() {
      return [5, 10, 15, 25, 50];
    },
  },
});
