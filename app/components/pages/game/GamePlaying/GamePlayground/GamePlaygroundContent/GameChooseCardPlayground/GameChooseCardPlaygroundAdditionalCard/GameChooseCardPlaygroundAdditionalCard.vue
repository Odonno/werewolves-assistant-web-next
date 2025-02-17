<template>
  <div
    id="game-choose-card-playground-additional-card"
  >
    <button
      id="additional-card-button"
      v-tilt
      :aria-label="additionalCardButtonAriaLabel"
      :class="additionalCardButtonClasses"
      type="button"
      @click.prevent="onClickFromAdditionalCardButton"
    >
      <RoleImage
        id="additional-card-image"
        :class="additionalCardsRoleImageClasses"
        definition="normal"
        :role-name="additionalCard.roleName"
        :sizes="additionalCardImageSizes"
      />

      <span
        id="additional-card-role-label"
        class="flex flex-col font-semibold grow justify-center"
      >
        {{ additionalCardRoleNameLabel }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { GameChooseCardPlaygroundAdditionalCardEmits, GameChooseCardPlaygroundAdditionalCardProps } from "~/components/pages/game/GamePlaying/GamePlayground/GamePlaygroundContent/GameChooseCardPlayground/GameChooseCardPlaygroundAdditionalCard/game-choose-card-playground-additional-card.types";
import RoleImage from "~/components/shared/role/RoleImage/RoleImage.vue";
import { useRoleName } from "~/composables/api/role/useRoleName";
import { useStrings } from "~/composables/misc/useStrings";
import { useAppBreakpoints } from "~/composables/style/useAppBreakpoints";
import { useMakeGamePlayDtoStore } from "~/stores/game/make-game-play-dto/useMakeGamePlayDtoStore";
import { useRolesStore } from "~/stores/role/useRolesStore";

const props = defineProps<GameChooseCardPlaygroundAdditionalCardProps>();

const emit = defineEmits<GameChooseCardPlaygroundAdditionalCardEmits>();

const { isSmallerThanMdBreakpoint } = useAppBreakpoints();

const additionalCardImageSizes = computed<string>(() => (isSmallerThanMdBreakpoint.value ? "75" : "125"));

const { makeGamePlayDto } = useMakeGamePlayDtoStore();

const rolesStore = useRolesStore();
const { getRoleSideForRoleName } = rolesStore;

const { getRoleNameLabel, getDefiniteRoleNameLabel } = useRoleName();

const { t } = useI18n();

const { lowerCaseFirstLetter } = useStrings();

const additionalCardRoleNameLabel = computed<string>(() => getRoleNameLabel(props.additionalCard.roleName));

const additionalCardButtonAriaLabel = computed<string>(() => {
  const lowerRecipientDefiniteRoleNameLabel = lowerCaseFirstLetter(getDefiniteRoleNameLabel(props.additionalCard.recipient, 1));

  return t("components.GameChooseCardPlaygroundAdditionalCard.chooseCardForRecipient", {
    roleName: additionalCardRoleNameLabel.value,
    recipientDefiniteName: lowerRecipientDefiniteRoleNameLabel,
  });
});

const additionalCardColor = computed<string>(() => {
  const roleSide = getRoleSideForRoleName(props.additionalCard.roleName);

  return roleSide === "villagers" ? "emerald" : "red";
});

const isAdditionalCardChosen = computed<boolean>(() => makeGamePlayDto.chosenCardId === props.additionalCard._id);

const additionalCardButtonClasses = computed<string>(() => {
  const baseClasses = `border-4 border-transparent flex flex-col h-52 items-center me-2 p-3 rounded-lg`;
  if (isAdditionalCardChosen.value) {
    return `${baseClasses} !border-${additionalCardColor.value}-500`;
  }
  return baseClasses;
});

const additionalCardsRoleImageClasses = computed<string>(() => {
  const baseClasses = `mb-1`;
  if (isAdditionalCardChosen.value) {
    return `${baseClasses} !border-${additionalCardColor.value}-500`;
  }
  return baseClasses;
});

function onClickFromAdditionalCardButton(): void {
  emit("clickAdditionalCard", props.additionalCard);
}
</script>