import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CertificationsView from '@/views/CertificationsView.vue';
import ConfidentialiteCaView from '@/views/ConfidentialiteCaView.vue';
import ConfidentialiteEuView from '@/views/ConfidentialiteEuView.vue';
import ContactView from '@/views/ContactView.vue';
import DetailsView from '@/views/DetailsView.vue';
import GamePacmanView from '@/views/GamePacmanView.vue';
import MaterielView from '@/views/MaterielView.vue';
import OutilsView from '@/views/OutilsView.vue';
import PortfolioCeSiteWebView from '@/views/PortfolioCeSiteWebView.vue';
import PortfolioRestaurantView from '@/views/PortfolioRestaurantView.vue';
import PortfolioView from '@/views/PortfolioView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: CertificationsView
  },
  {
    path: '/confidentialite-ca',
    name: 'ConfidentialiteCa',
    component: ConfidentialiteCaView
  },
  {
    path: '/confidentialite-eu',
    name: 'ConfidentialiteEu',
    component: ConfidentialiteEuView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/details',
    name: 'Details',
    component: DetailsView
  },
  {
    path: '/game-pacman',
    name: 'GamePacman',
    component: GamePacmanView
  },
  {
    path: '/materiel',
    name: 'Materiel',
    component: MaterielView
  },
  {
    path: '/outils',
    name: 'Outils',
    component: OutilsView
  },
  {
    path: '/portfolio-ce-site-web',
    name: 'PortfolioCeSiteWeb',
    component: PortfolioCeSiteWebView
  },
  {
    path: '/portfolio-restaurant',
    name: 'PortfolioRestaurant',
    component: PortfolioRestaurantView
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;