<main>
  <header>
    <a href="/">
      ADONISVELTE
    </a>

    <Input label="" placeholder="Search" class="search" />

    <a href="#logout" on:click="{signOut}">Sign out</a>
  </header>

  <aside>
    <nav>
      <a href="/questions/create" class="-highlighted">
        Highlighted
      </a>

      <a href="/questions">
        Item
      </a>
    </nav>
  </aside>

  <section>
    <slot />
  </section>
</main>

<svelte:head>
  <script src="https://apis.google.com/js/client:platform.js?onload=init" async defer></script>
</svelte:head>

<script>
  import 'prismjs';
  import Input from '@/Components/Input.svelte';

  window.init = init

  function init() {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({
        client_id: document.querySelector('[name="google-signin-client_id"]')
          .getAttribute('content'),
      });
    });
  }

  function signOut() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      window.location.href = '/logout'
    });
  }
</script>

<style type="text/scss">
  @import "Main";
</style>
