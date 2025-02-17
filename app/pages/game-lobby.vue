<template>
  <div class="flex flex-col">
    <GameLobbyHeader
      id="game-lobby-header"
      ref="gameLobbyHeader"
      @additional-cards-manager-button-click="onAdditionalCardsButtonManagerClickFromGameLobbyHeader"
      @game-options-button-click="onGameOptionsButtonClickFromGameLobbyHeader"
      @group-organizer-button-click="onGroupOrganizerButtonClickFromGameLobbyHeader"
      @position-coordinator-button-click="onPositionCoordinatorButtonClickFromGameLobbyHeader"
    />

    <PrimeVueDivider/>

    <GameLobbyPlayersParty
      id="game-lobby-players-party"
      class="!overflow-x-hidden flex-auto overflow-y-auto scrollbar-thin"
      @pick-role-for-player="onPickRoleForPlayerFromGameLobbyPlayersParty"
    />

    <PrimeVueDivider/>

    <GameLobbyFooter
      id="game-lobby-footer"
      @reject-actor-additional-cards-placed-step="onRejectThiefOrActorAdditionalCardsPlacedStep"
      @reject-game-options-changed-step="onRejectGameOptionsChangedStep"
      @reject-players-position-step="onRejectPlayersPositionStepFromGameLobbyFooter"
      @reject-thief-additional-cards-placed-step="onRejectThiefOrActorAdditionalCardsPlacedStep"
    />

    <ClientOnly>
      <GameLobbyRolePicker ref="gameLobbyRolePicker"/>

      <GameLobbyOptionsHub ref="gameLobbyOptionsHub"/>

      <GameLobbyPositionCoordinator ref="gameLobbyPositionCoordinator"/>

      <GameLobbyAdditionalCardsManager ref="gameLobbyAdditionalCardsManager"/>

      <GameLobbyGroupOrganizer ref="gameLobbyGroupOrganizer"/>

      <GameLobbyBeforeLeaveConfirmDialog/>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { GameLobbyAdditionalCardsManagerExposed } from "~/components/pages/game-lobby/GameLobbyAdditionalCardsManager/game-lobby-additional-cards-manager.types";
import GameLobbyAdditionalCardsManager from "~/components/pages/game-lobby/GameLobbyAdditionalCardsManager/GameLobbyAdditionalCardsManager.vue";
import GameLobbyBeforeLeaveConfirmDialog from "~/components/pages/game-lobby/GameLobbyBeforeLeaveConfirmDialog/GameLobbyBeforeLeaveConfirmDialog.vue";
import GameLobbyFooter from "~/components/pages/game-lobby/GameLobbyFooter/GameLobbyFooter.vue";
import type { GameLobbyGroupOrganizerExposed } from "~/components/pages/game-lobby/GameLobbyGroupOrganizer/game-lobby-group-organizer.types";
import GameLobbyGroupOrganizer from "~/components/pages/game-lobby/GameLobbyGroupOrganizer/GameLobbyGroupOrganizer.vue";
import type { GameLobbyHeaderExposed } from "~/components/pages/game-lobby/GameLobbyHeader/game-lobby-header.types";
import GameLobbyHeader from "~/components/pages/game-lobby/GameLobbyHeader/GameLobbyHeader.vue";
import type { GameLobbyOptionsHubExposed } from "~/components/pages/game-lobby/GameLobbyOptionsHub/game-lobby-options-hub.types";
import GameLobbyOptionsHub from "~/components/pages/game-lobby/GameLobbyOptionsHub/GameLobbyOptionsHub.vue";
import GameLobbyPlayersParty from "~/components/pages/game-lobby/GameLobbyPlayersParty/GameLobbyPlayersParty.vue";
import type { GameLobbyPositionCoordinatorExposed } from "~/components/pages/game-lobby/GameLobbyPositionCoordinator/game-lobby-position-coordinator.types";
import GameLobbyPositionCoordinator from "~/components/pages/game-lobby/GameLobbyPositionCoordinator/GameLobbyPositionCoordinator.vue";
import type { GameLobbyRolePickerExposed } from "~/components/pages/game-lobby/GameLobbyRolePicker/game-lobby-role-picker.types";
import GameLobbyRolePicker from "~/components/pages/game-lobby/GameLobbyRolePicker/GameLobbyRolePicker.vue";
import type { CreateGamePlayerDto } from "~/composables/api/game/dto/create-game/create-game-player/create-game-player.dto";
import { usePrimeVueToasts } from "~/composables/prime-vue/usePrimeVueToasts";
import { useAppBreakpoints } from "~/composables/style/useAppBreakpoints";
import { useAudioStore } from "~/stores/audio/useAudioStore";
import { useCreateGameDtoStore } from "~/stores/game/create-game-dto/useCreateGameDtoStore";
import { useGameStore } from "~/stores/game/useGameStore";

