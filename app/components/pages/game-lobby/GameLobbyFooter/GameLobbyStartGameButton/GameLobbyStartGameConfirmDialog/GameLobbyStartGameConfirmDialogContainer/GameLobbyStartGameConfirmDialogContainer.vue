<template>
  <div
    id="game-lobby-start-game-confirm-dialog-container"
    class="bg-gray-700 flex flex-col items-center p-4 py-3 rounded"
  >
    <div class="confirm-dialog-header w-full">
      <h5
        class="mb-1 w-full"
      >
        <FontAwesomeIcon
          class="text-success w-1/12"
          icon="list-check"
        />

        <span
          id="confirm-dialog-header-text"
          class="!w-10/12 inline-block text-center"
        >
          {{ $t("components.GameLobbyStartGameConfirmDialog.beforeStartingGame") }}
        </span>
      </h5>

      <PrimeVueDivider class="!bg-gray-600 !h-px !my-3"/>
    </div>

    <GameLobbyStartGameConfirmDialogContent
      id="game-lobby-start-game-confirm-dialog-content"
      :current-confirm-step="currentConfirmStep"
      @confirm-step="onConfirmStep"
      @reject-actor-additional-cards-placed-step="onRejectActorAdditionalCardsPlacedStep"
      @reject-game-options-changed-step="onRejectGameOptionsChangedStep"
      @reject-players-position-step="onRejectPlayersPositionStep"
      @reject-thief-additional-cards-placed-step="onRejectThiefAdditionalCardsPlacedStep"
    />

    <GameLobbyStartGameConfirmDialogFooter
      id="game-lobby-start-game-confirm-dialog-footer"
      :current-confirm-step="currentConfirmStep"
      @confirm-start-game="onConfirmStartGame"
      @reject-start-game="onRejectStartGame"
    />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import type { GameLobbyStartGameConfirmDialogContainerEmits, GameLobbyStartGameConfirmDialogContainerProps } from "~/components/pages/game-lobby/GameLobbyFooter/GameLobbyStartGameButton/GameLobbyStartGameConfirmDialog/GameLobbyStartGameConfirmDialogContainer/game-lobby-start-game-confirm-dialog-container.types";
import GameLobbyStartGameConfirmDialogContent from "~/components/pages/game-lobby/GameLobbyFooter/GameLobbyStartGameButton/GameLobbyStartGameConfirmDialog/GameLobbyStartGameConfirmDialogContainer/GameLobbyStartGameConfirmDialogContent/GameLobbyStartGameConfirmDialogContent.vue";
import GameLobbyStartGameConfirmDialogFooter from "~/components/pages/game-lobby/GameLobbyFooter/GameLobbyStartGameButton/GameLobbyStartGameConfirmDialog/GameLobbyStartGameConfirmDialogContainer/GameLobbyStartGameConfirmDialogFooter/GameLobbyStartGameConfirmDialogFooter.vue";

const props = defineProps<GameLobbyStartGameConfirmDialogContainerProps>();

const emit = defineEmits<GameLobbyStartGameConfirmDialogContainerEmits>();

function onConfirmStep(): void {
  emit("confirmStep");
}

function onRejectPlayersPositionStep(): void {
  emit("rejectPlayersPositionStep", props.rejectCallback);
}

function onRejectThiefAdditionalCardsPlacedStep(): void {
  emit("rejectThiefAdditionalCardsPlacedStep", props.rejectCallback);
}

function onRejectActorAdditionalCardsPlacedStep(): void {
  emit("rejectActorAdditionalCardsPlacedStep", props.rejectCallback);
}

function onRejectGameOptionsChangedStep(): void {
  emit("rejectGameOptionsChangedStep", props.rejectCallback);
}

function onConfirmStartGame(): void {
  emit("confirmStartGame");
}

function onRejectStartGame(): void {
  emit("rejectStartGame");
}
</script>