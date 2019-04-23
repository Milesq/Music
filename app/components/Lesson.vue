<template>
  <StackLayout>
    <CardView class="img" margin="15" elevation="10" radius="10">
      <Image :src="img" />
    </CardView>
    <Label class="title" :text="title" />
    <Label class="time">{{ time | secondsToMinutes }}</Label>
  </StackLayout>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'https://via.placeholder.com/200x135?text=200+x+135'
    },
    title: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      default: 0
    }
  },
  filters: {
    secondsToMinutes(s) {
      const minutes = Math.floor(s / 60);
      let seconds = s % 60;
      seconds = seconds < 10? '0' + seconds : seconds;

      return `${minutes}:${seconds}`;
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  color: black;
  font-size: 16;
}

.img {
  width: 150;
}

.title,
.time {
  margin-left: 17;
}

.title {
  font-weight: 500;
}
</style>
