<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title">Bieganie</Label>
    </ActionBar>
    <StackLayout>
      <Label>
        {{ $store.state.route }}
      </Label>
    </StackLayout>
  </Page>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">

</style>
