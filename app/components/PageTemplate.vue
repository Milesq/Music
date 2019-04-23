<template>
  <StackLayout stretchLastChild="false" class="wrapper">
    <StackLayout class="header">
      <label class="title" @tap="$store.commit('push', '/')">WAKING UP</label>
      <label class="subtitle">Lorem Ipsum</label>
    </StackLayout>

    <FlexboxLayout class="usable-part">
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
    </FlexboxLayout>
  </StackLayout>
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
  font-family: sans-serif;
}

.header {
  text-align: center;

  .subtitle {
    color: #888;
  }

  .title {
    color: black;
    font-size: 32;
  }
}

.usable-part {
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
}

.content {
  background-color: #f0f0f0;
}

.footer {
  background-color: #fff;
  font-size: 12;
  font-weight: 800;
  border-top-width: .5;
  border-top-color: black;
  padding: 15px;
  justify-content: space-around;

  min-height: 55;
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
