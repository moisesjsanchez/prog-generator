<template>

  <div class="app">
    <h1>Prog Generator</h1>
    <p>Are you in musical rut, and can't come with some tasty, unique riffs. You have come to the right place.</p>
    <p>With this simple web appliction you can create a randomized base to build of on.</p>
    <h3>How To Use</h3>
    <ul>
      <li>1.) Click any one of the "Get" buttons to get a random guideline to go off of. </li>
      <li>2.) Write your riff based of the critera you get. You can follow this critera as strictly or loosely as you want.</li>
      <li>3.) Share and/or enjoy your riff!</li>
    </ul>
    <p>If you like the riff you create with your guidelines, please post your requirements and the riff you made to #proggen on
      social media!</p>
    <p>Enjoy the service!</p>
    <div class="container">
      <div class="btn">
        {{scale}}
      </div>
      <div class="btn">
        {{technique}}
      </div>
      <div class="btn">
        {{time_signature}}
      </div>
      <div class="btn">
        {{chord_prog}}
      </div>
    </div>
    <div class="center-container">
      <div @click=getScales class="random-btn">
        Get Scale
      </div>
      <div @click=getTechnique class="random-btn">
        Get Technique
      </div>
      <div @click=getTimeSignature class="random-btn">
        Get Time Signature
      </div>
      <div @click=getChordProg class="random-btn">
        Get Chord Progression
      </div>
    </div>
  </div>

</template>

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        scale: 'Select Scale',
        technique: 'Select Technique',
        time_signature: 'Select Time Signature',
        chord_prog: 'Select Chord Progression'
      }
    },
    // To fetch Guitarist Toolbox API random information
    methods: {
      getScales() {
        axios
          .get(
            'https://cors-anywhere.herokuapp.com/' + 'https://guitarist-toolbox.herokuapp.com/music-info/scales/random'
          )
          .then(response => {
            this.scale = response.data['Scale']
          })
          .catch(error => {
            console.log(error)
            this.scale = 'Scale does not exist'
          })
      },
      getTechnique() {
        axios
          .get(
            'https://cors-anywhere.herokuapp.com/' +
              'https://guitarist-toolbox.herokuapp.com/music-info/techniques/random'
          )
          .then(response => {
            this.technique = response.data['Technique']
          })
          .catch(error => {
            console.log(error)
            this.scale = 'Technique does not exist'
          })
      },
      getTimeSignature() {
        axios
          .get('https://cors-anywhere.herokuapp.com/' + 'https://guitarist-toolbox.herokuapp.com/music-info/times/random')
          .then(response => {
            this.time_signature = response.data['Time Signature']
          })
          .catch(error => {
            console.log(error)
            this.scale = 'Time signature does not exist'
          })
      },
      getChordProg() {
        axios
          .get(
            'https://cors-anywhere.herokuapp.com/' + 'https://guitarist-toolbox.herokuapp.com/music-info/chords/random'
          )
          .then(response => {
            this.chord_prog = response.data['Chord']
          })
          .catch(error => {
            console.log(error)
            this.scale = 'Chord does not exist'
          })
      }
    }
  }

</script>

<!-- Styling for application -->
<style scoped>

  .app {
    margin: 0 auto;
    width: 90%;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 20px;
    grid-column: 1/4;
  }

  .center-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 20px;
    grid-column: 1/4;
  }

  .btn {
    display: flex;
    background-color: #eee;
    border: 1px solid #333;
    align-items: center;
    justify-content: center;
  }

  .random-btn {
    display: flex;
    background-color: #eee;
    border: 1px solid #333;
    align-items: center;
    justify-content: center;
  }

</style>
