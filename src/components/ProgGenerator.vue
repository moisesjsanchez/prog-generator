<template>
  <div class="app">
    <h1>Prog Generator</h1>
    <p>To create some guide lines on your piece click the new idea button</p>
    <div class="container">
      <div class="btn">
        Scale
      </div>
      <div class="btn">
        Technique
      </div>
      <div class="btn">
        Time Signature
      </div>
    </div>
    <div class="center-container">
      <div class="random-btn">
        New Idea
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Styling for application -->
<style scoped>

.app{
  margin: 0 auto;
  width: 80%;
}

.container{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: minmax(50px,auto);
  grid-gap: 10px;
  grid-column: 1/4;
}

.btn{
  display: flex;
  background-color: #eee;
  border: 1px solid #333;
  align-items: center;
  justify-content: center;
}

.random-btn{
  display: flex;
  background-color: #eee;
  border: 1px solid #333;
  align-items: center;
  justify-content: center;
}

</style>
