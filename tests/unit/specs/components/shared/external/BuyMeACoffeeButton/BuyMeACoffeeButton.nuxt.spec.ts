import type { mount } from "@vue/test-utils";

import BuyMeACoffeeButton from "~/components/shared/external/BuyMeACoffeeButton/BuyMeACoffeeButton.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("Buy Me A Coffee Button Component", () => {
  let wrapper: ReturnType<typeof mount<typeof BuyMeACoffeeButton>>;

  beforeEach(async() => {
    wrapper = await mountSuspendedComponent(BuyMeACoffeeButton);
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Link image", () => {
    it("should call link image with correct src when rendered.", () => {
      const linkImage = wrapper.find<HTMLImageElement>("[alt='Buy me a coffee']");
      const expectedSrc = "https://img.buymeacoffee.com/button-api/?" +
        "text=Buy%20me%20a%20coffee&slug=antoinezanardi&button_colour=3b82f6&font_colour=FFFFFF&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00";

      expect(linkImage.attributes("src")).toBe(expectedSrc);
    });
  });
});