<template>
<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-lg-12"> 
      <h2 class="text-center my-4">ISI BUKU KUNJUNGAN</h2>
        <from>
          <div class="mb-3"> 
          <input type="text" class="from control from-control-lg rounded-5" placeholder="NAMA"/> 
        </div>
        <div class="mb-3"> 
          <select class="from-control from-control-lg from-select rounded-5">
            <opetion value="">KEANGGOTAAN</opetion>
            <opetion value="Siswa">SIswa</opetion>
            <opetion value="Guru">Guru</opetion>
            <opetion value="Staf">Staf</opetion>
            <opetion value="Umum">Umum</opetion>
          </select>
          </div>
          <div class="mb-3"> 
          <div class="row"> 
          <div class="col-md-4"> 
          <select class="from-control from-control-lg from-select rounded-5 mb-2">
            <opetion value="">TINGKAT</opetion>
            <opetion value="X">X</opetion>
            <opetion value="XI">XI</opetion>
            <opetion value="XII">XII</opetion>
            </select>
          </div>
          <div class="col-md-4"> 
          <select class="from-control from-control-lg from-select rounded-5 mb-2">
          <opetion value="">JURUSAN</opetion>
          <opetion value="PPLG">PPLG</opetion>
          <opetion value="TJKT">TJKT</opetion>
          <opetion value="TSM">TSM</opetion>
          <opetion value="DKV">DKV</opetion>
          <opetion value="TOI">TOI</opetion>
        </select>
      </div>
      <div class="col-md-4"> 
          <select class="from-control from-control-lg from-select rounded-5 mb-2">
          <opetion value="">KELAS</opetion>
          <opetion value="1">1</opetion>
          <opetion value="2">2</opetion>
          <opetion value="3">3</opetion>
          <opetion value="4">4</opetion>
        </select>
      </div>
    </div>
  </div>
  <div class="col-md-3"> 
          <select class="from-control from-control-lg from-select rounded-5">
          <opetion value="">KEPERLUAN</opetion>
          <opetion value="baca">baca buku</opetion>
          <opetion value="pinjam">pinjam buku</opetion>
          <opetion value="kembalikan">kembalikan buku</opetion>
        </select>
      </div>
      <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">KIRIM</button>
    </from>
  </div>   
</div>
</div>
</template>

<script setup>
const supabase = useSupabaseClient()

const members = ref([])
const objectives = ref([])

const form =ref({
    nama:"",
    keanggotaan:"",
    tingkat:"",
    jurusan:"",
    kelas:"",
    keperluan:"",
})
const kirimData = async() => {
    const { error } = await supabase.from('pengunjung').insert([form.value])
    if(!error) navigateTo('/pengunjung')
}
const getKeanggotaan = async() => {
    const { data, error } = await supabase.from('keanggotaan').select('*')
    if(data)members.value = data
}
const getKeperluan = async() => {
    const { data, error } = await supabase.from('keperluan').select('*')
    if(data)objectives.value = data
}

onMounted(() => {
    getKeanggotaan()
    getKeperluan()
})
</script>
