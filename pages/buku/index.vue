<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">BUKU</h2>
        <div class="my-3">
          <input type="search" class="from-control rounded-5" placeholider="mau baca apa hari ini?">
        </div>
        <div class="my-3 text-muted">menampilkan 3 dari 3</div>
        <div class="row">
          <div class="col-lg-2">
            <div class="card mb-3">
            <div class="card-body">
              <img src="~/assets/img/cover 1.jpg" class="bg-home-kunjungan.jpeg" alt="cover 1">
            </div>
          </div>
        </div>
        <div class="col-lg-2">
            <div class="card mb-3">
            <div class="card-body">
              <img src="~/assets/img/" class="cover 2.jpg" alt="cover 2">
            </div>
          </div>
        </div>
        <div class="col-lg-2">
            <div class="card mb-3">
            <div class="card-body">
              <img src="~/assets/img/cover 3.jpg" class="cover" alt="cover 3">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card-body {
  width: 100%;
  height: 20em;
  padding: 0;
}
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 30;
}
</style>

<from @submit.perevent="getBooks">
<input v-model="keyword" type="search">
</from>