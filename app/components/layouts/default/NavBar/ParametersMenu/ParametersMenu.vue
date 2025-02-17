<template>
  <div id="parameters-menu">
    <PrimeVueButton
      :aria-label="$t('components.ParametersMenu.parameters')"
      class="!p-2"
      severity="secondary"
      type="button"
      @click.prevent="onClickFromParametersButton"
    >
      <template #icon>
        <FontAwesomeIcon
          icon="gear"
        />
      </template>
    </PrimeVueButton>

    <PrimeVueMenu
      id="overlay-menu"
      ref="parametersMenu"
      :aria-label="$t('components.ParametersMenu.parametersMenu')"
      :model="parametersMenuItems"
      popup
    >
      <template #itemicon="{ item }">
        <FontAwesomeIcon :icon="item.icon as string"/>
      </template>
    </PrimeVueMenu>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { storeToRefs } from "pinia";
import type Menu from "primevue/menu";
import type { MenuItem } from "primevue/menuitem";
import { ref } from "vue";

import { usePrimeVueToasts } from "~/composables/prime-vue/usePrimeVueToasts";
import { useGameStore } from "~/stores/game/useGameStore";

const gameStore = useGameStore();
const { cancelGame: cancelGameFromStore } = gameStore;
const { game } = storeToRefs(gameStore);
const { t } = useI18n();
const { addSuccessToast } = usePrimeVueToasts();

const gameMenuItems = computed<MenuItem>(() => ({
  visible: !!game.value._id,
  label: t("components.ParametersMenu.game"),
  items: [
    {
      label: t("components.ParametersMenu.cancelGame"),
      icon: "ban",
      disabled: game.value.status !== "playing",
      command: (): void => {
        cancelGame();
      },
    },
  ],
}));

const parametersMenuItems = computed<MenuItem[]>(() => [
  gameMenuItems.value,
  {
    label: t("components.ParametersMenu.backToHome"),
    icon: "sign-out",
    arialLabel: t("components.ParametersMenu.backToHome"),
    command(): void {
      void navigateTo("/");
    },
  },
]);

const parametersMenu = ref<InstanceType<typeof Menu> | null>(null);

function onClickFromParametersButton(event: MouseEvent): void {
  if (!parametersMenu.value) {
    throw createError("Parameters Menu is not initialized");
  }
  parametersMenu.value.toggle(event);
}

function cancelGame(): void {
  void cancelGameFromStore();
  addSuccessToast({ summary: t("components.ParametersMenu.gameCanceled") });
}
</script>