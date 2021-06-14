import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faUserTag,
  faUserTie,
  faArrowUp,
  faArrowDown,
  faMinus,
  faDollarSign,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faUsers,
  faArrowUp,
  faArrowDown,
  faMinus,
  faUserTag,
  faUserTie,
  faDollarSign,
  faCartPlus
);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
