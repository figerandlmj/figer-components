import demoAndApi from './views/demoAndApi.vue'

const routers = [
  { path: "/", redirect: '/demoAndApi' },
  { path: "/demoAndApi", component: demoAndApi },
];

export default routers;