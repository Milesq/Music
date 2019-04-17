<template>
  <DockLayout stretchLastChild="false" class="wrapper">
    <StackLayout class="header">
      <label class="title">WAKING UP</label>
    </StackLayout>

    <StackLayout class="content">
      <ScrollView>
        <Label style="font-size: 45px;">
          d dsf
   s
        </Label>
      </ScrollView>
    </StackLayout>

    <FlexboxLayout class="footer">
      <Label>Home</Label>
      <Label>Lessons</Label>
      <Label>Walking</Label>
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
  // justify-content: center;
}

.title {
  font-size: 32px;
  color: black;
}
</style>
