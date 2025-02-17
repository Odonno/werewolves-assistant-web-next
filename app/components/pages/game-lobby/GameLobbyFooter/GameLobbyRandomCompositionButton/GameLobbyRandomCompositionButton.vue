<template>
  <div
    id="game-lobby-random-composition-button-container"
    v-p-tooltip.top="containerTooltip"
  >
    <ClientOnly>
      <template #fallback>
        <PrimeVueProgressSpinner class="!h-8 !w-8"/>
      </template>

      <PrimeVueButton
        class="random-composition-button"
        :disabled="isButtonDisabled"
        :loading="isLoadingGetRandomGameComposition"
        raised
        severity="secondary"
        :size="buttonSize"
        type="button"
        @click.prevent="onClickFromRandomCompositionButton"
      >
        <FontAwesomeIcon
          icon="random"
        />

        <span
          id="button-text"
          class="hidden md:inline"
        >
          {{ $t("components.GameLobbyRandomCompositionButton.randomComposition") }}
        </span>
      </PrimeVueButton>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { storeToRefs } from "pinia";

import { useCreateGameDtoValidation } from "~/composables/api/game/useCreateGameDtoValidation";
import { useFetchRandomGameComposition } from "~/composables/api/game/useFetchRandomGameComposition";
import { useAppBreakpoints } from "~/composables/style/useAppBreakpoints";
import { useCreateGameDtoStore } from "~/stores/game/create-game-dto/useCreateGameDtoStore";

const { fetchRandomGameComposition } = useFetchRandomGameComposition();

const { t } = useI18n();

const { isSmallerThanMdBreakpoint } = useAppBreakpoints();

const createGameDtoStore = useCreateGameDtoStore();
const { createGameDto } = storeToRefs(createGameDtoStore);
const {
  setPlayersToCreateGameDto,
  removeObsoleteAdditionalCardsFromCreateGameDto,
} = createGameDtoStore;
const { isMinimumPlayersReached } = useCreateGameDtoValidation(createGameDto);

const isLoadingGetRandomGameComposition = ref<boolean>(false);

const buttonSize = computed<"large" | "small">(() => (isSmallerThanMdBreakpoint.value ? "small" : "large"));

const isButtonDisabled = computed<boolean>(() => !isMinimumPlayersReached.value || isLoadingGetRandomGameComposition.value);

const containerTooltip = computed<string | undefined>(() => {
  if (!isMinimumPlayersReached.value) {
    return t("components.GameLobbyRandomCompositionButton.minPlayersNotReached");
  }
  return undefined;
});

async function onClickFromRandomCompositionButton(): Promise<void> {
  isLoadingGetRandomGameComposition.value = true;
  const randomGameComposition = await fetchRandomGameComposition({
    players: createGameDto.value.players,
  });
  if (randomGameComposition !== null) {
    const playerGroups = new Map(createGameDto.value.players.map(player => [player.name, player.group]));
    const randomGameCompositionPlayersWithGroup = randomGameComposition.map(player => ({
      ...player,
      group: playerGroups.get(player.name),
    }));
    setPlayersToCreateGameDto(randomGameCompositionPlayersWithGroup);
    removeObsoleteAdditionalCardsFromCreateGameDto();
  }
  isLoadingGetRandomGameComposition.value = false;
}
</script>