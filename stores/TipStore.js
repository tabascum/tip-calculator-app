import { defineStore } from "pinia";

export const useTipStore = defineStore("tip", {
  state: () => ({
    billTotal: null,
    customTip: null,
    numberOfPeople: null,
    tipAmountPerPerson: "0.00",
    totalPerPerson: "0.00",
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
    calculateTip() {
      if (this.billTotal > 0 && this.numberOfPeople > 0) {
        const tipAmount =
          this.customTip > 0
            ? (this.billTotal * this.customTip) / 100
            : this.billTotal * 0.1;

        this.tipAmountPerPerson = (tipAmount / this.numberOfPeople).toFixed(2);
        this.totalPerPerson = (
          this.billTotal / this.numberOfPeople +
          tipAmount / this.numberOfPeople
        ).toFixed(2);
      } else {
        this.tipAmountPerPerson = "0.00";
        this.totalPerPerson = "0.00";
      }
    },
  },
  getters: {
    tipPercentages() {
      return [5, 10, 15, 25, 50];
    },
  },
});
