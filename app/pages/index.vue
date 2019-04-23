<template>
  <Page actionBarHidden="true">
    <PageTemplate>
      <Label>Recommended</Label>
      <CardView margin="10" elevation="10" radius="10">
        <StackLayout>
          <Image src="https://placeimg.com/640/400/any" />
        </StackLayout>
      </CardView>
    </PageTemplate>
  </Page>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue';

export default {
  components: {
    PageTemplate
  }
};
</script>

<style scoped lang="scss">

</style>
