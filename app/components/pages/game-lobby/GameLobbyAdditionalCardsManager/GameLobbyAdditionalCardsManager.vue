<template>
  <PrimeVueDialog
    id="game-lobby-additional-cards-manager"
    block-scroll
    content-class="w-x-screen-9/10 max-w-x-screen-9/10"
    dismissable-mask
    :draggable="false"
    modal
    :pt="{
      'root': `h-9/10 ${SCROLLBAR_STYLING_CLASSES}`,
      'icons': 'pb-2',
      'header': '!py-2',
      'content': 'w-x-screen-9/10 max-w-x-screen-9/10 h-full !py-0 scrollbar-thin',
      'footer': '!py-2'
    }"
    :visible="isVisible"
    @update:visible="close"
  >
    <template
      #header
    >
      <DialogHeaderTitleOnly
        id="game-lobby-additional-cards-manager-header"
        icon="clover"
        icon-class="text-primary"
        :title="$t('components.GameLobbyAdditionalCardsManager.additionalCards')"
      />
    </template>

    <GameLobbyAdditionalCardsManagerContent
      id="game-lobby-additional-cards-manager-content"
      class="h-full"
    />

    <template #footer>
      <DialogFooterCloseButtonOnly
        id="game-lobby-additional-cards-manager-footer"
        @close-dialog="close"
      />
    </template>
  </PrimeVueDialog>
</template>

<script setup lang="ts">
import type { GameLobbyAdditionalCardsManagerExposed } from "~/components/pages/game-lobby/GameLobbyAdditionalCardsManager/game-lobby-additional-cards-manager.types";
import GameLobbyAdditionalCardsManagerContent from "~/components/pages/game-lobby/GameLobbyAdditionalCardsManager/GameLobbyAdditionalCardsManagerContent/GameLobbyAdditionalCardsManagerContent.vue";
import DialogFooterCloseButtonOnly from "~/components/shared/dialogs/DialogFooterCloseButtonOnly/DialogFooterCloseButtonOnly.vue";
import DialogHeaderTitleOnly from "~/components/shared/dialogs/DialogHeaderTitleOnly/DialogHeaderTitleOnly.vue";
import { SCROLLBAR_STYLING_CLASSES } from "~/utils/constants/html-classes.constants";

const isVisible = ref<boolean>(false);

function open(): void {
  isVisible.value = true;
}

function close(): void {
  isVisible.value = false;
}

defineExpose<GameLobbyAdditionalCardsManagerExposed>({
  open,
});
</script>