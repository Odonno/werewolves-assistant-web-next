<template>
  <button
    id="mute-button"
    v-p-tooltip.bottom="tooltipText"
    :aria-label="tooltipText"
    type="button"
    @click.prevent="onClickFromMuteButton"
  >
    <VueLottie
      id="mute-button-lottie"
      ref="soundLottie"
      :animation-data="soundLottieJson"
      :auto-play="false"
      :height="size"
      :loop="false"
      :speed="2"
      :width="size"
    />
  </button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import type { AnimationSegment, Vue3Lottie } from "vue3-lottie";

import soundLottieJson from "~/assets/lottie/sound.json";
import { useAudioStore } from "~/stores/audio/useAudioStore";

const audioStore = useAudioStore();
const { isMuted } = storeToRefs(audioStore);
const { toggleMute } = audioStore;

const { t } = useI18n();

const size = 25;

const soundLottie = ref<InstanceType<typeof Vue3Lottie> | null>(null);

const tooltipText = computed<string>(() => (isMuted.value ? t("components.MuteButton.unmute") : t("components.MuteButton.mute")));

function animateSoundLottie(animationDirection: "reverse" | "forward"): void {
  if (!soundLottie.value) {
    throw createError("Sound Lottie is not initialized");
  }
  const firstMuteSegmentFrame = 0;
  const lastMuteSegmentFrame = 30;
  const firstUnmuteSegmentFrame = 60;
  const lastUnmuteSegmentFrame = 90;
  const segment: AnimationSegment = animationDirection === "reverse" ? [firstUnmuteSegmentFrame, lastUnmuteSegmentFrame] : [firstMuteSegmentFrame, lastMuteSegmentFrame];
  soundLottie.value.setDirection(animationDirection);
  soundLottie.value.playSegments([segment], true);
}

function onClickFromMuteButton(): void {
  const animationDirection = isMuted.value ? "reverse" : "forward";
  animateSoundLottie(animationDirection);
  toggleMute();
}

onMounted(() => {
  if (isMuted.value) {
    const animationDelay = 10;
    setTimeout(() => {
      animateSoundLottie("forward");
    }, animationDelay);
  }
});
</script>