<template>
  <Page actionBarHidden="true">
    <PageTemplate>
      <ScrollView @scroll="scroll" orientation="horizontal">
        <StackLayout orientation="horizontal">
          <CardView
            ref="tile"
            v-for="(course, i) in courses"
            :key="i"
            margin="10"
            elevation="10"
            radius="10">
              <Image :style="{ height: imgStyle }" :src="course.img || 'https://placeimg.com/640/400/any'" />
          </CardView>
        </StackLayout>
      </ScrollView>

      <FitLesson
        v-for="(target, i) in currentCourse.targets"
        :key="i"
        :id="i"
        class="target"
        @download="download"
        @play="play"

        :title="target.title"
        :time="target.time"
        :img="target.img"
        :style="{
          borderBottomWidth: (currentCourse.targets.length - 1 === i)? '0' : '.5'
        }" />
    </PageTemplate>
  </Page>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue';
import Lesson from '@/components/Lesson.vue';
import FitLesson from '@/components/FitLesson.vue';
import Play from '@/components/Play.vue';
import courses from '@/courses';

const { screen: { mainScreen: screen } } = require('platform');

const coefficient = 2.35294118;

export default {
  data() {
    return {
      courses,
      currentCourse: {},
      currentCourseID: -1
    };
  },
  methods: {
    scroll({ scrollX }) {
      this.currentCourseID = Math.floor(scrollX / (screen.widthPixels / coefficient));
    },
    download(ev) {
      console.log(this.currentCourse.targets[ev]);
    },
    play(ev) {
      const mp3 = this.currentCourse.targets[ev].src;
      this.$store.commit('setTrack', mp3);
      this.$navigateTo(Play);
    }
  },
  components: {
    PageTemplate,
    Lesson,
    FitLesson
  },
  mounted() {
    this.currentCourseID = 0;
  },
  computed: {
    imgStyle() {
      return String(screen.widthPixels / 3.5);
    }
  },
  watch: {
    currentCourseID(val) {
      if (val < 0 || val >= this.courses.length)
        return;
      this.currentCourse = this.courses[val];
    }
  }
};
</script>

<style scoped lang="scss">
.target {
  border-bottom-color: #c0c0c0;
}

.subtitle {
  margin-left: 15;
  color: black;
}
</style>
