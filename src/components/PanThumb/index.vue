<script setup>
import { defineProps } from 'vue'
defineProps({
  image: {
    type: String
  },
  zIndex: {
    type: Number,
    default: 1
  },
  width: {
    type: String,
    default: '150px'
  },
  height: {
    type: String,
    default: '150px'
  }
})
</script>

<template>
  <div class="pan-item" :style="{ zIndex, width, height }">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot></slot>
      </div>
    </div>
    <div :style="{ backgroundImage: `url(${image})` }" class="pan-thumb"></div>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */

.pan-item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  .pan-info {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
  }
  h3 {
    color: #fff;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 2px;
    font-size: 14px;
    margin: 0 60px;
    padding: 22px 0 0 0;
    height: 85px;
    font-family: 'Open Sans', Arial, sans-serif;
    text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  p {
    color: #fff;
    padding: 10px 5px;
    font-style: italic;
    margin: 0 30px;
    font-size: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

    a {
      display: block;
      color: #333;
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      color: #fff;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 9px;
      letter-spacing: 1px;
      padding-top: 24px;
      margin: 7px auto 0;
      font-family: 'Open Sans', Arial, sans-serif;
      opacity: 0;
      transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s,
        background 0.2s linear 0s;
      transform: translateX(60px) rotate(90deg);
    }

    a:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  .pan-info-roles-container {
    padding: 20px;
    text-align: center;
  }
}

.pan-thumb {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  transform-origin: 95% 40%;
  transition: all 0.3s ease-in-out;
}

.pan-item:hover .pan-thumb {
  transform: rotate(-110deg);
}

.pan-item:hover .pan-info p a {
  opacity: 1;
  transform: translateX(0px) rotate(0deg);
}
</style>
