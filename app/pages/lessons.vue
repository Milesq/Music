<template>
  <Page actionBarHidden="true">
    <PageTemplate>
      <ScrollView orientation="horizontal">
        <StackLayout orientation="horizontal">
          <CardView
            v-for="(lesson, i) in lessons"
            :key="i"
            margin="10"
            elevation="10"
            radius="10">
              <Image class="img" :src="lesson.img || 'https://placeimg.com/640/400/any'" />
          </CardView>
        </StackLayout>
      </ScrollView>

      <Label class="subtitle" text="All Lessons" />
      <FitLesson
        v-for="(lesson, i) in lessons"
        :key="i"
        :id="i"
        class="lesson"

        :title="lesson.title"
        :time="lesson.time"
        :img="lesson.img"
        :style="{
          borderBottomWidth: (lessons.length - 1 === i)? '0' : '.5'
        }" />
    </PageTemplate>
  </Page>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue';
import Lesson from '@/components/Lesson.vue';
import FitLesson from '@/components/FitLesson.vue';
import lessons from '@/lessons';

export default {
  data() {
    return { lessons };
  },
  components: {
    PageTemplate,
    Lesson,
    FitLesson
  }
};
</script>

<style scoped lang="scss">
.img {
  height: 200;
}

.lesson {
  // border-bottom-width: 15;
  border-bottom-color: #c0c0c0;
}

.subtitle {
  margin-left: 15;
  color: black;
}
</style>
