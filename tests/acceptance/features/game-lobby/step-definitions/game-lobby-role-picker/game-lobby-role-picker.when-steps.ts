import { When } from "@cucumber/cucumber";

import type { RoleName } from "~/composables/api/role/types/role.types";
import { chooseRoleInLobbyRolePicker } from "@tests/acceptance/features/game-lobby/helpers/game-lobby-role-picker/game-lobby-role-picker.when-steps-helpers";
import type { CustomWorld } from "@tests/acceptance/shared/types/word.types";

When(/^the user chooses the role with name "(?<name>.+?)" in the lobby role picker$/u, async function(this: CustomWorld, name: RoleName): Promise<void> {
  await chooseRoleInLobbyRolePicker(this, name);
});

When(/^the user chooses a random role in the lobby role picker$/u, async function(this: CustomWorld): Promise<void> {
  await chooseRoleInLobbyRolePicker(this, "Random" as RoleName);
});

When(/^the user types "(?<name>.+?)" in the lobby role picker search input$/u, async function(this: CustomWorld, name: string): Promise<void> {
  const input = this.page.getByLabel("Search for a role", { exact: true });
  await input.waitFor({ state: "visible" });
  await input.fill(name);
});