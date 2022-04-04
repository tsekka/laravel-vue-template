
<template>
  <div class="card shadow-lg">
    <div class="card-body">
      <h1 class="card-title"><slot name="title"></slot></h1>
      <slot></slot>
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>
