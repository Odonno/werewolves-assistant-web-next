<template>
  <div
    id="game-history-record-icon"
    class="align-items-center flex h-12 justify-content-center shadow-1 text-white w-12 z-1"
  >
    <NuxtImg
      :alt="$t(`components.GameOverHistoryRecordIcon.gameHistoryRecordIconAltText`)"
      placeholder="/svg/misc/ripples.svg"
      :src="gameHistoryRecordIconPath"
    />
  </div>
</template>

<script setup lang="ts">
import type { GameOverHistoryRecordProps } from "~/components/pages/game/GameOver/GameOverHistory/GameOverHistoryRecords/GameOverHistoryRecord/game-over-history-record.types";
import { GAME_PLAYS_TEXT_AND_SVG } from "~/components/shared/game/game-play/game-play.constants";

const props = defineProps<GameOverHistoryRecordProps>();

const gameHistoryRecordIconPath = computed<string>(() => {
  const { gameHistoryRecord } = props;
  const { source, action } = gameHistoryRecord.play;

  const svgPath = GAME_PLAYS_TEXT_AND_SVG[source.name][action]?.svgPath;

  return svgPath ?? "/svg/misc/question-mark.svg";
});
</script>