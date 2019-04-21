<template>
  <DockLayout stretchLastChild="false" class="wrapper">
    <StackLayout class="header">
      <label class="title">WAKING UP</label>
    </StackLayout>

    <ScrollView class="content">
      <StackLayout>
        <slot></slot>
      </StackLayout>
    </ScrollView>

    <FlexboxLayout class="footer">
      <FlexboxLayout @tap="$store.commit('push', '/')" :class="['menu__option', {
        active: isActive('index')
      }]">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf015;"/>
          </FormattedString>
        </Label>
        <Label>Home</Label>
      </FlexboxLayout>

      <FlexboxLayout @tap="$store.commit('push', 'lessons')" :class="['menu__option', {
        active: isActive('lessons')
      }]">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf02e;"/>
          </FormattedString>
        </Label>
        <Label>Lessons</Label>
      </FlexboxLayout>

      <FlexboxLayout @tap="$store.commit('push', 'walking')" :class="['menu__option', {
        active: isActive('walking')
      }]">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf17b;"/>
          </FormattedString>
        </Label>
        <Label>Walking</Label>
      </FlexboxLayout>
    </FlexboxLayout>
  </DockLayout>
</template>

<script>
export default {
  methods: {
    isActive(queryRoute) {
      let { state: { route } } = this.$store;
      if (queryRoute !== '/')
        route = route === '/'? 'index' : route;

      return queryRoute == route;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}

.header {
  background-color: #ff0;
  dock: top;
}

.content {
  background-color: #0f0;
  dock: top;
}

.footer {
  background-color: #fff;
  font-size: 12;
  font-weight: 800;
  border-top-width: .5;
  border-top-color: black;
  dock: bottom;
  padding: 15px;
  justify-content: space-around;
}

.title {
  color: black;
}

.menu {
  &__icon {
    font-size: 22px;
    font-weight: 600;
  }

  &__option {
    flex-direction: column;
    align-items: center;
    color: #999;

    &.active {
      color: black;
      transform: scale(1.05);
    }
  }
}
</style>