const createGameDtoStore = useCreateGameDtoStore();
const { resetCreateGameDto } = createGameDtoStore;
const gameStore = useGameStore();
const { resetGame } = gameStore;

const audioStore = useAudioStore();
const { loadAllAudios } = audioStore;

const { t } = useI18n();

const { addInfoToast } = usePrimeVueToasts();

const gameLobbyHeader = ref<GameLobbyHeaderExposed | null>(null);
const gameLobbyRolePicker = ref<GameLobbyRolePickerExposed | null>(null);
const gameLobbyOptionsHub = ref<GameLobbyOptionsHubExposed | null>(null);
const gameLobbyPositionCoordinator = ref<GameLobbyPositionCoordinatorExposed | null>(null);
const gameLobbyAdditionalCardsManager = ref<GameLobbyAdditionalCardsManagerExposed | null>(null);
const gameLobbyGroupOrganizer = ref<GameLobbyGroupOrganizerExposed | null>(null);

const { isSmallerThanMdBreakpoint } = useAppBreakpoints();

useHead({
  title: t("pages.gameLobby.startGame"),
  meta: [{ name: "description", content: t("pages.gameLobby.seoDescription") }],
});

function onPickRoleForPlayerFromGameLobbyPlayersParty(player?: CreateGamePlayerDto): void {
  if (!gameLobbyRolePicker.value) {
    throw createError("Game Lobby Role Picker is not defined");
  }
  if (!player) {
    return;
  }
  gameLobbyRolePicker.value.openToPickRoleForPlayer(player);
}

function onGameOptionsButtonClickFromGameLobbyHeader(): void {
  if (!gameLobbyOptionsHub.value) {
    throw createError("Game Lobby Options Hub is not defined");
  }
  gameLobbyOptionsHub.value.open();
}

function onPositionCoordinatorButtonClickFromGameLobbyHeader(): void {
  if (!gameLobbyPositionCoordinator.value) {
    throw createError("Game Lobby Position Coordinator is not defined");
  }
  gameLobbyPositionCoordinator.value.open();
}

function onAdditionalCardsButtonManagerClickFromGameLobbyHeader(): void {
  if (!gameLobbyAdditionalCardsManager.value) {
    throw createError("Game Lobby Additional Cards Manager is not defined");
  }
  gameLobbyAdditionalCardsManager.value.open();
}

function onGroupOrganizerButtonClickFromGameLobbyHeader(): void {
  if (!gameLobbyGroupOrganizer.value) {
    throw createError("Game Lobby Group Organizer is not defined");
  }
  gameLobbyGroupOrganizer.value.open();
}

function onRejectPlayersPositionStepFromGameLobbyFooter(): void {
  if (!gameLobbyHeader.value) {
    throw createError("Game Lobby Header is not defined");
  }
  gameLobbyHeader.value.highlightPositionCoordinatorButton();
  const intervalMs = 1000;
  setTimeout(() => {
    onPositionCoordinatorButtonClickFromGameLobbyHeader();
  }, intervalMs);
}

function onRejectThiefOrActorAdditionalCardsPlacedStep(): void {
  if (!gameLobbyHeader.value) {
    throw createError("Game Lobby Header is not defined");
  }
  gameLobbyHeader.value.highlightAdditionalCardsManagerButton();
  const intervalMs = 1000;
  setTimeout(() => {
    onAdditionalCardsButtonManagerClickFromGameLobbyHeader();
  }, intervalMs);
}

function onRejectGameOptionsChangedStep(): void {
  if (!gameLobbyHeader.value) {
    throw createError("Game Lobby Header is not defined");
  }
  gameLobbyHeader.value.highlightGameOptionsButton();
  const intervalMs = 1000;
  setTimeout(() => {
    onGameOptionsButtonClickFromGameLobbyHeader();
  }, intervalMs);
}

function injectPlayerNamesFromQuery(): void {
  const { query } = useRoute();
  if (!Object.hasOwn(query, "playerNames")) {
    return;
  }
  const playerNamesFromQuery = query.playerNames as string[];
  createGameDtoStore.setPlayersToCreateGameDto(playerNamesFromQuery.map((name: string) => ({
    name,
    role: {},
    side: {},
  })));
}

function launchSmallScreenWarning(): void {
  addInfoToast({
    summary: t("pages.gameLobby.smallScreenDetected"),
    detail: t("pages.gameLobby.smallScreenWarning"),
    life: 7500,
  });
}

resetCreateGameDto();
resetGame();
injectPlayerNamesFromQuery();
loadAllAudios();

onMounted(() => {
  if (isSmallerThanMdBreakpoint.value) {
    const delayInMs = 200;
    setTimeout(() => {
      launchSmallScreenWarning();
    }, delayInMs);
  }
});
</script>