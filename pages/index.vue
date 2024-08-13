<template>
    <div class="container-fluid">
    <div class="row my-5 justify-content-around">
        <div class="col-lg-5">
        <nuxt-link to="/pengunjung/tambah">
            <div class="card bg-pengunjung rounded-5">
            <div class="card-body">
                <h2>Pengunjung</h2>
            </div>
            </div>
        </nuxt-link>
        </div>
        <div class="col-lg-5"> 
            <nuxt-link to="/buku">
                <div class="card bg-buku rounded-5">
                    <div class="card-body">
                        <h2>Cari Buku</h2>
                    </div>
                </div>
            </nuxt-link>
        </div>
        </div>
        <h2 class="mt-5" style="margin-left: 150px;">STATISTIK</h2>
            <div class="row my-5 justify-content-around">
                <div class="col-lg-5">
                    <div class="card bg-spengunjung rounded-5">
                        <div class="card-body">
                            <div class="row">
                            <div class=" form-pengunjung col p-5"></div>
                                <nuxtLink to="/pengunjung">
                                    <div class="form-pengunjung"><h2 style="font-size: 60px; margin-right: 10px "><span class="no">{{ jml_pengunjung }}</span>Pengunjung</h2></div>
                                </nuxtLink>
                            </div>
                        </div>
                    </div>  
                </div>

                <div class="col-lg-5">
                    <div class="card bg-sbuku rounded-5">
                        <div class="card-body">
                        <div class="row">
                            <div class="col p-5"></div>
                                <NuxtLink to="/buku">
                                    <div class=""><h2 style="font-size: 70px; margin-right: 200px"><span class="no">{{ jml_buku }}</span>Buku</h2></div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
        <div class="line">
        <Statistik></Statistik>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const jml_pengunjung = ref(0)
const jml_buku = ref(0)

async function getjml_pengunjung() {
    const{error, data, count } = await supabase
    .from("pengunjung")
    .select('*', {count: 'exact' })
    if (count) jml_pengunjung.value = count
}

async function getjml_buku() {
    const{error, data, count } = await supabase
    .from("buku")
    .select('*', {count: 'exact' })
    if (count) jml_buku.value = count
}

onMounted(() => {
getjml_pengunjung()
getjml_buku( )
})

</script>


<style scoped>
.card {
    height: 250px;
    
}
.card.bg-pengunjung { 
    background-image: url('../assets/img/bg-home-kunjungan.jpeg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 70%;
}
.card.bg-buku { 
    background-image: url('../assets/img/cari.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 70%;
}
.card.bg-spengunjung { 
    background-color: #0a2831;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 70%;
}
.card.bg-sbuku { 
    background-color: #0a2831;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 70%;
}

</style>
