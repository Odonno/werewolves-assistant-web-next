import type { RouteLocationNormalizedGeneric } from "#vue-router";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";
import type UseConfirm from "primevue/useconfirm";
import { beforeEach, vi } from "vitest";
import type { Mock } from "vitest";
import type { Ref } from "vue";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import { createFakeLocationNormalizedGuard } from "@tests/unit/utils/factories/composables/nuxt/useRouter.factory";
import GamePlayingBeforeLeaveConfirmDialog from "~/components/pages/game/GamePlaying/GamePlayingBeforeLeaveConfirmDialog/GamePlayingBeforeLeaveConfirmDialog.vue";

type GamePlayingBeforeLeaveConfirmDialogPrivateVariables = {
  openConfirmLeaveGameDialog: () => void;
  desiredDestinationFullPath: Ref<string>;
  doesConfirmToLeaveGame: Ref<boolean>;
  acceptLeavingGameCallback: () => void;
  onBeforeEachRouteLeaving: (guard: RouteLocationNormalizedGeneric) => boolean;
};

const hoistedMocks = vi.hoisted(() => ({
  useConfirm: { require: vi.fn() },
  useRouter: {
    beforeEach: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
  },
}));

vi.mock("primevue/useconfirm", async importOriginal => ({
  ...await importOriginal<typeof UseConfirm>(),
  useConfirm: (): { require: Mock } => ({ require: hoistedMocks.useConfirm.require }),
}));

mockNuxtImport("useRouter", () => vi.fn(() => hoistedMocks.useRouter));

describe("Game Playing Before Leave Confirm Dialog Component", () => {
  let wrapper: ReturnType<typeof mount<typeof GamePlayingBeforeLeaveConfirmDialog>>;

  async function mountGamePlayingBeforeLeaveConfirmDialogComponent(options: ComponentMountingOptions<typeof GamePlayingBeforeLeaveConfirmDialog> = {}):
  Promise<ReturnType<typeof mount<typeof GamePlayingBeforeLeaveConfirmDialog>>> {
    return mountSuspendedComponent(GamePlayingBeforeLeaveConfirmDialog, {
      shallow: false,
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountGamePlayingBeforeLeaveConfirmDialogComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("On Before Route Leaving", () => {
    it("should return false when confirm to leave is false.", () => {
      const guard = createFakeLocationNormalizedGuard({ fullPath: "/game-lobby" });
      const isLeaving = (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).onBeforeEachRouteLeaving(guard);

      expect(isLeaving).toBeFalsy();
    });

    it("should return true when confirm to leave is true.", async() => {
      (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).doesConfirmToLeaveGame.value = true;
      const guard = createFakeLocationNormalizedGuard({ fullPath: "/game-lobby" });
      await nextTick();
      const isLeaving = (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).onBeforeEachRouteLeaving(guard);

      expect(isLeaving).toBeTruthy();
    });

    it("should not set desired destination full path when confirm to leave is true.", async() => {
      (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).doesConfirmToLeaveGame.value = true;
      const guard = createFakeLocationNormalizedGuard({ fullPath: "/game-lobby" });
      (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).onBeforeEachRouteLeaving(guard);
      await nextTick();

      expect((wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).desiredDestinationFullPath.value).toBe("");
    });

    it("should set desired destination full path to guard full path when confirm to leave is false.", async() => {
      const guard = createFakeLocationNormalizedGuard({ fullPath: "/game-lobby" });
      (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).onBeforeEachRouteLeaving(guard);
      await nextTick();

      expect((wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).desiredDestinationFullPath.value).toBe(guard.fullPath);
    });
  });

  describe("Confirm", () => {
    it("should set confirm parameters to confirm composable when open.", async() => {
      wrapper = await mountGamePlayingBeforeLeaveConfirmDialogComponent();
      (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).openConfirmLeaveGameDialog();
      await nextTick();

      expect(hoistedMocks.useConfirm.require).toHaveBeenCalledExactlyOnceWith({
        group: "game-playing-before-leave-confirm-dialog",
        accept: expect.any(Function) as () => void,
        header: "components.GamePlayingBeforeLeaveConfirmDialog.gameIsStillPlaying",
        message: "components.GamePlayingBeforeLeaveConfirmDialog.doYouWantToLeaveGame",
        acceptLabel: "components.GamePlayingBeforeLeaveConfirmDialog.iWantToLeave",
        rejectLabel: "components.GamePlayingBeforeLeaveConfirmDialog.stayInGame",
        defaultFocus: "reject",
        acceptClass: "p-button-danger",
        rejectClass: "p-button-secondary",
      });
    });

    describe("On Leaving", () => {
      it("should set confirm to leave to true when accept leaving.", async() => {
        (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).acceptLeavingGameCallback();
        await nextTick();

        expect((wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).doesConfirmToLeaveGame.value).toBeTruthy();
      });

      it("should push to desired destination full path when accept leaving.", async() => {
        (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).desiredDestinationFullPath.value = "/game-lobby";
        (wrapper.vm as unknown as GamePlayingBeforeLeaveConfirmDialogPrivateVariables).acceptLeavingGameCallback();
        await nextTick();

        expect(hoistedMocks.useRouter.push).toHaveBeenCalledExactlyOnceWith("/game-lobby");
      });
    });
  });
});