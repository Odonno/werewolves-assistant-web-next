<template>
  <div
    id="game-playground-header-phase"
    class="flex flex-col gap-2 items-center md:flex-row"
    data-testid="game-playground-header-phase"
  >
    <GamePhaseIcon
      class="md:text-3xl"
      :phase="game.phase.name"
    />

    <span
      id="game-phase-text"
      class="!text-nowrap md:text-2xl text-center text-xs"
    >
      {{ getGamePhaseWithTurnText(game.phase.name, game.turn) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import GamePhaseIcon from "~/components/shared/game/game-phase/GamePhaseIcon/GamePhaseIcon.vue";
import { useGamePhase } from "~/composables/api/game/game-phase/useGamePhase";
import { useGameStore } from "~/stores/game/useGameStore";

const gameStore = useGameStore();
const { game } = storeToRefs(gameStore);

const { getGamePhaseWithTurnText } = useGamePhase();
</script>