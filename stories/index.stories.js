import {
  document
} from "global";

import {
  storiesOf
} from "@storybook/html";

import {
  withBackgrounds
} from "@storybook/addon-backgrounds";

import {
  withReadme
} from "storybook-readme";

import {
  withMarkdownNotes
} from "@storybook/addon-notes";
import {
  action
} from "@storybook/addon-actions";
import {
  withLinks
} from "@storybook/addon-links";
import {
  withNotes
} from "@storybook/addon-notes";
import {
  centered
} from "@storybook/addon-centered/html";
import {
  withInfo
} from "@storybook/addon-info";

// css
import "../src/assets/design-system.min.css";
// status
import component from "../docs/components/component/index.html";
import docComponent from "../docs/components/component/index.md";

var bgMode = [{
    default: true,
    name: "light",
    value: "#fff",
    color: "#000"
  },
  {
    name: "dark",
    value: "#000",
    color: "#fff"
  }
];

storiesOf("Components", module)
  .add("Component", withReadme(docComponent, () => component))
