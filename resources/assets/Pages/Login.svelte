<div class="login">
  <div class="login__wrapper">
    <form on:submit|preventDefault={login} method="post">
      <Input name="email" bind:value={email} label="Email: " placeholder="email" />
      <Input name="password" bind:value={password} label="Password: " placeholder="password" type="password" />
      <Button type="submit">Log In</Button>
      {#if error}
        {error}
      {/if}
    </form>

    <div class="g-signin2" data-onsuccess="google"></div>
  </div>
</div>

<svelte:head>
  <script src="https://apis.google.com/js/client:platform.js?onload=init" async defer></script>
  <title>Login - Adonisvelte</title>
</svelte:head>

<script>
  import Input from '@/Components/Input.svelte';
  import Button from '@/Components/Button.svelte';

  export let email
  export let password
  export let error = null

  window.google = google
  window.init = init

  function init() {
    window.gapi.auth2.init({
      client_id: document.querySelector('[name="google-signin-client_id"]')
        .getAttribute('content'),
    });
  }

  function login() {
    let data = {
      email,
      password
    };

    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          location.href = '/'
        } else {
          error = res.message
        }
      })
      .catch((err) => {
        error = err.message
      })
  }

  function google() {
    window.location.href = '/google/redirect'
  }
</script>

<style type="text/scss">
  @import "resources/assets/Pages/Login";
</style>
