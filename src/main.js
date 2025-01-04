import "./assets/main.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faRocket,
  faComments,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";

const app = createApp(App);
// Config Font awesome
library.add(faPlusCircle, faRocket, faComments, faBars);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(Toast);

app.mount("#app");
