import { Howl } from 'howler';

const buttonClickSound = new Howl({
   src: ['./zipclick.mp3']
});

export default function playButtonClickSound() {
   buttonClickSound.play();
}