import {loadNg1Module, ngmodule} from "../bootstrap/ngmodule";

import {app} from "./app.component";
import {welcome} from "./welcome.component";
import {login} from "./login.component";
import {home} from "./home.component";
import {appState, homeState, loginState, welcomeState} from "./app.states";
import {otherwiseConfigBlock, traceRunBlock} from "./app.config";

const mainAppModule = {
  components: {app, welcome, login, home},
  states: [appState, homeState, loginState, welcomeState],
  configBlocks: [otherwiseConfigBlock],
  runBlocks: [traceRunBlock]
};

loadNg1Module(ngmodule, mainAppModule);
