<div class="{$$props.class}">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  {#if type === 'number'}
    <input id={id} bind:value type="number" placeholder={placeholder}>
  {:else if type === 'file'}
    <input id={id} bind:value type="file" placeholder={placeholder}>
  {:else if type === 'password'}
    <input id={id} bind:value type="password" placeholder={placeholder}>
  {:else if type === 'area'}
    <textarea id={id} bind:value placeholder={placeholder} rows="5"></textarea>
  {:else}
    <input id={id} bind:value placeholder={placeholder}>
  {/if}
</div>

<script>
  import { v4 } from 'uuid';

  export let label;
  export let placeholder;
  export let value;
  export let type = 'text';

  let id = v4();
</script>

<style type="text/scss">
  @import "Input";
</style>
