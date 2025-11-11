<template>
  <div class="testing">
    <h1>Testing Vue Component</h1>
    <div class="id-display">
      <h2>URL Parameter ID:</h2>
      <p class="id-value">{{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestingVue',
  mounted() {
    console.log('TestingVue component mounted with ID:', this.$route.params.id);
  },
  watch: {
    '$route.params.id': {
      handler(newId) {
        console.log('ID parameter changed to:', newId);
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.testing {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.id-display {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #42b983;
}

.id-value {
  font-size: 24px;
  font-weight: bold;
  color: #42b983;
  margin: 10px 0;
}

.route-info {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.route-info p {
  margin: 5px 0;
}
</style>
