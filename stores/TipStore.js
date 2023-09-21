// store/tipStore.js
import { defineStore } from "pinia";

export const useTipStore = defineStore("tip", {
  state: () => ({
    billTotal: null,
    customTip: null,
    numberOfPeople: null,
    tipAmountPerPerson: null,
    totalPerPerson: null,
  }),
  actions: {
    setBillTotal(value) {
      this.billTotal = parseFloat(value);
    },
    setCustomTip(value) {
      this.customTip = parseFloat(value);
    },
    setNumberOfPeople(value) {
      this.numberOfPeople = parseFloat(value);
    },
    calculateTip() {
      const tipAmount =
        this.customTip > 0
          ? (this.billTotal * this.customTip) / 100
          : this.billTotal * 0.1; // Use 10% como padrão

      this.tipAmountPerPerson = tipAmount / this.numberOfPeople;
      this.totalPerPerson = (this.billTotal + tipAmount) / this.numberOfPeople;
    },
  },
  getters: {
    tipPercentages() {
      return [5, 10, 15, 25, 50];
    },
  },
});
