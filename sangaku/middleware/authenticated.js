export default function ({ store, redirect }) {
  if (!store.getters['getIsLoggedIn']) {
    return redirect('/kaisoku')
  }
}
