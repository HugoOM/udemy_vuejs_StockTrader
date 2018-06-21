import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'

export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/stocks',
    component: Stocks,
    props: true
  },
  {
    path: '/portfolio',
    component: Stocks,
    props: true
  }
]
