<template>
  <PrimeVueDialog
    id="game-over-history"
    block-scroll
    dismissable-mask
    :draggable="false"
    modal
    :pt="{
      'root': `${SCROLLBAR_STYLING_CLASSES}`,
      'icons': 'pb-2',
      'header': '!py-2',
      'content': 'w-x-screen-9/10 max-w-x-screen-9/10 !py-0 scrollbar-thin',
      'footer': '!py-2'
    }"
    :visible="isVisible"
    @update:visible="close"
  >
    <template #header>
      <DialogHeaderTitleOnly
        id="game-over-history-header"
        icon="clock-rotate-left"
        icon-class="text-primary"
        :title="$t('components.GameOverHistory.gameHistory')"
      />
    </template>

    <template #default>
      <GameOverHistoryRecords id="game-over-history-records"/>

      <h2
        id="end-of-game-text"
        class="text-center"
      >
        {{ $t("components.GameOverHistory.endOfGame") }}
      </h2>
    </template>

    <template #footer>
      <DialogFooterCloseButtonOnly
        id="dialog-footer-close-button-only"
        @close-dialog="close"
      />
    </template>
  </PrimeVueDialog>
</template>

<script setup lang="ts">
import GameOverHistoryRecords from "~/components/pages/game/GameOver/GameOverHistory/GameOverHistoryRecords/GameOverHistoryRecords.vue";
import DialogFooterCloseButtonOnly from "~/components/shared/dialogs/DialogFooterCloseButtonOnly/DialogFooterCloseButtonOnly.vue";
import DialogHeaderTitleOnly from "~/components/shared/dialogs/DialogHeaderTitleOnly/DialogHeaderTitleOnly.vue";
import { SCROLLBAR_STYLING_CLASSES } from "~/utils/constants/html-classes.constants";

const isVisible = ref<boolean>(false);

function showGameHistory(): void {
  isVisible.value = true;
}

function close(): void {
  isVisible.value = false;
}

defineExpose({ showGameHistory });
</script>