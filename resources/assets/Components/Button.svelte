<button type={type}>
  <slot />
</button>

<script>
  export let type = 'text';
</script>

<style type="text/scss">
  @import "Button";
</style>
