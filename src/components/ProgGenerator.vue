<template>

  <v-container>
    <h1 class="display-3 ma-5 text-center">Welcome to Prog Generator!</h1>
    <v-card class="mt-5">
      <v-card-text>
        <p class="mt-3">Are you in musical rut, and can't come with some tasty, and unique riffs. Every just wanted to discover new techniques
          and just get to writing a riff? Or do you lack a n-sided die with a bunch of various musical terms to help your song
          writing process. You have come to the right place. With this simple web appliction you can create a randomized base
          to build off. Your imagination is the limit!</p>
        <v-divider />
        <v-card-title>How To Use</v-card-title>
        <ul>
          <li>Click any one of the "Get" buttons to get a random guideline to go off of. Sometimes the first click takes a couple seconds. This is the application waking up!</li>
          <li>Write your riff based off the critera you get. You can follow this critera as strictly or loosely as you want.</li>
          <li>Enjoy your riff!</li>
        </ul>
        <v-divider class="mt-3" />
        <p class="ml-5 mt-5">If you like the riff you created, please post your guidelines and riff to #proggen on social
          media!
        </p>
        <v-row class="text-left mt-5">
          <v-col class="ml-5">
            <v-btn icon class="mr-7" href="https://www.instagram.com/" target="_blank">
              <v-icon large class="fab fa-instagram" color="red darken-1" />
            </v-btn>
            <v-btn icon class="mr-7" href="https://soundcloud.com/" target="_blank">
              <v-icon large class="fab fa-soundcloud" color="red darken-1" />
            </v-btn>
            <v-btn icon class="mr-7" href="https://www.facebook.com/" target="_blank">
              <v-icon large class="fab fa-facebook" color="red darken-1" />
            </v-btn>
            <v-btn icon href="https://twitter.com/?lang=en" target="_blank">
              <v-icon large class="fab fa-twitter" color="red darken-1" />
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Random Critera Selector -->
    <div class="text-center mt-10">
      <v-row justify="center">
        <v-col md="6" cols="12">
          <v-btn depressed color="red lighten-1" class="ma-1" width="100%" @click="getScales()">{{this.scale}}</v-btn>
        </v-col>
        <v-col md="6" cols="12">
          <v-btn depressed color="red lighten-1" class="ma-1" width="100%" @click="getTechnique()">{{this.technique}}</v-btn>
        </v-col>
        <v-col md="6" cols="12">
          <v-btn depressed color="red lighten-1" class="ma-2" width="100%" @click="getTimeSignature()">{{this.time_signature}}</v-btn>
        </v-col>
        <v-col md="6" cols="12">
          <v-btn depressed color="red lighten-1" class="ma-1" width="100%" @click="getChordProg()">{{this.chord_prog}}</v-btn>
        </v-col>
      </v-row>
    </div>

  </v-container>

</template>

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        scale: 'Get Scale',
        technique: 'Get Technique',
        time_signature: 'Get Time Signature',
        chord_prog: 'Get Chord Progression'
      }
    },
    // To fetch Guitarist Toolbox API random information
    methods: {
      getScales() {
        axios
          .get('https://guitarist-toolbox.herokuapp.com/music-info/scales/random')
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
          .get('https://guitarist-toolbox.herokuapp.com/music-info/techniques/random')
          .then(response => {
            this.technique = response.data['Technique']
          })
          .catch(error => {
            console.log(error)
            this.technique = 'Technique does not exist'
          })
      },
      getTimeSignature() {
        axios
          .get('https://guitarist-toolbox.herokuapp.com/music-info/times/random')
          .then(response => {
            this.time_signature = response.data['Time Signature']
          })
          .catch(error => {
            console.log(error)
            this.time_signature = 'Time signature does not exist'
          })
      },
      getChordProg() {
        axios
          .get('https://guitarist-toolbox.herokuapp.com/music-info/chords/random')
          .then(response => {
            this.chord_prog = response.data['Chord']
          })
          .catch(error => {
            console.log(error)
            this.chord_prog = 'Chord does not exist'
          })
      }
    }
  }

</script>
