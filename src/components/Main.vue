<template>
  <div
    class="shadow-xl max-w-screen-m4 rounded-md font-manrope px-4 m2:px-6 m2:pt-10 m3:px-8 m4:px-4 pt-8 bg-Neut-Dark-Grayish-Blue grid place-items-center"
  >
    <p class="text-Prim-Neon-Green text-[10px] tracking-[3px] mb-6">
      ADVICE #{{ id }}
    </p>
    <p class="text-center text-xl text-Prim-Light-Cyan mb-4 m2:mb-5 arb:px-8">
      {{ advice }}
    </p>
    <picture class="arb:px-6">
      <source
        srcset="../assets/images/pattern-divider-mobile.svg"
        media="(max-width=480px)"
      />
      <source
        srcset="../assets/images/pattern-divider-desktop.svg"
        media="(max-width=2000px)"
      />
      <img
        alt="divider"
        srcset="../assets/images/pattern-divider-desktop.svg"
      />
    </picture>

    <button
      @click="newAdvice"
      class="hover:shadow-Prim-Neon-Green hover:shadow-new transition-all relative top-[25px] arb:p-4 z-20 bg-Prim-Neon-Green w-[50px] h-[50px] grid rounded-[25px] place-items-center"
    >
      <img src="../assets/images/icon-dice.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      advice:
        " It is easy to sit up and take notice, what's difficult is gettng up and taking action.",
      id: 117,
    };
  },
  methods: {
    async newAdvice() {
      let res = await fetch("https://api.adviceslip.com/advice");
      let data = await res.json();
      let advices = data.slip;
      this.advice = advices.advice;
      this.id = advices.id;
      console.log("Clicked");
    },
  },
};
</script>
