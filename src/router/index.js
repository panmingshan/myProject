import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AA from  "../components/a"
import BB from  "../components/b"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children : [
        {
          path: 'a',
          name: 'a',
          component : AA,
          children :[
            {
              path : "b",
              name : "b",
              component : BB,

            }
          ],
        }
      ]
    }
  ]
})
