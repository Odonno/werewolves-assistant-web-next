<template>
  <div
    class="h-full"
    :class="SCROLLBAR_STYLING_CLASSES"
  >
    <NuxtRouteAnnouncer/>

    <NuxtLayout>
      <NuxtPage
        class="h-full md:p-2 p-3"
      />
    </NuxtLayout>

    <PrimeVueToast
      class="!max-w-x-screen-9/10"
      position="bottom-right"
    />

    <NuxtPwaManifest/>
  </div>
</template>

<script lang="ts" setup>
import "reflect-metadata";

import { useAudioStore } from "~/stores/audio/useAudioStore";
import { useRolesStore } from "~/stores/role/useRolesStore";
import { SCROLLBAR_STYLING_CLASSES } from "~/utils/constants/html-classes.constants";

const rolesStore = useRolesStore();

const audioStore = useAudioStore();
const { setHowlerAudioSettingsFromAudioStoreState } = audioStore;

const { t } = useI18n();

defineOgImageComponent("DefaultOgImage");

useHead({
  title: t("shared.werewolvesAssistant"),
  meta: [
    { name: "application-name", content: t("shared.werewolvesAssistant") },
    { name: "creator", content: "Antoine ZANARDI" },
    { name: "description", content: t("components.App.seoDescription") },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "charset", content: "utf-8" },
    { name: "generator", content: "nuxt" },
    { name: "color-scheme", content: "dark" },
  ],
});

void rolesStore.fetchAndSetRoles();
setHowlerAudioSettingsFromAudioStoreState();
</script>