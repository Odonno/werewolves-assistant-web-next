<template>
  <PrimeVueFieldset
    id="game-lobby-options-hub-roles-tab-stuttering-judge"
    :pt="{ 'legend': FIELD_SETS_LEGEND_CLASSES }"
  >
    <template #legend>
      <GameOptionRoleLegend role-name="stuttering-judge"/>
    </template>

    <GameOptionInputGroup
      id="game-lobby-options-hub-roles-tab-stuttering-judge-vote-requests-count-input-group"
      :option-description="stutteringJudgeVoteRequestsCountDescription"
      option-icon="gavel"
      option-icon-class="text-cyan-300"
      :option-label="$t('components.GameLobbyOptionsHubRolesTabStutteringJudge.options.voteRequestsCount.label')"
    >
      <PrimeVueFloatLabel variant="on">
        <label
          id="game-lobby-options-hub-roles-tab-stuttering-judge-vote-requests-count-label"
          for="game-lobby-options-hub-roles-tab-stuttering-judge-vote-requests-count-input"
        >
          {{ $t("components.GameLobbyOptionsHubRolesTabStutteringJudge.options.voteRequestsCount.label") }}
        </label>

        <PrimeVueInputNumber
          id="game-lobby-options-hub-roles-tab-stuttering-judge-vote-requests-count-input"
          v-model="stutteringJudgeVoteRequestsCountValue"
          class="w-full"
          :max="5"
          :min="1"
        />
      </PrimeVueFloatLabel>

      <PrimeVueSlider
        id="game-lobby-options-hub-roles-tab-stuttering-judge-vote-requests-count-slider"
        v-model="stutteringJudgeVoteRequestsCountValue"
        class="mt-4 w-full"
        :max="5"
        :min="1"
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

const stutteringJudgeVoteRequestsCountValue = computed<number>({
  get: () => createGameDto.value.options.roles.stutteringJudge.voteRequestsCount,
  set: (value: number | null) => {
    if (value === null) {
      return;
    }
    const localCreateGameDto = CreateGameDto.create(createGameDto.value);
    localCreateGameDto.options.roles.stutteringJudge.voteRequestsCount = value;
    setCreateGameDto(localCreateGameDto);
  },
});

const stutteringJudgeVoteRequestsCountDescription = computed<string>(() => getGameOptionText("roles.stutteringJudge.voteRequestsCount"));
</script>