<template>
  <FlexboxLayout class="lessonWrapper">
    <StackLayout orientation="horizontal" @tap="$emit('play', id)">
      <CardView class="img" margin="15" elevation="10" radius="10">
        <Image :src="img" />
      </CardView>
      <StackLayout>
        <Label class="title" :text="title" />
        <Label class="time">{{ time | secondsToMinutes }}</Label>
      </StackLayout>
    </StackLayout>
    <Label @tap="$emit('download', id)">
      <FormattedString>
        <Span
          :style="{
            color: downloaded(id)? '#aaa' : ''
          }"
          class="fas menu__icon download"
          text.decode="&#xf063;"/>
      </FormattedString>
    </Label>
  </FlexboxLayout>
</template>

<script>
import { required } from '@/utils.js';

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
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
  methods: {
    downloaded(num = required()) {
      return true;
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

.lessonWrapper {
  justify-content: space-between;
  align-items: center;
  padding-right: 10;
}

.img {
  width: 100;
}

.title {
  font-weight: 500;
  margin-top: 17;
}

.download {
  color: black;
  font-size: 25;
}
</style>
