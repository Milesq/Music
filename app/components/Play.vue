<template>
  <Page>
    <ActionBar>
      <Label class="header">Lesson - {{ music.title }}</Label>
    </ActionBar>

    <FlexboxLayout class="content">
      <Image :src="music.img" />
      <StackLayout orientation="horizontal">
        <Label @tap="seekPos(-15000)" class="fas__wrapper">
          <FormattedString>
            <span
              class="fas fas--small"
              text.decode="&#xf04a;"/>
          </FormattedString>
        </Label>

        <Label @tap="togglePlay" class="fas__wrapper">
          <FormattedString>
            <Span
              v-if="played"
              class="fas"
              text.decode="&#xf04c;"/>

            <Span
              v-else
              class="fas"
              text.decode="&#xf04b;"/>
          </FormattedString>
        </Label>

        <Label @tap="seekPos(15000)" class="fas__wrapper">
          <FormattedString>
            <span
              class="fas fas--small"
              text.decode="&#xf04e;"/>
          </FormattedString>
        </Label>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import { TNSPlayer } from 'nativescript-audio-player';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      player: {
        isAudioPlaying: () => true
      },
      played: true
    };
  },
  methods: {
    trackComplete() {
      console.log('Track complete!');
    },
    trackError(err) {
      console.log(err);
    },
    togglePlay() {
      this.played = !this.played;

      if (this.player.isAudioPlaying()) {
        this.player.pause();
      } else {
        this.player.play();
      }
    },
    seekPos(value) {
      this.player.getAudioTrackDuration().then(duration => {
          this.player.seekTo(this.player.currentTime + value);
        });
    }
  },
  computed: {
    ...mapState(['music'])
  },
  mounted() {
    this.player = new TNSPlayer;
    this.player._debug = true;

    this.player
      .initFromFile({
        audioFile: 'http://serwer1882393.home.pl/audio/myLesson.mp3',
        loop: false,
        completeCallback: this.trackComplete.bind(this),
        errorCallback: this.trackError.bind(this)
      })
      .then(() => {
        this.player.play();
      })
      .catch(this.trackError);
  }
};
</script>

<style scoped lang="scss">
.content {
  flex-direction: column;
  align-items: center;
}

.fas {
  font-size: 72;

  &__wrapper {
    margin: 30;
  }

  &--small {
    font-size: 40;
  }
}
</style>
