// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects:{
    '/vi/home': '/vi',
    '/en/home': '/en',
    '/vi/services': '/vi',
    '/vi/industries': '/vi',
    '/en/services': '/en',
    '/en/industries': '/en',
  }
});
