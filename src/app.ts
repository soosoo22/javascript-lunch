class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <matzip-gnb></matzip-gnb>
    <main>
<<<<<<< HEAD
      <matzip-filter-container></matzip-filter-container>
      <matzip-list-container></matzip-list-container>
=======
      <matzip-nav></matzip-nav>
      <matzip-default-container>
        <matzip-filter-container></matzip-filter-container>
        <matzip-list-container></matzip-list-container>
      </matzip-default-container>
      <matzip-favorite-container class="matzip-container--close">
        <matzip-list-container></matzip-list-container>
      </matzip-favorite-container>
>>>>>>> step2
      <matzip-modal></matzip-modal>
    </main>
    `;
  }
}

customElements.define('matzip-app', App);
