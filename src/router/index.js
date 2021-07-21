import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ExampleComponent from "@/components/ExampleComponent";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/example",
      name: "ExampleComponent",
      component: ExampleComponent
    }
  ]
});
