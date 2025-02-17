<template>
  <PrimeVueFieldset
    id="game-lobby-options-hub-roles-tab-wolf-hound"
    :pt="{ 'legend': FIELD_SETS_LEGEND_CLASSES }"
  >
    <template #legend>
      <GameOptionRoleLegend role-name="wolf-hound"/>
    </template>

    <GameOptionInputGroup
      id="game-lobby-options-hub-roles-tab-wolf-hound-is-chosen-side-revealed-input-group"
      does-have-bottom-divider
      :option-description="isWolfHoundChosenSideRevealedDescription"
      option-icon="dog"
      option-icon-class="text-red-600"
      :option-label="$t('components.GameLobbyOptionsHubRolesTabWolfHound.options.isChosenSideRevealed.label')"
    >
      <AffirmativeToggleButton
        id="game-lobby-options-hub-roles-tab-wolf-hound-is-chosen-side-revealed-input"
        v-model="isWolfHoundChosenSideRevealedValue"
        class="w-full"
      />
    </GameOptionInputGroup>

    <GameOptionInputGroup
      id="game-lobby-options-hub-roles-tab-wolf-hound-is-side-randomly-chosen-input-group"
      :option-description="isWolfHoundSideRandomlyChosenDescription"
      option-icon="random"
      option-icon-class="text-emerald-500"
      :option-label="$t('components.GameLobbyOptionsHubRolesTabWolfHound.options.isSideRandomlyChosen.label')"
    >
      <AffirmativeToggleButton
        id="game-lobby-options-hub-roles-tab-wolf-hound-is-side-randomly-chosen-input"
        v-model="isWolfHoundSideRandomlyChosenValue"
        class="w-full"
      />
    </GameOptionInputGroup>
  </PrimeVueFieldset>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import AffirmativeToggleButton from "~/components/shared/buttons/AffirmativeToggleButton/AffirmativeToggleButton.vue";
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

const isWolfHoundChosenSideRevealedValue = computed<boolean>({
  get: () => createGameDto.value.options.roles.wolfHound.isChosenSideRevealed,
  set: (value: boolean) => {
    const localCreateGameDto = CreateGameDto.create(createGameDto.value);
    localCreateGameDto.options.roles.wolfHound.isChosenSideRevealed = value;
    setCreateGameDto(localCreateGameDto);
  },
});

const isWolfHoundSideRandomlyChosenValue = computed<boolean>({
  get: () => createGameDto.value.options.roles.wolfHound.isSideRandomlyChosen,
  set: (value: boolean) => {
    const localCreateGameDto = CreateGameDto.create(createGameDto.value);
    localCreateGameDto.options.roles.wolfHound.isSideRandomlyChosen = value;
    setCreateGameDto(localCreateGameDto);
  },
});

const isWolfHoundChosenSideRevealedDescription = computed<string>(() => getGameOptionText("roles.wolfHound.isChosenSideRevealed"));

const isWolfHoundSideRandomlyChosenDescription = computed<string>(() => getGameOptionText("roles.wolfHound.isSideRandomlyChosen"));
</script>