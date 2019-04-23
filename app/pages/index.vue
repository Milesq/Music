<template>
  <Page actionBarHidden="true">
    <PageTemplate>
      <Label class="subtitle">Recommended</Label>
      <CardView margin="10" elevation="10" radius="10">
        <StackLayout>
          <Image src="https://placeimg.com/640/400/any" />
        </StackLayout>
      </CardView>

      <FlexboxLayout class="subtitle" justifyContent="space-between">
        <Label>Next target</Label>
        <Button
          @tap="$store.commit('push', 'targets')"
          class="view-link"
          text="View all" />
      </FlexboxLayout>
      <CardView class="next-target-card" margin="10" elevation="10" radius="10">
        <FlexboxLayout class="flex">
          <Label>Day {{ day | toWord }}</Label>

          <Label>
            <FormattedString>
              <Span class="fas menu__icon" text.decode="&#xf019;"/> <!-- f0c2 -->
            </FormattedString>
          </Label>
        </FlexboxLayout>
      </CardView>

      <FlexboxLayout class="subtitle" justifyContent="space-between">
        <Label>Lessons</Label>
        <Button
          @tap="$store.commit('push', 'lessons')"
          class="view-link"
          text="View all" />
      </FlexboxLayout>
      <ScrollView orientation="horizontal" class="lessons">
        <StackLayout orientation="horizontal">
          <Lesson
            v-for="lesson in lessons"
            :key="lesson.title"

            :img="lesson.img"
            :title="lesson.title"
            :time="lesson.time" />
        </StackLayout>
      </ScrollView>
    </PageTemplate>
  </Page>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue';
import Lesson from '@/components/Lesson.vue';

export default {
  data() {
    return {
      day: 1,
      lessons: [
        {
          // img: 'https://placeimg.com/200/135/any',
          title: 'Welcome',
          time: 123
        },
        {
          img: 'https://placeimg.com/200/135/any',
          title: 'Second lesson',
          time: 121
        },
        {
          img: 'https://placeimg.com/200/135/nature',
          title: 'Second lesson',
          time: 545
        }
      ]
    };
  },
  components: {
    PageTemplate,
    Lesson
  },
  filters: {
    toWord(num) {
      const words = [
        'One',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
        'Sixth'
      ];

      return words[num - 1];
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/_app-variables.scss';

.lessons {
  margin-bottom: 20;
}

.next-target-card {
  .flex {
    justify-content: space-between;
    align-items: center;
    padding: 15;
    font-size: 24;
    font-weight: 500;
    font-family: Roboto;

    background-color: $item-blue;
    color: white;

    .fas {
      font-size: 24;
    }
  }
}

.subtitle {
  margin-top: 20;
  margin-left: 10;
  margin-right: 10;

  color: black;
  font-size: 16;
  font-weight: 500;

  .view-link {
    font-size: 13;
    color: $item-blue;
    background-color: rgba(0, 0, 0, 0);

    border-color: transparent;
    border-width: 1;

    &:pressed {
      background-color: #ccc;
    }
  }
}
</style>
