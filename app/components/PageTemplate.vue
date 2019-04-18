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
      <Label @tap="$store.commit('push', '/')">Home</Label>
      <Label @tap="$store.commit('push', 'lessons')">Lessons</Label>
      <Label @tap="$store.commit('push', 'walking')">Walking</Label>
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
</style>
