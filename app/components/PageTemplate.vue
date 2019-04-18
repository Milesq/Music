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
      <FlexboxLayout @tap="$store.commit('push', '/')" class="menu__option">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf015;"/>
          </FormattedString>
        </Label>
        <Label>Home</Label>
      </FlexboxLayout>

      <FlexboxLayout @tap="$store.commit('push', 'lessons')" class="menu__option">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf02e;"/>
          </FormattedString>
        </Label>
        <Label>Lessons</Label>
      </FlexboxLayout>

      <FlexboxLayout @tap="$store.commit('push', 'walking')" class="menu__option">
        <Label>
          <FormattedString>
            <Span class="fas menu__icon" text.decode="&#xf70c;"/>
          </FormattedString>
        </Label>
        <Label>Walking</Label>
      </FlexboxLayout>
    </FlexboxLayout>
  </DockLayout>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}

.header {
  background-color: #f00;
  dock: top;
}

.content {
  background-color: #0f0;
  dock: top;
}

.footer {
  background-color: #00f;
  color: white;
  dock: bottom;
  padding: 15px;
  justify-content: space-around;
}

.title {
  color: black;
}

.menu {
  &__icon {
    color: white;
    font-size: 25px;
  }

  &__option {
    flex-direction: column;
    align-items: center;
  }
}
</style>
