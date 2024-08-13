<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <NuxtLink to="/" class="btn btn-outline-dark mt-4 btn-lg">KEMBALI</NuxtLink>
          <h2 class="text-center my-4 fw-bold">RIWAYAT KUNJUNGAN</h2>
          <div class="my-3">
            <form @submit.prevent="getPengunjung">
              <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Cari Nama..." @input="getPengunjung" />
            </form>
          </div>
          <div class="my-3">Menampilkan {{ visitors.length }} dari {{ jmlpengunjung }} riwayat</div>
          <div class="table-responsive">
            <table class="table table-bordered border-dark">
            <thead>
              <tr class="text-center fw-bold fst-italic">
                <td>no</td>
                <td>nama</td>
                <td>kategori</td>
                <td>waktu</td>
                <td>Keperluan</td>
                <td>tanggal</td>
                <td>kelas</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitor, i) in visitors" :key="i" class="text-center fst-italic">
                <td>{{ i+1 }}.</td>
                <td>{{ visitor.nama }}</td>
                <td>{{ visitor.keanggotaan.nama }}</td>
                <td>{{ visitor.waktu }} </td>
                <td>{{ visitor.keperluan.nama }}</td>
                <td>{{ visitor.tanggal }}</td>
                <td>{{ visitor.tingkat}}-{{ visitor.jurusan }}{{ visitor.kelas }}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const supabase= useSupabaseClient() 

const keyword = ref('')
const visitors = ref([])
const jmlpengunjung= ref(0)

const getPengunjung = async () => {
  const { data, error } = await supabase
  .from('pengunjung')
  .select(`*, keanggotaan(*), keperluan(*)`)
  .order('id', { ascending: false})
  .ilike("nama",`%${keyword.value}%`)

  if (data) visitors.value = data
}

const getJmlPengunjung = async () => {
  const{ data, count } = await supabase
    .from("pengunjung") 
    .select('*', { count: "exact" })
    if(data) jmlpengunjung.value = count
}

onMounted(() =>{
  getPengunjung ()
  getJmlPengunjung ()
})

</script>
<style scoped>
</style>

