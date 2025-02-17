<template>
  <PrimeVueFieldset
    id="game-lobby-options-hub-roles-tab-two-sisters"
    :pt="{ 'legend': FIELD_SETS_LEGEND_CLASSES }"
  >
    <template #legend>
      <GameOptionRoleLegend role-name="two-sisters"/>
    </template>

    <GameOptionInputGroup
      id="game-lobby-options-hub-roles-tab-two-sisters-waking-up-interval-input-group"
      :option-description="twoSistersWakingUpIntervalDescription"
      option-icon="clock-rotate-left"
      option-icon-class="text-pink-500"
      :option-label="$t('components.GameLobbyOptionsHubRolesTabTwoSisters.options.wakingUpInterval.label')"
    >
      <PrimeVueFloatLabel variant="on">
        <label
          id="game-lobby-options-hub-roles-tab-two-sisters-waking-up-interval-label"
          for="game-lobby-options-hub-roles-tab-two-sisters-waking-up-interval-input"
        >
          {{ $t("components.GameLobbyOptionsHubRolesTabTwoSisters.options.wakingUpInterval.label") }}
        </label>

        <PrimeVueInputNumber
          id="game-lobby-options-hub-roles-tab-two-sisters-waking-up-interval-input"
          v-model="twoSistersWakingUpIntervalValue"
          class="w-full"
          :max="5"
          :min="0"
        />
      </PrimeVueFloatLabel>

      <PrimeVueSlider
        id="game-lobby-options-hub-roles-tab-two-sisters-waking-up-interval-slider"
        v-model="twoSistersWakingUpIntervalValue"
        class="mt-4 w-full"
        :max="5"
        :min="0"
        :step="1"
      />
    </GameOptionInputGroup>
  </PrimeVueFieldset>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import GameOptionInputGroup from "~/components/shared/game/game-options/GameOptionInputGroup/GameOptionInputGroup.vue";
import GameOptionRoleLegend from "~/components/shared/game/game-options/GameOptionRoleLegend/GameOptionRoleLegend.vue";
import { FIELD_SETS_LEGEND_CLASSES } from "~/components/shared/inputs/field-sets/field-sets.constants";
import { CreateGameDto } from "~/composables/api/game/dto/create-game/create-game.dto";
import { useGameOptionsTexts } from "~/composables/api/game/game-options/useGameOptionsTexts";
import { useCreateGameDtoStore } from "~/stores/game/create-game-dto/useCreateGameDtoStore";

const createGameDtoStore = useCreateGameDtoStore();
const { setCreateGameDto } = createGameDtoStore;
const { createGameDto, createGameOptionsDto } = storeToRefs(createGameDtoStore);

const { getGameOptionText } = useGameOptionsTexts(createGameOptionsDto);

const twoSistersWakingUpIntervalValue = computed<number>({
  get: () => createGameDto.value.options.roles.twoSisters.wakingUpInterval,
  set: (value: number | null) => {
    if (value === null) {
      return;
    }
    const localCreateGameDto = CreateGameDto.create(createGameDto.value);
    localCreateGameDto.options.roles.twoSisters.wakingUpInterval = value;
    setCreateGameDto(localCreateGameDto);
  },
});

const twoSistersWakingUpIntervalDescription = computed<string>(() => getGameOptionText("roles.twoSisters.wakingUpInterval"));
</script>