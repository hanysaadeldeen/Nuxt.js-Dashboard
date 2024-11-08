export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = () => {
    return !!useCookie("token").value;
  };

  const userIsLoggedIn = computed(() => isLoggedIn());

  if (!userIsLoggedIn.value) {
    return navigateTo("/signin");
  }
});
