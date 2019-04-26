<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label @tap="togglePlay" text="wsf" />
    </StackLayout>
  </Page>
</template>

<script>
import { TNSPlayer } from 'nativescript-audio-player';

export default {
  data() {
    return {
      player: {}
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
      if (this.player.isAudioPlaying()) {
        this.player.pause();
      } else {
        this.player.play();
      }
    }
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
        this.player.getAudioTrackDuration().then(duration => {
          console.log(`song duration:`, duration);
        });
      })
      .catch(this.trackError);
  }
};
</script>

<style>

</style>
