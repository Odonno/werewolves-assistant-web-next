<template>
  <PrimeVueFieldset
    id="game-lobby-options-hub-roles-tab-little-girl"
    :pt="{ 'legend': FIELD_SETS_LEGEND_CLASSES }"
  >
    <template #legend>
      <GameOptionRoleLegend role-name="little-girl"/>
    </template>

    <GameOptionInputGroup
      id="game-lobby-options-hub-roles-tab-little-girl-is-protected-by-defender-input-group"
      :option-description="isLittleGirlProtectedByDefenderDescription"
      option-icon="shield-alt"
      option-icon-class="text-blue-500"
      :option-label="$t('components.GameLobbyOptionsHubRolesTabLittleGirl.options.isProtectedByDefender.label')"
    >
      <AffirmativeToggleButton
        id="game-lobby-options-hub-roles-tab-little-girl-is-protected-by-defender-input"
        v-model="isLittleGirlProtectedByDefenderValue"
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

const isLittleGirlProtectedByDefenderValue = computed<boolean>({
  get: () => createGameDto.value.options.roles.littleGirl.isProtectedByDefender,
  set: (value: boolean) => {
    const localCreateGameDto = CreateGameDto.create(createGameDto.value);
    localCreateGameDto.options.roles.littleGirl.isProtectedByDefender = value;
    setCreateGameDto(localCreateGameDto);
  },
});

const isLittleGirlProtectedByDefenderDescription = computed<string>(() => getGameOptionText("roles.littleGirl.isProtectedByDefender"));
</script>