// store/tipStore.js
import { defineStore } from "pinia";

export const useTipStore = defineStore("tip", {
  state: () => ({
    billTotal: "",
    customTip: "",
    numberOfPeople: "",
    tipAmountPerPerson: 0,
    totalPerPerson: 0,
  }),
  actions: {
    setBillTotal(value) {
      this.billTotal = value;
    },
    setCustomTip(value) {
      this.customTip = value;
    },
    setNumberOfPeople(value) {
      this.numberOfPeople = value;
    },
    getters: {
      totalPerPerson() {
        const tipAmount =
          this.customTip > 0
            ? (this.billTotal * this.customTip) / 100
            : (this.billTotal * this.tipPercentages[this.customTip]) / 100;

        return (this.billTotal + tipAmount) / this.numberOfPeople;
      },
      tipAmountPerPerson() {
        const tipAmount =
          this.customTip > 0
            ? (this.billTotal * this.customTip) / 100
            : (this.billTotal * this.tipPercentages[this.customTip]) / 100;

        return tipAmount / this.numberOfPeople;
      },
      tipPercentages() {
        return [5, 10, 15, 25, 50];
      },
    },
  },
});
